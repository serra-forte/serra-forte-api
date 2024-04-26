import { makeCreateUserByAdmin } from '@/usecases/factories/admins/make-create-user-by-admin-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function CreateUserByAdmin(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const userSchema = z.object({
      name: z.string().min(4),
      email: z.string().email(),
      phone: z.string().optional().nullable(),
      camping: z.object({
        id: z.string().uuid(),
      }),
    })

    const { email, name, phone, camping } = userSchema.parse(
      request.body,
    )

    const registerUseCase = await makeCreateUserByAdmin()

    const createUser = await registerUseCase.execute({
      email,
      name,
      phone,
      idCamping: camping.id
    })

    return reply.status(201).send(createUser)
  } catch (error) {
    throw error
  }
}
