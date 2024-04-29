import { IProductsRepository } from "@/repositories/interfaces/interface-products-repository"
import { Product } from "@prisma/client"

export interface IRequestCreateProducts {
    name: string
    categoryId?: string | null
    description?: string | null
    price: number
    mainImage?: string | null
    quantity: number
    active: boolean
}

export class CreateProductsUseCase {
    constructor(
        private productsRepository: IProductsRepository
    ){}

    async execute({ 
        name, 
        categoryId, 
        description, 
        price, 
        mainImage, 
        quantity,
        active
     }: IRequestCreateProducts): Promise<Product> {

        // buscar produto pelo nome
        const productAlreadyExists = await this.productsRepository.findByName(name)

        // validar se existe um produto com o mesmo nome
        if(productAlreadyExists){
            throw new Error('Product already exists')
        }

        // criar produto
        const product = await this.productsRepository.create({
            name,
            description,
            price,
            mainImage: mainImage as string ?? null,
            quantity,
            active,
            category: categoryId ? {
                connect: {
                    id: categoryId as string
                }
            } : undefined
        })

        // retornar produtos
        return  product 
       
    }
}