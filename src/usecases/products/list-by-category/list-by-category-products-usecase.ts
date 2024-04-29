import { ICategoriesRepository } from "@/repositories/interfaces/interface-categories-repository"
import { IProductsRepository } from "@/repositories/interfaces/interface-products-repository"
import { Product } from "@prisma/client"

interface ListByCategoryProductsUseCaseRequest {
    id: string
}

export class ListByCategoryProductsUseCase {
    constructor(
        private productsRepository: IProductsRepository,
        private categoriesRepository: ICategoriesRepository
    ){}

    async execute({
        id
    }: ListByCategoryProductsUseCaseRequest): Promise<Product[]> {
        // buscar categoria pelo id
        const findCategoryExists = await this.categoriesRepository.findById(id)

        // validar se existe categoria com o mesmo id
        if(!findCategoryExists){
            throw new Error('Category not found')
        }

        // listar todos os produtos
        const products = await this.productsRepository.listByCategoryId(id)

        return products
    }
}