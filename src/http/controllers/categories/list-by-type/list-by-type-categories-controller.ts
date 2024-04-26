import { makeFindCategory } from '@/usecases/factories/categories/make-find-by-id-categories-usecase'
import { makeListCategoryByType } from '@/usecases/factories/categories/make-list-by-type-categories-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function ListCategoryByType(request: FastifyRequest, reply:FastifyReply){
        try {
            const categorySchema = z.object({
                type: z.enum(['CAMPING', 'ATTRACTION'])
            })

            const { 
                type,
            } = categorySchema.parse(request.params)

            const listCategoryByTypeUseCase = await makeListCategoryByType()
            
            const category = await listCategoryByTypeUseCase.execute({
                type,
            })
            return reply.status(200).send(category)
            
          } catch (error) {
            throw error
          }
}
    
