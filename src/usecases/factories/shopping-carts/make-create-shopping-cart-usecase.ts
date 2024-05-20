import { PrismaProductsRepository } from "@/repositories/prisma/prisma-products-repository";
import { PrismaShoppingCartRepository } from "@/repositories/prisma/prisma-shopping-cart-repository";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { CreateShoppingCartUseCase } from "@/usecases/shopping-carts/create/create-shopping-cart-usecase";

export async function makeCreateShoppingCart(): Promise<CreateShoppingCartUseCase> {
    const shoppingCartsRepository = new PrismaShoppingCartRepository()
    const usersRepository = new PrismaUsersRepository()
    const productsRepository = new PrismaProductsRepository()

    const createShoppingCartUseCase = new CreateShoppingCartUseCase(
        shoppingCartsRepository,
        usersRepository,
        productsRepository
    )

    return createShoppingCartUseCase
}