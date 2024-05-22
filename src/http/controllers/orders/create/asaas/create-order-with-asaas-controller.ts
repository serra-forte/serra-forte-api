import { makeCreateOrderWithPixUsecase } from "@/usecases/factories/orders/asaas/pix/make-create-order-with-pix-usecase";
import { CreateOrderWithPixUsecase } from "@/usecases/orders/create/asaas/pix/create-order-with-pix-usecase";
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from "zod";

export async function CreateOrderWithAsaas(request: FastifyRequest, reply: FastifyReply){
    try {
        const orderSchemaBody = z.object({
            billingType: z.enum(['CREDIT_CARD', 'PIX', 'BOLETO']),
            shoppingCartId: z.string().uuid(),
            userId: z.string().uuid(),
        })
    
        const { billingType, shoppingCartId, userId } = orderSchemaBody.parse(request.body)
    
        let createOrderWithAsaasUsecase = {} as CreateOrderWithPixUsecase

        if(billingType === 'PIX'){
            createOrderWithAsaasUsecase =  await makeCreateOrderWithPixUsecase()
        }
        
        const order = await createOrderWithAsaasUsecase.execute({
            billingType,
            shoppingCartId,
            userId
        })

        return reply.status(201).send(order)
    }catch(error){
        throw error
    }
}