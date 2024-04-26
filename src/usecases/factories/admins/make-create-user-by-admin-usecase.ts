import { MailProvider } from '@/providers/MailProvider/implementations/provider-sendgrid'
import { DayjsDateProvider } from '@/providers/DateProvider/implementations/provider-dayjs'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { PrismaTokensRepository } from '@/repositories/prisma/prisma-tokens-repository'
import { CreateUserByAdminUseCase } from '@/usecases/admin/create-user-by-admin/create-user-by-admin-usecase'

export async function makeCreateUserByAdmin(): Promise<CreateUserByAdminUseCase> {
  const usersRepository = new PrismaUsersRepository()
  const usersTokensRepository = new PrismaTokensRepository()
  const sendMailProvider = new MailProvider()
  const dayjsDateProvider = new DayjsDateProvider()
  const createUserByAdminUseCase = new CreateUserByAdminUseCase(
    usersRepository,
    dayjsDateProvider,
    usersTokensRepository,
    sendMailProvider,
  )

  return createUserByAdminUseCase
}
