import { AuthorizeMelhorEnvioUsecase } from "@/usecases/orders/melhor-envio/authorize/authorize-melhor-envio-usecase"

export async function makeAuthorize(): Promise<AuthorizeMelhorEnvioUsecase>{
        const authorizeMelhorEnvioUsecase  = new AuthorizeMelhorEnvioUsecase()
        return authorizeMelhorEnvioUsecase 
}