import { IProductsRepository } from "@/repositories/interfaces/interface-products-repository"
import { Product } from "@prisma/client"

export class ListProductsUseCase {
    constructor(
        private productsRepository: IProductsRepository
    ){}

    async execute(): Promise<Product[]> {
        // listar todos os produtos
        const products = await this.productsRepository.list()

        return products
    }
}