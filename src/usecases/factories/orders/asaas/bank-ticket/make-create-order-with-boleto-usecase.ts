import { DayjsDateProvider } from "@/providers/DateProvider/implementations/provider-dayjs";
import { MailProvider } from "@/providers/MailProvider/implementations/provider-sendgrid";
import { AsaasProvider } from "@/providers/PaymentProvider/implementations/provider-asaas-payment";
import { PrismaCartItemRepository } from "@/repositories/prisma/prisma-cart-item-repository";
import { PrismaOrderRepository } from "@/repositories/prisma/prisma-orders-repository";
import { PrismaProductsRepository } from "@/repositories/prisma/prisma-products-repository";
import { PrismaShoppingCartRepository } from "@/repositories/prisma/prisma-shopping-cart-repository";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { CreateOrderWithBoletoUsecase } from "@/usecases/orders/create/asaas/bank-ticket/create-order-with-boleto-usecase";

export async function makeCreateOrderWithBoletoUsecase(): Promise<CreateOrderWithBoletoUsecase>{
        const orderRepository = new PrismaOrderRepository()
        const userRepository = new PrismaUsersRepository()
        const shoppingCartRepository = new PrismaShoppingCartRepository()
        const cartItemRepository = new PrismaCartItemRepository()
        const productRepository = new PrismaProductsRepository()
        const dayjsProvider = new DayjsDateProvider()
        const asaasProvider = new AsaasProvider()
        const sendGridProvider = new MailProvider()

        const createOrderWithBoletoUsecase = new CreateOrderWithBoletoUsecase(
            orderRepository,
            userRepository,
            shoppingCartRepository,
            cartItemRepository,
            productRepository,
            dayjsProvider,
            asaasProvider,
            sendGridProvider
        )
        return createOrderWithBoletoUsecase
}