import { PrismaProductsRepository } from "@/repositories/prisma/prisma-products-repository";
import { UpdateProductsUseCase } from "@/usecases/products/update/update-products-usecase";

export async function makeUpdateProduct(): Promise<UpdateProductsUseCase>{
    const productsRepository = new PrismaProductsRepository()

    const updateProductsUseCase = new UpdateProductsUseCase(
        productsRepository
    )

    return updateProductsUseCase
}