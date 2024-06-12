import { makeChooseDeliveryMan } from '@/usecases/factories/orders/make-choose-deliveryman-order-uscase'
import { makeConfirmShipment } from '@/usecases/factories/orders/make-confirm-shipment-order-uscase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function ChooseDeliveryMan(request: FastifyRequest, reply:FastifyReply){
        try {
            const orderQuery = z.object({
                deliveryManId: z.string().uuid(),
                orderIds: z.array(z.string().uuid()),
            })

            const { 
                deliveryManId,
                orderIds
            } = orderQuery.parse(request.query)
            const findOrderUseCase = await makeChooseDeliveryMan()
            
            await findOrderUseCase.execute({
                deliveryManId,
                orderIds
            })
            
            return reply.status(200).send({message: 'Entregador escolhido com sucesso'})
            
          } catch (error) {
            throw error
          }
}
    
