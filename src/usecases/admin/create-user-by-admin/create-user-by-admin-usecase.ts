import { env } from '@/env'
import { IUsersRepository } from '@/repositories/interface-users-repository'
import { Role, User } from '@prisma/client'
import { hash } from 'bcrypt'
import 'dotenv/config'
import { randomUUID } from 'crypto'
import { IDateProvider } from '@/providers/DateProvider/interface-date-provider'
import { ITokensRepository } from '@/repositories/interface-tokens-repository'
import { IMailProvider } from '@/providers/MailProvider/interface-mail-provider'
import { AppError } from '@/usecases/errors/app-error'
import { generatoRandomKey } from '@/utils/generator-random-key'

interface IRequestCreateUser {
  idCamping?: string | null
  email: string
  name: string
  phone?: string | null
}

export class CreateUserByAdminUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private dayjsDateProvider: IDateProvider,
    private usersTokensRepository: ITokensRepository,
    private sendMailProvider: IMailProvider,
  ) {}

  async execute({
    email,
    name,
    phone,
    idCamping,
  }: IRequestCreateUser): Promise<User> {
    // if (idCamping) {
    //   // buscar se existe uma clinica com o mesmo id
    //   const clinicAlreadyExists =
    //     await this.campingsRepository.findById(idCamping)

    //   // validar se existe uma clinica com o mesmo id
    //   if (!clinicAlreadyExists) {
    //     throw new AppError('Camping not found', 404)
    //   }
    // }

    const findEmailAlreadyExists = await this.usersRepository.findByEmail(email)

    if (findEmailAlreadyExists) {
      throw new AppError('Email já cadastrado', 409)
    }
    const randomPass = generatoRandomKey(8)

    const criptingPassword = await hash(`${randomPass}`, 8)

    const user = await this.usersRepository.create({
      idCamping,
      email,
      name,
      password: criptingPassword,
      phone,
      // role: Role.AFFILIATE,
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
      idUser: user.id,
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
