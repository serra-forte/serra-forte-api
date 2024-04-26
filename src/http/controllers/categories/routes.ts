import { verifyTokenJWT } from "@/http/middlewares/verify-token-jwt"
import { verifyUserRole } from "@/http/middlewares/verify-user-role"
import { FastifyInstance } from "fastify"
import { CreateCategory } from "./create/create-categories-controller"
import { UpdateCategory } from "./update/update-categories-controller"
import { FindCategory } from "./find-by-id/find-by-id-categories-controller"
import { ListCategory } from "./list/list-categories-controller"
import { DeleteCategory } from "./delete/delete-by-id-categories-controller"
import { ListCategoryByType } from "./list-by-type/list-by-type-categories-controller"

export async function categoriesRoutes(fastifyApp: FastifyInstance) {
    // criar categoria
    fastifyApp.post('/', {
        onRequest: [verifyTokenJWT, verifyUserRole('ADMIN', 'SUPER')],
    }, CreateCategory)

    // find categoria pelo id
    fastifyApp.get('/:id', {
        onRequest: [verifyTokenJWT, verifyUserRole('ADMIN', 'SUPER')],
    }, FindCategory)

    // list categoria pelo id
    fastifyApp.get('/', ListCategory)

    // list categoria pelo tipo
    fastifyApp.get('/type/:type', ListCategoryByType)

    // update categoria
    fastifyApp.put('/', {
        onRequest: [verifyTokenJWT, verifyUserRole('ADMIN', 'SUPER')],
    }, UpdateCategory)

    // delete categoria
    fastifyApp.delete('/:id', {
        onRequest: [verifyTokenJWT, verifyUserRole('ADMIN', 'SUPER')],
    }, DeleteCategory)
}
