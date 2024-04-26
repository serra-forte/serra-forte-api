import { PrismaCategoryRepository } from "@/repositories/prisma/prisma-categories-repository"
import { ListCategoryByTypeUseCase } from "@/usecases/categories/list-by-type/list-by-type-categories-usecase"

export async function makeListCategoryByType(): Promise<ListCategoryByTypeUseCase> {
    const categoryRepository = new PrismaCategoryRepository()
    const listCategoryByTypeUseCase = new ListCategoryByTypeUseCase(
        categoryRepository
    )

    return listCategoryByTypeUseCase
}