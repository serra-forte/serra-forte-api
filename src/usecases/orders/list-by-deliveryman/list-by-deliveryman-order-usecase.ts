import { IOrderRepository } from "@/repositories/interfaces/interface-order-repository"
import { Order } from "@prisma/client"

interface IRequestListOrderByDeliveryman {
    userId: string
}

export class ListByDeliveryManOrderUsecase {
    constructor(
        private orderRepository: IOrderRepository
    ){}

    async execute({
        userId
    }: IRequestListOrderByDeliveryman): Promise<Order[]> {
        const orders = await this.orderRepository.listByDeliveryMan(userId)

        return orders
    }
}