import { makeAuthenticate } from '@/usecases/factories/deliveries/melhor-envio/make-authenticate-melhor-envio-usecase'
import { makeShipmentCalculate } from '@/usecases/factories/deliveries/melhor-envio/make-shipment-calculate-melhor-envio-usecase'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function ShipmentCalculate(request: FastifyRequest, reply:FastifyReply){
    try {
        const querySchema = z.object({
            to: z.string(),
            from: z.string(),
            shopkeeperId: z.string().uuid(),
        })

        const { 
            to,
            from,
            shopkeeperId
         } = querySchema.parse(request.query)

        const authenticateMelhorEnvioUseCase = await makeShipmentCalculate()
        
        console.log(request.melhorEnvio.accessToken)
        
        const authenticateURL = await authenticateMelhorEnvioUseCase.execute({
            to,
            from,
            shopkeeperId,
            access_token: request.melhorEnvio.accessToken,
            refresh_token: request.melhorEnvio.refreshToken
            
        })
        
        return reply.status(200).send({authenticateURL})
        
        } catch (error) {
        throw error
    }
}
    
