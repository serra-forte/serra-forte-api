import { IUsersRepository } from '@/repositories/interface-users-repository'
import { User } from '@prisma/client'
import 'dotenv/config'

export class ListUserDifferentToPacientUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    // listar usuarios com role diferente de PACIENT
    const users =
      await this.usersRepository.listUserCamper()

    // retornar usuarios
    return users
  }
}
