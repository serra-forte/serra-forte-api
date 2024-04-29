import { FastifyInstance } from 'fastify'
import { CreateProduct } from './create/create-products-controller'
import { ListProduct } from './list/list-products-controller'
import { verifyTokenJWT } from '@/http/middlewares/verify-token-jwt'
import { verifyUserRole } from '@/http/middlewares/verify-user-role'
import { UpdateProduct } from './update/update-products-controller'
import { DeleteProduct } from './delete/delete-products-controller'
import { ListByCategoryProduct } from './list-by-category/list-by-category-products-controller'
export async function productsRoutes(fastifyApp: FastifyInstance) {
    // criar product (body)
    fastifyApp.post('/', CreateProduct)

    // listar products (no-params)
    fastifyApp.get('/', ListProduct) 

    // listar products by category (query)
    fastifyApp.get('/category', ListByCategoryProduct)

    // atualizar um product pelo id (body)
    fastifyApp.put('/', UpdateProduct)

    // deletar um product pelo id (params)
    fastifyApp.delete('/:id', DeleteProduct)
}
