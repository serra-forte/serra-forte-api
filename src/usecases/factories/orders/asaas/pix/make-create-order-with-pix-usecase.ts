import { PrismaCartItemRepository } from "@/repositories/prisma/prisma-cart-item-repository";
import { PrismaOrderRepository } from "@/repositories/prisma/prisma-orders-repository";
import { PrismaProductsRepository } from "@/repositories/prisma/prisma-products-repository";
import { PrismaShoppingCartRepository } from "@/repositories/prisma/prisma-shopping-cart-repository";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { CreateOrderWithPixUsecase } from "@/usecases/orders/create/asaas/pix/create-order-with-pix-usecase";

export async function makeCreateOrderWithPixUsecase(): Promise<CreateOrderWithPixUsecase>{
        const orderRepository = new PrismaOrderRepository()
        const userRepository = new PrismaUsersRepository()
        const shoppingCartRepository = new PrismaShoppingCartRepository()
        const productRepository = new PrismaProductsRepository()
        const cartItemRepository = new PrismaCartItemRepository()

        const createOrderWithPixUsecase = new CreateOrderWithPixUsecase(
            orderRepository,
            userRepository,
            shoppingCartRepository,
            productRepository,
            cartItemRepository
        )
        return createOrderWithPixUsecase
}