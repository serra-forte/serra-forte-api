import { FastifyInstance } from "fastify";
import { CreateShoppingCart } from "./create/create-shopping-cart-controller";
import { FindByUserShoppingCart } from "./find-by-user/find-by-user-shopping-cart-controller";

export async function shoppingCartRoutes(fastifyApp: FastifyInstance) {
    // fastifyApp.addHook('onRequest', verifyTokenJWT)

    // criar shopping cart
    fastifyApp.post('/', CreateShoppingCart)

    // buscar carrio pelo usuario
    fastifyApp.get('/user/:id', FindByUserShoppingCart)
}