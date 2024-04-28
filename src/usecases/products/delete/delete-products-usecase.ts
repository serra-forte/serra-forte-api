import { IProductsRepository } from "@/repositories/interfaces/interface-products-repository"

interface IRequestDeleteProduct {
    id: string
}

export class DeleteProductsUseCase {
    constructor(
        private productsRepository: IProductsRepository
    ){}

    async execute({
        id
    }: IRequestDeleteProduct): Promise<void> {
        // buscar produto pelo id
        const findProductExists = await this.productsRepository.findById(id)

        // validar se existe um produto com o mesmo id
        if(!findProductExists){
            throw new Error('Product not found')
        }

        // deletar um produto pelo id
        await this.productsRepository.delete(id)
    }
}