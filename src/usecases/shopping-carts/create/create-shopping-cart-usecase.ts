import { IProductsRepository } from "@/repositories/interfaces/interface-products-repository";
import { IShoppingCartRepository } from "@/repositories/interfaces/interface-shopping-cart-repository";
import { IUsersRepository } from "@/repositories/interfaces/interface-users-repository";
import { AppError } from "@/usecases/errors/app-error";
import { ShoppingCart } from "@prisma/client";

export interface IRequestCreateShoppingCart {
    userId: string
    cartItem: {
        productId: string
        quantity: number
    }[]
}

export class CreateShoppingCartUseCase {
    constructor(
        private shoppingCartsRepository: IShoppingCartRepository,
        private usersRepository: IUsersRepository,
        private productRepository: IProductsRepository
    ) {}

    async execute({
         userId,
         cartItem 
    }: IRequestCreateShoppingCart): Promise<ShoppingCart>{
        // buscar usuario pelo id
        const findUserExist = await this.usersRepository.findById(userId)

        // validar se usuario existe
        if(!findUserExist){
            throw new AppError('Usuário não encontrado', 404)
        }

        // criar variavel total
        let total = 0

        // percorrer itens do carrinho
        for(const item of cartItem){
            
            const product = await this.productRepository.findById(item.productId)

            if(!product){
                throw new AppError('Produto não encontrado', 404)
            }

            // verificar se o produto esta ativo
            if(!product.active){
                throw new AppError('Produto não encontrado', 404)
            }

            // verificar produto no esoque
            if(product.quantity < 1){
                throw new AppError('Produto esgotado', 400)
            }

            total += Number(product.price) * Number(item.quantity)
        }


        // criar carrinho
        const shoppingCart = await this.shoppingCartsRepository.create({
            userId,
            expireDate: new Date(),
            total,
            cartItem:{
                createMany:{
                    data: cartItem.map(item => {
                        return{
                            productId: item.productId,
                            quantity: item.quantity
                        }
                    })
                }
            }
        })
        
        return shoppingCart
    }
}