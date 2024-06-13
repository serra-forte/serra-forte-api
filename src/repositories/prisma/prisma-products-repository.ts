import { Prisma, Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { IProductsRepository } from "../interfaces/interface-products-repository";
import { prisma } from "@/lib/prisma";

export class PrismaProductsRepository  implements IProductsRepository{
    async updateSales(id: string, sales: number){
        await prisma.product.update({
            where: {id},
            data: {
                sales: {
                    increment: sales
                }
            }
        })
    }
    async updateStatus(id: string, status: boolean){
        const product = await prisma.product.update({
            where: {id},
            data: {
                active: status
            }
        })
        return product
    }
    async updateQuantity(id: string, quantity: number){
        const product = await prisma.product.update({
            where: {id},
            data: {
                quantity: {
                    decrement: quantity
                }
            }
        })
        return product
    }

    async listByCategoryId(id: string){
        const products = await prisma.product.findMany({
            where: {
                categoryId: id
            },
            select:{
                id: true,
                code:true,
                name: true,
                description: true,
                price: true,
                sales:true,
                active: true,
                mainImage: true,
                quantity: true,
                createdAt: true,
                user:{
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        emailActive: true,
                        role: true,
                    }
                },
                category: true
            }
        }) as unknown as Product[]
        return products
    }
    async list(){
        const products = await prisma.product.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            select:{
                id: true,
                code:true,
                name: true,
                description: true,
                price: true,
                sales:true,
                active: true,
                mainImage: true,
                quantity: true,
                createdAt: true,
                user:{
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        emailActive: true,
                        role: true,
                    }
                },
                category: true
            }
        }) as unknown as Product[]

        return products
    }
    async findByName(name: string){
        const product = await prisma.product.findUnique({
            where: {name},
            select:{
                id: true,
                code:true,
                name: true,
                description: true,
                price: true,
                sales:true,
                active: true,
                mainImage: true,
                quantity: true,
                createdAt: true,
                user:{
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        emailActive: true,
                        role: true,
                    }
                },
                category: true
            }
        }) as unknown as Product

        return product
    }
    async create(data: Prisma.ProductCreateInput){
        const product = await prisma.product.create({
            data,
            select:{
                id: true,
                code:true,
                name: true,
                description: true,
                price: true,
                sales:true,
                active: true,
                mainImage: true,
                quantity: true,
                createdAt: true,
                user:{
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        emailActive: true,
                        role: true,
                    }
                },
                category: true
            }
        }) as unknown as Product

        return product
    }
    async findById(id: string){
        const product = await prisma.product.findUnique({
            where: {id},
            select:{
                id: true,
                code:true,
                name: true,
                description: true,
                price: true,
                sales:true,
                active: true,
                mainImage: true,
                quantity: true,
                createdAt: true,
                user:{
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        emailActive: true,
                        role: true,
                    }
                },
                category: true
            }
        }) as unknown as Product

        return product
    }
    async update(data: Prisma.ProductUpdateInput){
        const product = await prisma.product.update({
            where: {id: data.id as string}, 
            data,
            select:{
                id: true,
                code:true,
                name: true,
                description: true,
                price: true,
                sales:true,
                active: true,
                mainImage: true,
                quantity: true,
                createdAt: true,
                user:{
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        emailActive: true,
                        role: true,
                    }
                },
                category: true
            }
        }) as unknown as Product

        return product
    }
    async delete(id: string): Promise<void> {
        await prisma.product.delete({where: {id}})
    }
}