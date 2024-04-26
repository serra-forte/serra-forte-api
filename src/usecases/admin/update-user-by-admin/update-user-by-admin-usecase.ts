import { IUsersRepository } from '@/repositories/interface-users-repository'
import { AppError } from '@/usecases/errors/app-error'
import { User } from '@prisma/client'
import { hash } from 'bcrypt'
import 'dotenv/config'

interface IRequestUpdateUser {
  idUser: string
  idCamping?: string | null
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
    idUser,
    idCamping,
    password,
    email,
    name,
    phone
  }: IRequestUpdateUser): Promise<User> {
    const findUserExist = await this.usersRepository.findById(idUser)

    if (!findUserExist) {
      throw new AppError('User not found', 404)
    }

   
    let criptingPassword = ''

    if (password) {
      criptingPassword = await hash(password, 8)
    }

    const user = await this.usersRepository.update({
      id: idUser,
      idCamping: idCamping || undefined,
      password: password ? criptingPassword : undefined,
      email: email || undefined,
      name: name || undefined,
      phone: phone || undefined
    })

    return user
  }
}
