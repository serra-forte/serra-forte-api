import { makeListByShoppkeeper } from '@/usecases/factories/orders/make-list-by-shoppkeeper-order-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function ListByShoppkeeper(request: FastifyRequest, reply:FastifyReply){
        try {
            const listOrderUseCase = await makeListByShoppkeeper()
            
            const orders = await listOrderUseCase.execute({
                userId: request.user.id
            })
            return reply.status(200).send(orders)
            
          } catch (error) {
            throw error
          }
}

    
