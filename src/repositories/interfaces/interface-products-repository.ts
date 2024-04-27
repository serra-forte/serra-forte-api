import { Prisma, Product } from "@prisma/client"

export interface IProductsRepository {
    create(data: Prisma.ProductCreateInput): Promise<Product>
    findById(id: string): Promise<Product | null>
    list(): Promise<Product[]>
    findByName(name: string): Promise<Product | null>
    update(data: Prisma.ProductUpdateInput): Promise<Product>
    delete(id: string): Promise<void>
}