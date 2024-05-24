import { makeCreateShoppingCart } from "@/usecases/factories/shopping-carts/make-create-shopping-cart-usecase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function CreateShoppingCart(request: FastifyRequest, reply:FastifyReply){
    try {
        const shoppingCartSchema = z.object({
            userId: z.string().uuid(),
            cartItem: z.array(z.object({
                productId: z.string().uuid(),
                quantity: z.number().nonnegative(),
            }))?.optional().nullable(),
        })

        const { userId, cartItem } = shoppingCartSchema.parse(request.body)

        const createShoppingCartUseCase = await makeCreateShoppingCart()
        
        const shoppingCart = await createShoppingCartUseCase.execute({
            userId,
            cartItem
        })
        return reply.status(200).send(shoppingCart)
        
      } catch (error) {
        throw error
    }
}