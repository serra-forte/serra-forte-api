import { PrismaCartItemRepository } from "@/repositories/prisma/prisma-cart-item-repository";
import { PrismaOrderRepository } from "@/repositories/prisma/prisma-orders-repository";
import { PrismaPaymentRepository } from "@/repositories/prisma/prisma-payments-repository";
import { PrismaProductsRepository } from "@/repositories/prisma/prisma-products-repository";
import { PrismaShoppingCartRepository } from "@/repositories/prisma/prisma-shopping-cart-repository";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { CreateOrderWithPixUsecase } from "@/usecases/orders/create/asaas/pix/create-order-with-pix-usecase";

export async function makeCreateOrderWithPixUsecase(): Promise<CreateOrderWithPixUsecase>{
        const orderRepository = new PrismaOrderRepository()
        const userRepository = new PrismaUsersRepository()
        const shoppingCartRepository = new PrismaShoppingCartRepository()
        const cartItemRepository = new PrismaCartItemRepository()
        const productRepository = new PrismaProductsRepository()
        const paymentRepository = new PrismaPaymentRepository()

        const createOrderWithPixUsecase = new CreateOrderWithPixUsecase(
            orderRepository,
            userRepository,
            shoppingCartRepository,
            cartItemRepository,
            productRepository,
            paymentRepository
        )
        return createOrderWithPixUsecase
}