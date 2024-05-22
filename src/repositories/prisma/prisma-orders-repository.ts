import { Order, Prisma, Status } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { IOrderRepository } from "../interfaces/interface-order-repository";
import { prisma } from "@/lib/prisma";

export class PrismaOrderRepository implements IOrderRepository {
    async countOrders() {
        return prisma.order.count()
    }
    async create(data: Prisma.OrderUncheckedCreateInput){
        const order = await prisma.order.create({
            data,
            select:{
                id: true,
                shoppingCartId: true,
                code:true,
                user:{
                    select:{
                        id: true,
                        name: true,
                        email: true,
                        cpf: true,
                        phone: true
                    }
                },
                items: true,
                payment: true,
                total: true,
                status:true,
                orderDate: true,
                createdAt: true
            }
        }) as unknown as Order

        return order
    }
    async list(){
        return await prisma.order.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                shoppingCartId: true,
                code:true,
                user:{
                    select:{
                        id: true,
                        name: true,
                        email: true,
                        cpf: true,
                        phone: true
                    }
                },
                items: true,
                payment: true,
                total: true,
                status:true,
                orderDate: true,
                createdAt: true
            }
        }) as unknown as Order[]
    }
    async listByUserId(idUser: string){
        return await prisma.order.findMany({
            where: {
                userId: idUser
            },
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                shoppingCartId: true,
                code:true,
                user:{
                    select:{
                        id: true,
                        name: true,
                        email: true,
                        cpf: true,
                        phone: true
                    }
                },
                items: true,
                payment: true,
                total: true,
                status:true,
                orderDate: true,
                createdAt: true
            }
        }) as unknown as Order[]
    }
    async findById(id: string){
        const order = await prisma.order.findUnique({
            where: {id}
        })
        return order
    }
    async deleteById(id: string){
        await prisma.order.delete({where: {id}})
    }
    async updateStatus(id: string, status: Status){
        await prisma.order.update({
            where: {id},
            data: {
                status
            }
        })
    }
}