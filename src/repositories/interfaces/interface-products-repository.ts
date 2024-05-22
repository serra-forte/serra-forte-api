import { Prisma, Product } from "@prisma/client"

export interface IProductsRepository {
    create(data: Prisma.ProductCreateInput): Promise<Product>
    findById(id: string): Promise<Product | null>
    list(): Promise<Product[]>
    listByCategoryId(id: string): Promise<Product[]>
    findByName(name: string): Promise<Product | null>
    update(data: Prisma.ProductUpdateInput): Promise<Product>
    updateQuantity(id: string, quantity: number): Promise<Product>
    updateStatus(id: string, status: boolean): Promise<Product>
    delete(id: string): Promise<void>
}