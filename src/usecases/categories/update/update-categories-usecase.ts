import { ICategoriesRepository } from "@/repositories/interface-categories-repository"
import { Category, TypeCategory } from "@prisma/client"

interface IRequestUpdateCategory{
    id: string
    name: string
    description?: string
    type: TypeCategory
}

export class UpdateCategoryUseCase {
    constructor(
        private categoriesRepository: ICategoriesRepository,
        ) {}

    async execute({
        id,
        name,
        description,
        type,
    }: IRequestUpdateCategory): Promise<Category>{

        // atualizar categoria
        const category = await this.categoriesRepository.updateById({
            id,
            name,
            description,
            type
        })

        // retornar categoria
        return category
    }
}