import { makeFindByUserShoppingCart } from "@/usecases/factories/shopping-carts/make-find-by-user-shopping-cart-usecase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function FindByUserShoppingCart(request: FastifyRequest, reply:FastifyReply){
    try {
        const shoppingCartSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = shoppingCartSchema.parse(request.params)

        const createShoppingCartUseCase = await makeFindByUserShoppingCart()
        
        const shoppingCart = await createShoppingCartUseCase.execute({
           id,
        })
        return reply.status(200).send(shoppingCart)
        
      } catch (error) {
        throw error
    }
}