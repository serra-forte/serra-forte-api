import { AuthorizeMelhorEnvioUsecase } from "@/usecases/orders/melhor-envio/authenticate/authorize-melhor-envio-usecase.ts"

export async function makeAuthorizeMelhorEnvio(): Promise<AuthorizeMelhorEnvioUsecase>{
        const authorizeMelhorEnvioUsecase  = new AuthorizeMelhorEnvioUsecase()
        return authorizeMelhorEnvioUsecase 
}