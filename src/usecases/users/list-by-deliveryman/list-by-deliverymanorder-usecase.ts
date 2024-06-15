import { IUsersRepository } from "@/repositories/interfaces/interface-users-repository";
import { User } from "@prisma/client";

export class ListByDeliveryManUsecase {
    constructor(
        private userRepository: IUsersRepository
    ){}

    async execute(): Promise<User[]> {
        const users = await this.userRepository.listByDeliveryMan()
        return users
    }
}