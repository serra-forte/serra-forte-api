import { FastifyInstance } from "fastify";
import { ListOrderByUser } from "./list-by-user/list-by-user-order-controller";
import { ListOrder } from "./list/list-order-controller";
import { CreateOrderWithAsaas } from "./create/asaas/create-order-with-asaas-controller";

export async function ordersRoutes(fastifyApp: FastifyInstance) {

    // criar order
    fastifyApp.post('/', CreateOrderWithAsaas)

    // listar orders pelo user
    fastifyApp.get('/user/:id', ListOrderByUser)

    // listar todos os orders
    fastifyApp.get('/', ListOrder)
}