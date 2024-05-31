import { makeCreateProduct } from '@/usecases/factories/products/make-create-products-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function CreateProduct(request: FastifyRequest, reply:FastifyReply){
        try {
            const productSchema = z.object({
                categoryId: z.string(),
                shopKeeperId: z.string(),
                name: z.string().min(4),
                description: z.string().optional().nullable(),
                quantity: z.number().nonnegative(),
                mainImage: z.string().optional().nullable(),
                price: z.number().nonnegative(),
                active: z.boolean(),
            })

            const { 
                name,
                description,
                price,
                quantity,
                mainImage,
                categoryId,
                shopKeeperId,
                active
            } = productSchema.parse(request.body)

            const createProductUseCase = await makeCreateProduct()
            
            const product = await createProductUseCase.execute({
                name,
                description,
                price,
                quantity,
                mainImage,
                categoryId,
                shopKeeperId,
                active
            })
            return reply.status(200).send(product)
            
          } catch (error) {
            throw error
          }
}
    
