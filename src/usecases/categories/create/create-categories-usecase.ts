import { ICategoriesRepository } from "@/repositories/interface-categories-repository"
import { Category, TypeCategory } from "@prisma/client"

interface IRequestCreateCategory{
    name: string
    description?: string
    type: TypeCategory
}

export class CreateCategoryUseCase {
    constructor(
        private categoriesRepository: ICategoriesRepository,
        ) {}

    async execute({
        name,
        description,
        type,
    }: IRequestCreateCategory): Promise<Category>{
        // criar categoria
        const category = await this.categoriesRepository.create({
            name,
            description,
            type
        })

        // retornar categoria
        return category
    }
}