import { IProductsRepository } from "@/repositories/interfaces/interface-products-repository"
import { AppError } from "@/usecases/errors/app-error"
import { Product } from "@prisma/client"

export interface IRequestUpdateProducts {
    id: string
    name: string
    categoryId?: string | null
    description?: string | null
    price: number
    mainImage?: string | null
    quantity: number
    active: boolean
}

export class UpdateProductsUseCase {
    constructor(
        private productsRepository: IProductsRepository
    ){}

    async execute({ 
        id,
        name, 
        categoryId, 
        description, 
        price, 
        mainImage, 
        quantity, 
        active
    }: IRequestUpdateProducts): Promise<Product> {
        // buscar produto pelo id
        const productAlreadyExists = await this.productsRepository.findById(id)

        // validar se existe um produto com o mesmo id
        if(!productAlreadyExists){
            throw new AppError('Produto nao encontrado', 404)
        }

        // buscar produto pelo nome
        const nameProductAlreadyExists = await this.productsRepository.findByName(name)

        // validar se existe um produto com o mesmo nome
        if(nameProductAlreadyExists){
            if(productAlreadyExists.id !== nameProductAlreadyExists.id){
            throw new AppError('Produto ja existe', 409)
            }
        }

        // criar produto
        const product = await this.productsRepository.update({
            id,
            name,
            description,
            price,
            mainImage: mainImage as string ?? null,
            quantity,
            active,
            category: categoryId ? {
                connect: {
                    id: categoryId
                }
            } : undefined
        })

        // retornar produtos
        return  product 
       
    }
}