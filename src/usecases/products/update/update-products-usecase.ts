import { IProductsRepository } from "@/repositories/interfaces/interface-products-repository"
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
            throw new Error('No product found')
        }

        // buscar produto pelo nome
        const nameProductAlreadyExists = await this.productsRepository.findByName(name)

        // validar se existe um produto com o mesmo nome
        if(nameProductAlreadyExists){
            if(productAlreadyExists.id !== nameProductAlreadyExists.id){
            throw new Error('Product already exists')
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
            active
        })

        // retornar produtos
        return  product 
       
    }
}