import { FastifyInstance } from 'fastify'
import { CreateUserByAdmin } from './create-user-by-admin/create-user-by-admin-controller'
import { verifyTokenJWT } from '@/http/middlewares/verify-token-jwt'
import { UpdateUserByAdmin } from './update-user-by-admin/update-user-by-admin-controller'
import { ListUsers } from './list/list-users-controller'
import { DeleteUserByAdmin } from './delete-user/delete-user-controller'
import { AuthorizeCallbackMelhorEnvio } from './melhor-envio/authorize-callback/authorize-callback-melhor-envio-controller'

export async function usersAdminRoutes(fastifyApp: FastifyInstance) {
  fastifyApp.addHook('onRequest', verifyTokenJWT)
  // fastifyApp.addHook('onRequest', verifyUserRole('ADMIN','SUPER'))

  // criar usuario por admin
  fastifyApp.post('/create-user', CreateUserByAdmin)

  // atualizar usuario por admin
  fastifyApp.put('/update-user', UpdateUserByAdmin)

  // deletar usuario por admin
  fastifyApp.delete('/delete-user/:id', DeleteUserByAdmin)

  // listar usuarios por admin
  fastifyApp.get('/list-users', ListUsers)

  // ====== Melhor Envio ======
  fastifyApp.post('/melhor-envio/authorize-callback', AuthorizeCallbackMelhorEnvio)

}
