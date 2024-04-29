import { ICategoriesRepository } from "@/repositories/interfaces/interface-categories-repository"
import { Category } from "@prisma/client"

interface IRequestCreateCategory{
    name: string
    description?: string
}

export class CreateCategoryUseCase {
    constructor(
        private categoriesRepository: ICategoriesRepository,
        ) {}

    async execute({
        name,
        description,
    }: IRequestCreateCategory): Promise<Category>{
        // criar categoria
        const category = await this.categoriesRepository.create({
            name,
            description,
        })

        // retornar categoria
        return category
    }
}