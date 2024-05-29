import { FastifyInstance } from "fastify";
import { ListOrderByUser } from "./list-by-user/list-by-user-order-controller";
import { ListOrder } from "./list/list-order-controller";
import { CreateOrderWithAsaas } from "./create/asaas/create-order-with-asaas-controller";
import { verifyTokenJWT } from "@/http/middlewares/verify-token-jwt";
import { FindOrderById } from "./find-by-id/find-by-id-order-controller";

export async function ordersRoutes(fastifyApp: FastifyInstance) {
    fastifyApp.addHook('onRequest', verifyTokenJWT)

    // criar order
    fastifyApp.post('/', CreateOrderWithAsaas)

    // listar orders pelo user
    fastifyApp.get('/user', ListOrderByUser)

    // listar todos os orders
    fastifyApp.get('/', ListOrder)

    // econtrar order pelo id
    fastifyApp.get('/:id', FindOrderById)
}