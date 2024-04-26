import { ICategoriesRepository } from "@/repositories/interface-categories-repository"
import { Category, TypeCategory } from "@prisma/client"

interface IRequestListCategory{
    type: TypeCategory
}

export class ListCategoryByTypeUseCase {
    constructor(
        private categoriesRepository: ICategoriesRepository,
        ) {}

    async execute({type}:IRequestListCategory): Promise<Category[]>{
        // listar todas categorias por tipo
        const categories = await this.categoriesRepository.listByType(type)

        return categories
    }
}