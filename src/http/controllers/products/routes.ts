import { FastifyInstance } from 'fastify'
import { CreateProduct } from './create/create-products-controller'
import { ListProduct } from './list/list-products-controller'
import { verifyTokenJWT } from '@/http/middlewares/verify-token-jwt'
import { verifyUserRole } from '@/http/middlewares/verify-user-role'
export async function productsRoutes(fastifyApp: FastifyInstance) {
    // criar product
    fastifyApp.post('/',{
        onRequest: [verifyTokenJWT, verifyUserRole('ADMIN', 'SUPER')],
    }, CreateProduct)

    // listar products
    fastifyApp.get('/',{
        onRequest: [verifyTokenJWT, verifyUserRole('ADMIN', 'SUPER')],
    },ListProduct)
}
