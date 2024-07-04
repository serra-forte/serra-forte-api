import { env } from "@/env"
import { IMelhorEnvioProvider, IResponseCalculateShipping } from "@/providers/DeliveryProvider/interface-melhor-envio-provider"
import { IUsersRepository } from "@/repositories/interfaces/interface-users-repository"
import { AppError } from "@/usecases/errors/app-error"

export interface IRequestShipmentCalculate {
    shopkeeperId: string
    to: string
    access_token: string
    refresh_token: string
}

export class ShipmentCalculateDeliveriesUseCase {
    constructor(
        private melhorEnvioProvider: IMelhorEnvioProvider,
        private userRepository: IUsersRepository
    ) {}

    async execute({
        shopkeeperId, 
        to, 
        access_token, 
        refresh_token
    }: IRequestShipmentCalculate): Promise<IResponseCalculateShipping> {
        // buscar lojista pelo id
        const findShopkeeper = await this.userRepository.findById(shopkeeperId)

        // validar se lojista existe
        if(!findShopkeeper || !findShopkeeper.shipmentCode) {
            throw new AppError('Lojista não encontrado', 404)
        }

        const shipmentCalculate = await this.melhorEnvioProvider.shipmentCalculate({
            to:{
                postal_code: to
            },
            from:{
                postal_code: findShopkeeper.shipmentCode
            },
            access_token,
        })

        return shipmentCalculate
    }
}