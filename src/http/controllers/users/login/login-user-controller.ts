import { makeLoginUser } from '@/usecases/factories/users/make-login-user-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { refreshToken } from 'firebase-admin/app'
import { z } from 'zod'

export async function LoginUser (request: FastifyRequest, reply:FastifyReply){
    try {
        const userSchema = z.object({
          email: z.string().email().optional().nullable(),
          password: z.string().min(6).optional().nullable(),
          token: z.string().optional().nullable(),
        })

        const {
            email,
            password,
            token
        } = userSchema.parse(request.body)
        
        const loginUserUseCase = await makeLoginUser()

       

        const userInfo = await loginUserUseCase.execute({
          email,
          password,
          token
        })

        // Serializa os tokens para uma string JSON
        // const serializedTokens = JSON.stringify({
        //   accessToken: userInfo.accessToken,
        //   refreshToken: userInfo.refreshToken
        // });

        return reply.status(200).setCookie('access_token', userInfo.accessToken, {
          path: '/',
          httpOnly: true,
          secure: true,
          sameSite: 'none',
          maxAge: 60 * 60 * 24 * 2, // 2 days
        }).send({
          user: userInfo,
        })

      } catch (error) {
        
        throw error
      }
}

