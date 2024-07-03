import { makeAuthorizeMelhorEnvio } from '@/usecases/factories/orders/melhor-envio/make-authorize-melhor-envio-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function AuthorizeMelhorEnvio(request: FastifyRequest, reply:FastifyReply){
    try {
        const authorizeMelhorEnvioUseCase = await makeAuthorizeMelhorEnvio()
        
        const authorizeURL = await authorizeMelhorEnvioUseCase.execute()
        
        return reply.status(200).send({authorizeURL})
        
        } catch (error) {
        throw error
    }
}
    
