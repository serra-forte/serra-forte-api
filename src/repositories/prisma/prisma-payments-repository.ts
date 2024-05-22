import { $Enums, Payment, Prisma, Status } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { IPaymentsRepository } from '../interfaces/interface-payments-repository'

export class PrismaPaymentRepository implements IPaymentsRepository {
  async findByAsaasId(id: string){
    const payment = await prisma.payment.findUnique({
      where: {
        asaasId: id
      }
    })
    return payment
  }


  async updateToAnalysis(id: string){
    await prisma.payment.update({
      where: {
        id
      },
      data: {
        paymentStatus: Status.ANALYSIS
      }
    })
  }
  async listByPaymentStatus(status: string, page = 1){
    const payments = await prisma.payment.findMany({
      where: {
        paymentStatus: status,
      },
      take: 20,
      skip: (page - 1) * 20,
      orderBy:{
        createdAt: 'desc'
      }
    })

    return payments
  }

  async findByOrderId(id: string){
    const payment = await prisma.payment.findUnique({
      where: {
        orderId: id,
      },
    })

    if (!payment) {
      return null
    }

    return payment
  }

  async updateById(
    idAsaas: string,
    paymentStatus: $Enums.Status,
    datePayment: Date,
  ) {
    const payment = await prisma.payment.update({
      where: {
        asaasId: idAsaas,
      },
      data: {
        paymentStatus,
        datePayment,
      },
    })
    return payment
  }


  async deleteById(id: string): Promise<void> {
    await prisma.payment.delete({
      where: {
        id,
      },
    })
  }

  async create(data: Prisma.PaymentUncheckedCreateInput) {
    const payment = (await prisma.payment.create({
      data,
      select: {
        id: true,
        asaasId: true,
        datePayment: true,
        installmentCount: true,
        installmentValue: true,
        invoiceUrl: true,
        paymentMethod: true,
        paymentStatus: true,
        value: true,
      },
    })) as unknown as Payment
    return payment
  }

  async list(page: number) {
    const payments = await prisma.payment.findMany({
      take: 20,
      skip: (page - 1) * 20,
      orderBy:{
        createdAt: 'desc'
      }
    })
    return payments
  }

  async findById(id: string) {
    const payment = await prisma.payment.findUnique({
      where: {
        id,
      },
    })
    return payment
  }
}
