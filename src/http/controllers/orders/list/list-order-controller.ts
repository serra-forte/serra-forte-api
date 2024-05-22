import { makeListOrder } from '@/usecases/factories/orders/make-list-order-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function ListOrder(request: FastifyRequest, reply:FastifyReply){
        try {
            const listOrderUseCase = await makeListOrder()
            
            const orders = await listOrderUseCase.execute()
            return reply.status(200).send(orders)
            
          } catch (error) {
            throw error
          }
}

    
