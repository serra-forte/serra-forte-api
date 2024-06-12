import { makeConfirmDelivery } from '@/usecases/factories/orders/make-confirm-delivery-order-uscase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function ConfirmDelivery(request: FastifyRequest, reply:FastifyReply){
        try {
            const orderQuery = z.object({
                orderId: z.string().uuid(),
                receiverName: z.string(),
                receiverDocument: z.string(),
                longitude: z.coerce.number(),
                latitude: z.coerce.number(),
            })

            const { 
                orderId,
                receiverName,
                receiverDocument,
                longitude,
                latitude
            } = orderQuery.parse(request.query)
            const findOrderUseCase = await makeConfirmDelivery()
            
            await findOrderUseCase.execute({
                orderId,
                receiverName,
                receiverDocument,
                longitude,
                latitude
            })
            
            return reply.status(200).send({message: 'Status alterado para entregue com sucesso'})
            
          } catch (error) {
            throw error
          }
}
    
