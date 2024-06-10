import { DayjsDateProvider } from '../../../../../providers/DateProvider/implementations/provider-dayjs';
import { PrismaOrderRepository } from '../../../../../repositories/prisma/prisma-orders-repository';
import { PrismaPaymentRepository } from '../../../../../repositories/prisma/prisma-payments-repository';
import { PrismaUsersRepository } from './../../../../../repositories/prisma/prisma-users-repository';
import { MailProvider } from './../../../../../providers/MailProvider/implementations/provider-sendgrid';
import { PaymentWebHookUseCases } from './../../../../orders/create/asaas/webhooks/payments-webhook-usecases';

export async function makePaymentWebHook(): Promise<PaymentWebHookUseCases> {
  const paymentsRepository = new PrismaPaymentRepository
  const orderRepository = new PrismaOrderRepository()
  const mailProvider = new MailProvider()
  const userRepository = new PrismaUsersRepository()
  const dayjsDateProvider = new DayjsDateProvider();
  const paymentWebHookUseCases = new PaymentWebHookUseCases(
    paymentsRepository,
    orderRepository,
    mailProvider,
    userRepository,
    dayjsDateProvider
  )

  return paymentWebHookUseCases
}
