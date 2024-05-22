import { Order, Prisma } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { IOrderRepository } from "../interfaces/interface-order-repository";
import { prisma } from "@/lib/prisma";

export class PrismaOrderRepository implements IOrderRepository {
    async create(data: Prisma.OrderUncheckedCreateInput){
        const order = await prisma.order.create({
            data,
            select:{
                id: true,
                shoppingCartId: true,
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
                total: true,
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
            }
        })
    }
    async listByUserId(idUser: string){
        return await prisma.order.findMany({
            where: {
                userId: idUser
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
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
    // async updateStatus(id: string, status: string){
    //     await prisma.order.update({
    //         where: {id},
    //         data: {
    //             status
    //         }
    //     })
    // }
}