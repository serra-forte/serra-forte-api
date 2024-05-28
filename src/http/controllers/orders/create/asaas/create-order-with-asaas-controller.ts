import { makeCreateOrderWithBoletoUsecase } from "@/usecases/factories/orders/asaas/bank-ticket/make-create-order-with-boleto-usecase";
import { makeCreateOrderWithCreditCardUsecase } from "@/usecases/factories/orders/asaas/credit-card/make-create-order-with-credit-card-usecase";
import { makeCreateOrderWithPixUsecase } from "@/usecases/factories/orders/asaas/pix/make-create-order-with-pix-usecase";
import { CreateOrderWithBoletoUsecase } from "@/usecases/orders/create/asaas/bank-ticket/create-order-with-boleto-usecase";
import { CreateOrderWithCreditCardUsecase } from "@/usecases/orders/create/asaas/credit-card/create-order-with-credit-card-usecase";
import { CreateOrderWithPixUsecase } from "@/usecases/orders/create/asaas/pix/create-order-with-pix-usecase";
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from "zod";

export async function CreateOrderWithAsaas(request: FastifyRequest, reply: FastifyReply){
    try {
        const orderSchemaBody = z.object({
            billingType: z.enum(['CREDIT_CARD', 'PIX', 'BOLETO']),
            creditCard: z.object({
                holderName: z.string().optional(),
                number: z.string().optional(),
                expiryMonth: z.string().optional(),
                expiryYear: z.string().optional(),
                ccv: z.string(),
            }).optional(),
            creditCardHolderInfo: z.object({
                name: z.string(),
                email: z.string().email(),
                cpfCnpj: z.string(),
                postalCode: z.string(),
                addressNumber: z.string(),
                addressComplement: z.string(),
                phone: z.string(),
            }).optional(),
            coupon: z.string().optional().nullable(),
            installmentCount: z.number().int().positive().optional(),
        })
    
        const { 
            billingType, 
            creditCard,
            creditCardHolderInfo,
            installmentCount, 
        } = orderSchemaBody.parse(request.body)
    
        let createOrderWithAsaasUsecase = {} as CreateOrderWithPixUsecase | CreateOrderWithCreditCardUsecase | CreateOrderWithBoletoUsecase

        const remoteIpSchema = z.string()
        const remoteIpParsed = remoteIpSchema.parse(request.socket.remoteAddress)

        if(billingType === 'PIX'){
            createOrderWithAsaasUsecase =  await makeCreateOrderWithPixUsecase()
        }else if(billingType === 'CREDIT_CARD'){
            createOrderWithAsaasUsecase =  await makeCreateOrderWithCreditCardUsecase()
        }else if(billingType === 'BOLETO'){
            createOrderWithAsaasUsecase =  await makeCreateOrderWithBoletoUsecase()
        }
        
        const order = await createOrderWithAsaasUsecase.execute({
            userId: request.user.id,
            remoteIp: remoteIpParsed,
            creditCard,
            creditCardHolderInfo,
            installmentCount
        })

        return reply.status(201).send(order)
    }catch(error){
        throw error
    }
}