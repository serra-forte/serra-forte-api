import { makeUpdateUserByAdmin } from '@/usecases/factories/admins/make-update-user-by-admin-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function UpdateUserByAdmin(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const userSchema = z.object({
      id: z.string().uuid(),
      name: z.string().min(4).optional().nullable(),
      email: z.string().email().optional().nullable(),
      password: z.string().min(6).nullable().optional(),
      phone: z.string().optional().nullable(),
      camping: z.object({
        id: z.string().uuid().optional().nullable(),
      }),
    })

    const { id, email, name, password, camping, phone } =
      userSchema.parse(request.body)

    const updateUseCase = await makeUpdateUserByAdmin()

    const updateUser = await updateUseCase.execute({
      idUser: id,
      email,
      phone,
      name,
      password,
      idCamping: camping.id
    })

    return reply.status(201).send(updateUser)
  } catch (error) {
    throw error
  }
}
