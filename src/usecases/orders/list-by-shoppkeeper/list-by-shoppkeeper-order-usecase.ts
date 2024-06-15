import { IOrderRepository } from "@/repositories/interfaces/interface-order-repository"
import { Order } from "@prisma/client"

interface IRequestListOrderByShoppKeeper {
    userId: string
}

export class ListByShoppKeeperOrderUsecase {
    constructor(
        private orderRepository: IOrderRepository
    ){}

    async execute({
        userId
    }: IRequestListOrderByShoppKeeper): Promise<Order[]> {
        const orders = await this.orderRepository.listByShoppKeeper(userId)

        return orders
    }
}