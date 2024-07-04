import { MelhorEnvioProvider } from "@/providers/DeliveryProvider/implementations/provider-melhor-envio"
import { AuthenticateMelhorEnvioUsecase } from "@/usecases/deliveries/melhor-envio/authenticate/authenticate-melhor-encio-usecase"

export async function makeAuthenticate(): Promise<AuthenticateMelhorEnvioUsecase>{
        const melhorEnvioProvider = new MelhorEnvioProvider()

        const authenticateMelhorEnvioUsecase  = new AuthenticateMelhorEnvioUsecase(
            melhorEnvioProvider
        )
        return authenticateMelhorEnvioUsecase 
}