import { MelhorEnvioProvider } from "@/providers/DeliveryProvider/implementations/provider-melhor-envio"
import { ShipmentCalculateDeliveriesUseCase } from "@/usecases/deliveries/melhor-envio/shipment-calculate/shipment-calculate-melhor-envio-usecase"

export async function makeShipmentCalculate(): Promise<ShipmentCalculateDeliveriesUseCase>{
    const melhorEnvioProvider = new MelhorEnvioProvider()

    const shipmentCalculateDeliveriesUseCase  = new ShipmentCalculateDeliveriesUseCase(
        melhorEnvioProvider
    )
    
    return shipmentCalculateDeliveriesUseCase 
}