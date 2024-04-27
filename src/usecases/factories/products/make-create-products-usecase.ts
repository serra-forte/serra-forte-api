import { PrismaProductsRepository } from "@/repositories/prisma/prisma-products-repository";
import { CreateProductsUseCase } from "@/usecases/products/create/create-products-usecase";

export async function makeCreateProduct(): Promise<CreateProductsUseCase>{
    const productsRepository = new PrismaProductsRepository()

    const createProductsUseCase = new CreateProductsUseCase(
        productsRepository
    )

    return createProductsUseCase
}