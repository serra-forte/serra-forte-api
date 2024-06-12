import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { ListByDeliveryManOrderUsecase } from '@/usecases/users/list-by-deliveryman/list-by-deliverymanorder-usecase'

export async function makeListDeliveryMan(): Promise<ListByDeliveryManOrderUsecase> {
  const usersRepository = new PrismaUsersRepository()
  const listByDeliveryManOrderUsecase =
    new ListByDeliveryManOrderUsecase(usersRepository)

  return listByDeliveryManOrderUsecase
}
