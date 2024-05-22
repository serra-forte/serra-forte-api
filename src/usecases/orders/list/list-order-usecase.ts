import { IOrderRepository } from "@/repositories/interfaces/interface-order-repository";
import { Order } from "@prisma/client";

export class ListOrderUsecase {
    constructor(
        private orderRepository: IOrderRepository
    ){}

    async execute(): Promise<Order[]> {
        const orders = await this.orderRepository.list()

        return orders
    }
}