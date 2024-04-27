import { Prisma } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { IProductsRepository } from "../interfaces/interface-products-repository";
import { prisma } from "@/lib/prisma";

export class PrismaProductsRepository  implements IProductsRepository{
    async list(){
        const products = await prisma.product.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return products
    }
    async findByName(name: string){
        const product = await prisma.product.findUnique({where: {name}})
        return product
    }
    async create(data: Prisma.ProductCreateInput){
        const product = await prisma.product.create({data})
        return product
    }
    async findById(id: string){
        const product = await prisma.product.findUnique({where: {id}})
        return product
    }
    async update(data: Prisma.ProductUpdateInput){
        const product = await prisma.product.update({where: {id: data.id as string}, data})
        return product
    }
    async delete(id: string): Promise<void> {
        await prisma.product.delete({where: {id}})
    }
}