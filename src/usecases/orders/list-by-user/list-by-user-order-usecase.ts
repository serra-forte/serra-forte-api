import { IOrderRepository } from "@/repositories/interfaces/interface-order-repository";
import { IUsersRepository } from "@/repositories/interfaces/interface-users-repository";
import { AppError } from "@/usecases/errors/app-error";
import { Order } from "@prisma/client";

interface IRequestListOrderByUser{
    userId: string
}

export class ListOrderByUserUsecase {
    constructor(
        private orderRepository: IOrderRepository,
        private userRepository: IUsersRepository
    ){}

    async execute({
        userId
    }: IRequestListOrderByUser): Promise<Order[]> {
        // buscar por id do usuario
        const findUserExist = await this.userRepository.findById(userId)

        // validar se o usuario existe
        if(!findUserExist) {
            throw new AppError("Usuário não encontrado", 404)
        }

        const orders = await this.orderRepository.listByUserId(userId)

        return orders
    }
}