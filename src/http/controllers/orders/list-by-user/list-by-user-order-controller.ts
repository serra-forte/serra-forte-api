import { makeListOrderByUser } from '@/usecases/factories/orders/make-list-by-user-order-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function ListOrderByUser(request: FastifyRequest, reply:FastifyReply){
        try {
            const userSchemaParams = z.object({
              id: z.string().uuid(),
            })

            const { id: userId } = userSchemaParams.parse(request.params)

            const listOrderUseCase = await makeListOrderByUser()
            
            const orders = await listOrderUseCase.execute({
                userId
            })
            
            return reply.status(200).send(orders)
            
          } catch (error) {
            throw error
          }
}
    
