import { IUsersRepository } from '@/repositories/interfaces/interface-users-repository'
import { AppError } from '@/usecases/errors/app-error'
import { Role, User } from '@prisma/client'
import { hash } from 'bcrypt'
import 'dotenv/config'

interface IRequestUpdateUser {
  userId: string
  asaasWalletId?: string | null
  email?: string | null
  name?: string | null
  phone?: string | null
  password?: string | null
}

export class UpdateUserByAdminUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    asaasWalletId,
    userId,
    password,
    email,
    name,
    phone
  }: IRequestUpdateUser): Promise<User> {
    const findUserExist = await this.usersRepository.findById(userId)

    if (!findUserExist) {
      throw new AppError('User not found', 404)
    }

   
    let criptingPassword = ''

    if (password) {
      criptingPassword = await hash(password, 8)
    }

    const user = await this.usersRepository.update({
      id: userId,
      asaasWalletId: asaasWalletId || undefined,
      password: password ? criptingPassword : undefined,
      email: email || undefined,
      name: name || undefined,
      phone: phone || undefined
    })

    return user
  }
}
