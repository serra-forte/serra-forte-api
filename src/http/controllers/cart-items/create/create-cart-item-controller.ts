import { makeCreateCartItem } from "@/usecases/factories/cart-items/make-create-cart-items-usecase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function CreateCartItem(request: FastifyRequest, reply:FastifyReply){
    try {
        const shoppingCartSchema = z.object({
            shoppingCartId: z.string().uuid(),
            productId: z.string().uuid(),
        })

        const { 
                productId,
                shoppingCartId
            } = shoppingCartSchema.parse(request.body)

            
        const createCartItemUseCase = await makeCreateCartItem()

        const cartItem = await createCartItemUseCase.execute({
            productId,
            shoppingCartId
        })
        
        return reply.status(200).send(cartItem)
        
      } catch (error) {
        throw error
    }
}