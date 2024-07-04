import { env } from "@/env"
import { IMelhorEnvioProvider, IResponseCalculateShipping } from "@/providers/DeliveryProvider/interface-melhor-envio-provider"

export interface IRequestShipmentCalculate {
    to: string
    from: string
    access_token: string
    refresh_token?: string
}

export class ShipmentCalculateDeliveriesUseCase {
    constructor(
        private melhorEnvioProvider: IMelhorEnvioProvider
    ) {}

    async execute({to, from, access_token}: IRequestShipmentCalculate): Promise<IResponseCalculateShipping> {
        const shipmentCalculate = await this.melhorEnvioProvider.shipmentCalculate({
            to:{
                postal_code: to
            },
            from:{
                postal_code: from
            },
            access_token: env.MELHOR_ENVIO_ACCESS_TOKEN
        })

        return shipmentCalculate
    }
}