import { FastifyInstance } from 'fastify'
import { CreateProduct } from './create/create-products-controller'
import { ListProduct } from './list/list-products-controller'
import { verifyTokenJWT } from '@/http/middlewares/verify-token-jwt'
import { verifyUserRole } from '@/http/middlewares/verify-user-role'
import { UpdateProduct } from './update/update-products-controller'
import { DeleteProduct } from './delete/delete-products-controller'
export async function productsRoutes(fastifyApp: FastifyInstance) {
    // criar product
    fastifyApp.post('/', CreateProduct)

    // listar products
    fastifyApp.get('/', ListProduct)

    // atualizar um product pelo id
    fastifyApp.put('/', UpdateProduct)

    // deletar um product pelo id
    fastifyApp.delete('/:id', DeleteProduct)
}
