import { IOrderRelationsDTO } from '@/dtos/order-relations.dto';
import { IOrderRepository } from './../../../../../repositories/interfaces/interface-order-repository';
import { IDateProvider } from '@/providers/DateProvider/interface-date-provider'
import { IMailProvider } from '@/providers/MailProvider/interface-mail-provider'
import { IPaymentsRepository } from '@/repositories/interfaces/interface-payments-repository';
import { IUsersRepository } from '@/repositories/interfaces/interface-users-repository';
import { AppError } from '@/usecases/errors/app-error'
import { Status } from '@prisma/client';
import 'dotenv/config'

export interface IRequestReceiveEvent {
  event: string
  payment: {
    id: string
    customer: string
    invoiceUrl: string | null
    description: string | null
    billingType: string
    paymentDate: string | null
    installment: string | null
    value: number
    netValue: number
    originalValue: number | null
    creditCard: {
      creditCardToken: string
    } | null
  }
}

export class PaymentWebHookUseCases {
  constructor(
    private paymentsRepository: IPaymentsRepository,
    private orderRepository: IOrderRepository,
    private mailProvider: IMailProvider,
    private userRepository: IUsersRepository,
    private dayjsProvider: IDateProvider
  ) {}

  async execute({ event, payment }: IRequestReceiveEvent): Promise<void> {
    // [x] buscar pagamento pelo id
    const findPaymentExist = await this.paymentsRepository.findByAsaasPaymentId(
      String(payment.id),
    )

    // [x] validar se o pagamento existe
    if (!findPaymentExist) {
      throw new AppError('Pagamento não encontrado', 404)
    }

    // [x] validar se o pagamento já foi aprovado
    if (findPaymentExist.paymentStatus === Status.APPROVED) {
      throw new AppError('Pagamento já foi feito', 400)
    }

    // [x] buscar pedido pelo id
    const findOrderExist = await this.orderRepository.findById(findPaymentExist.orderId) as unknown as IOrderRelationsDTO

    // [x] validar se o pedido existe
    if (!findOrderExist) {
      throw new AppError('Pedido não encontrado', 404)
    }

    // [x] buscar todos os usuarios administradores
    const listUsersAdmin = await this.userRepository.listAdmins()
    
    // =============REPROVADO=============
    // [x] Capturar evento de pagamento com cartão reprovado por análise manual de risco.
    if (
      event === 'PAYMENT_REPROVED_BY_RISK_ANALYSIS') {
      // [x] atualizar payment no banco de dados com os dados recebidos e status REPROVED
      await this.paymentsRepository.updateById(
        payment.id,
        Status.REPROVED,
        new Date(this.dayjsProvider.addDays(0)),
      )
      // [x] criar variavel com caminho do templeate de email de pagamento reprovado
      const templatePathUserReproved =
        './views/emails/admin-payment-reproved.hbs'

      // [x] disparar envio de email de pagamento recebido do usuário com nota fiscal(invoice)
      await this.mailProvider.sendEmail(
        findOrderExist.user.email,
        findOrderExist.user.name,
        'Pagamento Reprovado',
        payment.invoiceUrl,
        templatePathUserReproved,
        {
          order: findOrderExist,
        },
      )
    
      // [x] criar variavel com caminho do templeate de email de pagamento reprovado
      const templatePathAdminPaymentReproved =
      './views/emails/admin-payment-reproved.hbs'

      // [x] atualizar o pedido com status CANCELED
      await this.orderRepository.updateStatus(
        findOrderExist.id,
        Status.CANCELED
      )

      // [x] adicioanr descrição no pedido para informar que o pagamento foi reprovado
      await this.orderRepository.addDescription(findOrderExist.id, 'Reprovado pela análise de risco do cartão de crédito') 

      // ENVIAR EMAIL PARA ADMIN DO SISTEMA AVISANDO QUE O PAGAMENTO FOI REPROVADO
      // [x] for para buscar users administradores e enviar email de pagamento reprovado
      for (const admin of listUsersAdmin) {
        await this.mailProvider.sendEmail(
          admin.email,
          admin.name,
          `Pagamento Reprovado`,
          payment.invoiceUrl,
          templatePathAdminPaymentReproved,
          {
            order: findOrderExist,
          },
        )
      }
      return
    }

    // =============APROVADO=============
    // [x] atualizar status de pagamento para "APPROVED" no banco de dados
    await this.paymentsRepository.updateById(
      payment.id,
      Status.APPROVED,
      new Date(this.dayjsProvider.addDays(0)),
    )

    // [x] adicionar descrição que o pagamento foi aprovado
    await this.orderRepository.addDescription(findOrderExist.id, 'Pagamento aprovado')
   
    // [x] criar variavel com caminho do template de email
    const templatePathApproved = './views/emails/payment-approved.hbs'

    // [x] disparar envio de email de pagamento recebido do usuário com nota fiscal(invoice)
    await this.mailProvider.sendEmail(
      findOrderExist.user.email,
      findOrderExist.user.name,
      'Aprovação de Pagamento',
      payment.invoiceUrl,
      templatePathApproved,
      {
        order: findOrderExist,
      },
    )

    // [x] disparar envio de email de pagamento recebido para o admin com comprovante(payment - banco de dados API)
    const templatePathAdmin = './views/emails/admin-payment-approved.hbs'

    // [x] for para buscar users administradores e enviar email de pagamento aprovado
    for (const admin of listUsersAdmin) {
      await this.mailProvider.sendEmail(
        admin.email,
        admin.name,
        `Pagamento Aprovado`,
        payment.invoiceUrl,
        templatePathAdmin,
        {
          order: findOrderExist,
        },
      )
    }
  }
}
