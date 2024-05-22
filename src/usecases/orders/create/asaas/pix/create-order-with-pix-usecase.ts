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
        private cartItemRepository: ICartItemRepository,
        private productsRepository: IProductsRepository
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

        // calcular total do carrinho
        let total = findShoppingCartExist.cartItem.reduce((acc, cartItem) => {
            return acc + Number(cartItem.price) * Number(cartItem.quantity);
        }, 0);

        if(findShoppingCartExist.cartItem.length === 0) {
            throw new AppError("Carrinho vazio", 400)
        }

        // verificar a quantidade dos produtos no estoque
        for(let item of findShoppingCartExist.cartItem) {
            const product = await this.productsRepository.findById(item.productId)

            if(product){
                if(product.quantity < item.quantity) {
                    throw new AppError("Estoque insuficiente", 400)
                }
            }
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

        // limpar total
        await this.shoppingCartRepository.updateTotal(shoppingCartId, 0)

        // criar pagamento na asaas

        // criar pagamento no banco

        // enviar email de pedido criado

        // decrementar quantidade no estoque
        for(let item of findShoppingCartExist.cartItem) {
            await this.productsRepository.updateQuantity(item.productId, item.quantity)

            // buscar produto pelo id
            const product = await this.productsRepository.findById(item.productId)

            if(product && product.quantity === 0) {
                // desativar produto
                await this.productsRepository.updateStatus(product.id, false)
            }
        }

        // retornar pedido criado
        return order
    }
}