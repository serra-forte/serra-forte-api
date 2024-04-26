import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { ListUserDifferentToPacientUseCase } from '@/usecases/admin/list-users/list-users-different-pacient-usecase'

export async function makeListUsers(): Promise<ListUserDifferentToPacientUseCase> {
  const usersRepository = new PrismaUsersRepository()
  const listUserDifferentToPacientUseCase =
    new ListUserDifferentToPacientUseCase(usersRepository)

  return listUserDifferentToPacientUseCase
}
