import { makeUpdateUser } from '@/usecases/factories/users/make-update-user-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'
import {cpf as CPF} from 'cpf-cnpj-validator'
import { z } from 'zod'

export async function UpdateUser (request: FastifyRequest, reply:FastifyReply){
        try {
            const userSchemaBody = z.object({
              name: z.string().min(4), 
              cpf: z.string().optional().nullable(),  
              email: z.string().email(),
              phone: z.string().optional().nullable(), 
              dateBirth: z.string().optional().nullable(),
              address: z.object({
                street: z.string(),
                num: z.number().nonnegative(),
                neighborhood: z.string(),
                city: z.string(),
                state: z.string(),
                country: z.string(),
                zipCode: z.number().nonnegative(),
                complement: z.string().optional().nullable(),
                reference: z.string().optional().nullable(),
              })
            })

            const userSchemaParams = z.object({
                id: z.string().uuid()
            })

            const { 
                id,
            } = userSchemaParams.parse(request.params)

            const{
                name,
                phone,
                dateBirth,
                cpf,
                email,
                address
            } = userSchemaBody.parse(request.body)

            const updateUserUseCase = await makeUpdateUser()
            
            const {user} = await updateUserUseCase.execute({
                id,
                name,
                phone,
                email,
                dateBirth: dateBirth ? new Date(dateBirth) : null,
                cpf: CPF.format(cpf as string) ? CPF.format(cpf as string) : null,
                address
            })
            
            
            return reply.status(200).send(user)
            
          } catch (error) {
            throw error
          }
}
    
