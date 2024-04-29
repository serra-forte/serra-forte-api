import { ICategoriesRepository } from "@/repositories/interfaces/interface-categories-repository"
import { Category } from "@prisma/client"

interface IRequestUpdateCategory{
    id: string
    name: string
    description?: string
}

export class UpdateCategoryUseCase {
    constructor(
        private categoriesRepository: ICategoriesRepository,
        ) {}

    async execute({
        id,
        name,
        description,
    }: IRequestUpdateCategory): Promise<Category>{

        // atualizar categoria
        const category = await this.categoriesRepository.updateById({
            id,
            name,
            description,
        })

        // retornar categoria
        return category
    }
}