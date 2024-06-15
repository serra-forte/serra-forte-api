import { makeListByDeliveryMan } from '@/usecases/factories/users/make-list-by-deliveryman-users-usecases'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function ListByDeliveryMan(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const listUserUseCase = await makeListByDeliveryMan()

    const users = await listUserUseCase.execute()

    return reply.status(200).send(users)
  } catch (error) {
    throw error
  }
}
