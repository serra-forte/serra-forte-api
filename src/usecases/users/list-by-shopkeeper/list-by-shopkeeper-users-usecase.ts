import { IUsersRepository } from '@/repositories/interfaces/interface-users-repository'
import { User } from '@prisma/client'
import 'dotenv/config'

export class ListUserByShopkeeperUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    const users =
      await this.usersRepository.listByShopkeeper()

    // retornar usuarios
    return users
  }
}
