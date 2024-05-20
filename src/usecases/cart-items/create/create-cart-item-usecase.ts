import { IShoppingCartRelationsDTO } from "@/dtos/shopping-cart-relations.dto";
import { ICartItemRepository } from "@/repositories/interfaces/interface-cart-item-repository";
import { IProductsRepository } from "@/repositories/interfaces/interface-products-repository";
import { IShoppingCartRepository } from "@/repositories/interfaces/interface-shopping-cart-repository";
import { AppError } from "@/usecases/errors/app-error";
import { CartItem, ShoppingCart } from "@prisma/client";

export interface IRequestCreateCartItem {
    productId: string
    shoppingCartId: string
}

export class CreateCartItemUseCase {
    constructor(
        private shoppingCartsRepository: IShoppingCartRepository,
        private productRepository: IProductsRepository,
        private cartItemRepository: ICartItemRepository
    ) {}

    async execute({
         productId,
         shoppingCartId,
    }: IRequestCreateCartItem): Promise<CartItem>{
        // validar se o carrinho existe
        const shoppingCart = await this.shoppingCartsRepository.findById(shoppingCartId) as unknown as IShoppingCartRelationsDTO

        // validar se o carrinho existe
        if(!shoppingCart){
            throw new AppError('Carrinho não encontrado', 404)
        }

        // validar se o produto existe
        const product = await this.productRepository.findById(productId)

        // validar se o produto existe
        if(!product){
            throw new AppError('Produto não encontrado', 404)
        }
        
        // percorrer itens do carrinho para verificar se o item ja existe
        const cartItemExists = shoppingCart.cartItem.find(cartItem => cartItem.name === product.name)

        let total = Number(shoppingCart.total) + Number(product.price)
        
        // validar se o item do carrinho existe
        if(cartItemExists){
            // incrementar item do carrinho
            const cartItem = await this.cartItemRepository.incrementCartItemById(cartItemExists.id, total)
            return cartItem
        }

        // criar item do carrinho
        const cartItem = await this.cartItemRepository.create({
            productId,
            shoppingCartId,
        })

        // atualizar total do carrinho
        await this.shoppingCartsRepository.updateTotal(shoppingCart.id, total)

        // buscar item do carrinho atualizado
        const findCartItem = await this.cartItemRepository.findById(cartItem.id) as CartItem


        return findCartItem
    }
}