import { ICartItemRelationsDTO } from "@/dtos/cart-item-relations.dto";
import { ICartItemRepository } from "@/repositories/interfaces/interface-cart-item-repository";
import { IShoppingCartRepository } from "@/repositories/interfaces/interface-shopping-cart-repository";
import { AppError } from "@/usecases/errors/app-error";

export interface IRequestDeleteCartItem {
    id: string
}

export class DeleteCartItemUseCase {
    constructor(
        private cartItemRepository: ICartItemRepository,
        private shoppingCartsRepository: IShoppingCartRepository
    ) {}

    async execute({
         id,
    }: IRequestDeleteCartItem):Promise<void> {
        // buscar cartitem pelo id
        const findCartItemExists = await this.cartItemRepository.findById(id) as unknown as ICartItemRelationsDTO

        // validar se cartitem existe
        if(!findCartItemExists){
            throw new AppError('Item não encontrado', 404)
        }

        let total = Number(findCartItemExists.product.price) * Number(findCartItemExists.quantity) - Number(findCartItemExists.product.price)

        // atualizar total do carrinho
        await this.shoppingCartsRepository.updateTotal(findCartItemExists.shopping.id, total)

        // deletar cartitem pelo id
        await this.cartItemRepository.deleteById(id)

    }
}