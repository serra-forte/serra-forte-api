import { makeListProduct } from '@/usecases/factories/products/make-list-products-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function ListProduct(request: FastifyRequest, reply:FastifyReply){
        try {
            const createProductUseCase = await makeListProduct()
            
            const products = await createProductUseCase.execute()
            return reply.status(200).send(products)
            
          } catch (error) {
            throw error
          }
}
    
