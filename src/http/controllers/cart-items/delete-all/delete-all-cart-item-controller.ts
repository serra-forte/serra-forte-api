import { makeDeleteAllCartItem } from "@/usecases/factories/cart-items/make-delete-all-cart-items-usecase copy";
import { makeDeleteCartItem } from "@/usecases/factories/cart-items/make-delete-cart-items-usecase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function DeleteAllCartItem(request: FastifyRequest, reply:FastifyReply){
    try {
        const cartItemSchema = z.object({
            id: z.string().uuid(),
        })

        const { 
            id,
        } = cartItemSchema.parse(request.params)
        
        const deleteCartItemUseCase = await makeDeleteAllCartItem()

        
        await deleteCartItemUseCase.execute({
            shoppingCartId:id,
        })
        return reply.status(200).send({message: "Itens deletado com sucesso"})
        
      } catch (error) {
        throw error
    }
}