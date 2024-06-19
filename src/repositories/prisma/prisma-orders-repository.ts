import { $Enums, Order, Prisma, Status } from "@prisma/client";
import { IOrderRepository } from "../interfaces/interface-order-repository";
import { prisma } from "@/lib/prisma";

export class PrismaOrderRepository implements IOrderRepository {
    async listByShoppKeeper(userId: string){
        const orders = await prisma.order.findMany({
            where: {
                items:{
                    some: {
                        userId
                    }
                }
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
                        phone: true,
                        address: true
                    }
                },
                items: true,
                delivery: {
                    select:{
                        id: true,
                        orderId: true,
                        userId: true,
                        deliveryDate: true,
                        shippingDate: true,
                        receiverDocument: true,
                        receiverName: true,
                        deliveryMan: {
                            select:{
                                id: true,
                                name: true,
                                email: true,
                                role: true
                            }
                        },
                        latitude: true,
                        longitude: true,
                        price: true,
                        createdAt: true,
                        address: true
                    }
                },
                payment: true,
                total: true,
                status:true,
                createdAt: true
            }
        }) as unknown as Order[]
       
        return orders
    }

    async listByDeliveryMan(userId: string){
        const orders = await prisma.order.findMany({
            where: {
                delivery:{
                    deliveryMan:{
                        id: userId
                    }
                }
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
                        phone: true,
                        address: true
                    }
                },
                items: true,
                delivery: {
                    select:{
                        id: true,
                        orderId: true,
                        userId: true,
                        deliveryDate: true,
                        shippingDate: true,
                        receiverDocument: true,
                        receiverName: true,
                        deliveryMan: {
                            select:{
                                id: true,
                                name: true,
                                email: true,
                                role: true
                            }
                        },
                        latitude: true,
                        longitude: true,
                        price: true,
                        createdAt: true,
                        address: true
                    }
                },
                payment: true,
                total: true,
                status:true,
                createdAt: true
            }
        }) as unknown as Order[]
       
        return orders
    }

    async addDescription(id: string, description: string): Promise<void> {
        await prisma.order.update({
            where: {id},
            data: {
                description
            }
        })
    }
    async listByIds(orderIds:string[]){
        const orders = await prisma.order.findMany({
            where: {
                id: {
                    in: orderIds
                }
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
                delivery: {
                    select:{
                        id: true,
                        orderId: true,
                        userId: true,
                        deliveryDate: true,
                        shippingDate: true,
                        receiverDocument: true,
                        receiverName: true,
                        deliveryMan: {
                            select:{
                                id: true,
                                name: true,
                                email: true,
                                role: true
                            }
                        },
                        latitude: true,
                        longitude: true,
                        price: true,
                        createdAt: true,
                        address: true
                    }
                },
                payment: true,
                total: true,
                status:true,
                createdAt: true
            }
        }) as unknown as Order[]

        return orders
    }
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
                delivery: {
                    select:{
                        id: true,
                        orderId: true,
                        userId: true,
                        deliveryDate: true,
                        shippingDate: true,
                        receiverDocument: true,
                        receiverName: true,
                        deliveryMan: {
                            select:{
                                id: true,
                                name: true,
                                email: true,
                                role: true
                            }
                        },
                        latitude: true,
                        longitude: true,
                        price: true,
                        createdAt: true,
                        address: true
                    }
                },
                payment: true,
                total: true,
                status:true,
                createdAt: true
            }
        }) as unknown as Order

        return order
    }
    async list(){
        return await prisma.order.findMany({
            orderBy: {
                createdAt: 'desc',
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
                        phone: true,
                        address: true
                    }
                },
                items: true,
                delivery: {
                    select:{
                        id: true,
                        orderId: true,
                        userId: true,
                        deliveryDate: true,
                        shippingDate: true,
                        receiverDocument: true,
                        receiverName: true,
                        deliveryMan: {
                            select:{
                                id: true,
                                name: true,
                                email: true,
                                role: true
                            }
                        },
                        latitude: true,
                        longitude: true,
                        price: true,
                        createdAt: true,
                        address: true
                    }
                },
                payment: true,
                total: true,
                status:true,
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
                        phone: true,
                        address: true
                    }
                },
                items: true,
                delivery: {
                    select:{
                        id: true,
                        orderId: true,
                        userId: true,
                        deliveryDate: true,
                        shippingDate: true,
                        receiverDocument: true,
                        receiverName: true,
                        deliveryMan: {
                            select:{
                                id: true,
                                name: true,
                                email: true,
                                role: true
                            }
                        },
                        latitude: true,
                        longitude: true,
                        price: true,
                        createdAt: true,
                        address: true
                    }
                },
                payment: true,
                total: true,
                status:true,
                createdAt: true
            }
        }) as unknown as Order[]
    }
    async findById(id: string){
        const order = await prisma.order.findUnique({
            where: {id},
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
                        phone: true,
                        address: true
                    }
                },
                items: true,
                delivery: {
                    select:{
                        id: true,
                        orderId: true,
                        userId: true,
                        deliveryDate: true,
                        shippingDate: true,
                        receiverDocument: true,
                        receiverName: true,
                        deliveryMan: {
                            select:{
                                id: true,
                                name: true,
                                email: true,
                                role: true
                            }
                        },
                        latitude: true,
                        longitude: true,
                        price: true,
                        createdAt: true,
                        address: true
                    }
                },
                payment: true,
                total: true,
                status:true,
                createdAt: true
            }
        }) as unknown as Order
        
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