import { AuthorizeMelhorEnvioUsecase } from "@/usecases/orders/melhor-envio/authorize/authorize-melhor-envio-usecase.ts"

export async function makeAuthorizeMelhorEnvio(): Promise<AuthorizeMelhorEnvioUsecase>{
        const authorizeMelhorEnvioUsecase  = new AuthorizeMelhorEnvioUsecase()
        return authorizeMelhorEnvioUsecase 
}