import { env } from '@/env'
import { Role, User } from '@prisma/client'
import { hash } from 'bcrypt'
import 'dotenv/config'
import { randomUUID } from 'crypto'
import { IDateProvider } from '@/providers/DateProvider/interface-date-provider'
import { IMailProvider } from '@/providers/MailProvider/interface-mail-provider'
import { AppError } from '@/usecases/errors/app-error'
import { generatoRandomKey } from '@/utils/generator-random-key'
import { ITokensRepository } from '@/repositories/interfaces/interface-tokens-repository'
import { IUsersRepository } from '@/repositories/interfaces/interface-users-repository'

interface IRequestCreateUser {
  email: string
  name: string
  phone?: string | null
  role: Role
  userId: string
  asaasWalletId: string
}

export class CreateUserByAdminUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private dayjsDateProvider: IDateProvider,
    private usersTokensRepository: ITokensRepository,
    private sendMailProvider: IMailProvider,
  ) {}

  async execute({
    asaasWalletId,
    email,
    name,
    phone,
    role
  }: IRequestCreateUser): Promise<User> {
    const findEmailAlreadyExists = await this.usersRepository.findByEmail(email)

    if (findEmailAlreadyExists) {
      throw new AppError('Email já cadastrado', 409)
    }
    
    // verificar se telefone ja existe
    if(phone){
      const findPhoneAlreadyExists = await this.usersRepository.findByPhone(phone)
      if(findPhoneAlreadyExists){
        throw new AppError('Telefone já cadastrado', 409)
      }
    }

    const randomPass = generatoRandomKey(8)

    const criptingPassword = await hash(`${randomPass}`, 8)

    const user = await this.usersRepository.create({
      asaasWalletId,
      email,
      name,
      password: criptingPassword,
      phone,
      role,
      shoppingCart:{
        create:{
            expireDate: new Date(),
            total: 0
        }
      },
    })
    // pegar template de verificaçao de email
    const pathTemplate =
      env.NODE_ENV === 'development'
        ? './views/emails/verify-email-with-password.hbs'
        : './build/views/emails/verify-email-with-password.hbs'

    // gerar token valido por 3h
    const token = randomUUID()
    // gerar data em horas
    const expireDateHours = this.dayjsDateProvider.addHours(3)

    // salvar token no banco
    await this.usersTokensRepository.create({
      userId: user.id,
      expireDate: expireDateHours,
      token,
    })
    // formatar link com token
    const link =
        env.NODE_ENV === 'development'
        ? `${env.APP_URL_FRONTEND_DEVELOPMENT}/verification/${token}/${email}`
        : `${env.APP_URL_FRONTEND_PRODUCTION}/verification/${token}/${email}`

    // enviar verificação de email
    await this.sendMailProvider.sendEmail(
      email,
      name,
      'Confirmação de email',
      link,
      pathTemplate,
      {
        password: randomPass,
      }
      
    )

    return user
  }
}
