import { ICartItemRelationsDTO } from "@/dtos/cart-item-relations.dto";
import { IShoppingCartRelationsDTO } from "@/dtos/shopping-cart-relations.dto";
import { ICartItemRepository } from "@/repositories/interfaces/interface-cart-item-repository";
import { IOrderRepository } from "@/repositories/interfaces/interface-order-repository";
import { IProductsRepository } from "@/repositories/interfaces/interface-products-repository";
import { IShoppingCartRepository } from "@/repositories/interfaces/interface-shopping-cart-repository";
import { IUsersRepository } from "@/repositories/interfaces/interface-users-repository";
import { AppError } from "@/usecases/errors/app-error";
import { Item, Order } from "@prisma/client";

export interface IRequestCreateOrderWithPix {
    userId: string
    shoppingCartId: string
    billingType: string
}

export class CreateOrderWithPixUsecase {
    constructor(
        private orderRepository: IOrderRepository,
        private userRepository: IUsersRepository,
        private shoppingCartRepository: IShoppingCartRepository,
        private cartItemRepository: ICartItemRepository
    ) {}

    async execute({
        userId,
        shoppingCartId,
        billingType
    }: IRequestCreateOrderWithPix): Promise<Order> {
        // buscar usuario pelo id
        const findUserExist = await this.userRepository.findById(userId)

        // validar ser o usuario existe
        if(!findUserExist) {
            throw new AppError("Usuário não encontrado", 404)
        }

        // buscar carrinho pelo id 
        const findShoppingCartExist = await this.shoppingCartRepository.findById(shoppingCartId) as unknown as IShoppingCartRelationsDTO

        // validar se o carrinho existe
        if(!findShoppingCartExist) {
            throw new AppError("Carrinho não encontrado", 404)
        }

        // criar variavel total
        let total = 0;

        // percorrer array items
        for(const item of findShoppingCartExist.cartItem) {
            // buscar produto do item pelo id
            const cartItem = await this.cartItemRepository.findById(item.productId) as unknown as ICartItemRelationsDTO

            // validar se o produto do item existe
            if(!cartItem) {
                throw new AppError("Item não encontrado", 404)
            }

            // somar valor total ex: total += preço * quantidade
            total += Number(cartItem.product.price) * Number(item.quantity)
        }

        // calcular cupom de desconto
            
        // criar pedido passando lista de itens para criar juntos
        const order = await this.orderRepository.create({
            userId,
            shoppingCartId,
            total,
            items: {
                createMany: {
                    data: findShoppingCartExist.cartItem.map(item => {
                        return {
                            productId: item.productId,
                            quantity: item.quantity,
                            price: Number(item.price)
                        } as unknown as Item
                    })
                }
            },
            orderDate: new Date(),
        })

        // esvaziar o carrinho
        await this.cartItemRepository.deleteAllByShoppingCartId(shoppingCartId)

        // criar pagamento na asaas

        // criar pagamento no banco

        // enviar email de pedido criado

        // retornar pedido criado
        return order
    }
}