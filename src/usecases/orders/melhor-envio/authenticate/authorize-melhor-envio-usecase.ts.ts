import { env } from "@/env"
import { IMelhorEnvioProvider } from "@/providers/DeliveryProvider/interface-melhor-envio-provider"

export class AuthorizeMelhorEnvioUsecase {
    async execute(): Promise<string> {
        const params = {
            client_id: env.MELHOR_ENVIO_CLIENT_ID,
            scope: 'shipping-calculate',
            state: 'serra-forte',
            redirect_uri: env.MELHOR_REDIRECT_URI,  // Definido ao criar o app
            response_type: 'code',
        }

        const  authorizeUrl = `${env.MELHOR_ENVIO_API_URL}?${new URLSearchParams(params).toString()}`
        
        return authorizeUrl
    }
}