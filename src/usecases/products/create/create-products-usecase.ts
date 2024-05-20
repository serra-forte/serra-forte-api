import { ICategoriesRepository } from "@/repositories/interfaces/interface-categories-repository"
import { IProductsRepository } from "@/repositories/interfaces/interface-products-repository"
import { AppError } from "@/usecases/errors/app-error"
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
        private productsRepository: IProductsRepository,
        // private categoriesRepository: ICategoriesRepository
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
        // // buscar categoria pelo id
        // const findCategoryExists = await this.categoriesRepository.findById(categoryId)

        // // validar se existe categoria com o mesmo id
        // if(!findCategoryExists){
        //     throw new AppError('Categoria nao encontrada', 404)
        // }

        // buscar produto pelo nome
        const productAlreadyExists = await this.productsRepository.findByName(name)

        // validar se existe um produto com o mesmo nome
        if(productAlreadyExists){
            throw new AppError('Produto ja existe', 409)
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