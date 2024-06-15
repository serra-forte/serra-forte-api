import { makeListByDeliveryMan } from '@/usecases/factories/orders/make-list-by-deliveryman-order-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function ListByDeliveryman(request: FastifyRequest, reply:FastifyReply){
        try {
            const listOrderUseCase = await makeListByDeliveryMan()
            
            const orders = await listOrderUseCase.execute({
                userId: request.user.id
            })
            return reply.status(200).send(orders)
            
          } catch (error) {
            throw error
          }
}

    
