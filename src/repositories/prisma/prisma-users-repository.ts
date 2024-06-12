import { ListUserDifferentToPacientUseCase } from './../../usecases/admin/list-users/list-users-different-pacient-usecase';
import { $Enums, Prisma, Role, User } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { IUsersRepository } from '../interfaces/interface-users-repository';

export class PrismaUsersRepository implements IUsersRepository{
    async listByShopkeeper(){
        const users = await prisma.user.findMany({
            where:{
                role: 'SHOPKEEPER' as Role
            },
            select: {
                id: true,
                asaasCustomerId: true,
                asaasWalletId: true,
                paymentFee:true,
                deliverys: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                name: true,
                cpf: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                role: true,
                refundCredit: true,
                expireRefundCredit: true,
                createdAt: true,
                shoppingCart: true,
                address:true,
                products: true
            }
        }) as unknown as User[]

        return users
    }
    async updateAsaasCostumerId(id: string, asaasCustomerId: string){
        const user = await prisma.user.update({
            where: {
                id
            },
            data:{
                asaasCustomerId
            }
        })
        return user
    }
    async findByPhone(phone: string){
        const user = await prisma.user.findUnique({
            where: {phone},
            select: {
                id: true,
                asaasCustomerId: true,
                asaasWalletId: true,
                paymentFee:true,
                deliverys: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                name: true,
                cpf: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                role: true,
                refundCredit: true,
                expireRefundCredit: true,
                createdAt: true,
                shoppingCart: true,
                address:true,
                products: true
            }
        }) as unknown as User

        return user
    }


    async listAdmins(){
        const users = await prisma.user.findMany({
            where:{
                role: 'ADMIN' as Role
            },
            select: {
                id: true,
                asaasWalletId: true,
                paymentFee:true,
                deliverys: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                name: true,
                cpf: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                role: true,
                refundCredit: true,
                expireRefundCredit: true,
                createdAt: true,
                shoppingCart: true,
                address:true,
                products: true
            }
        }) as unknown as User[]
    
        return users

    }

    async findByIdCostumerPayment(id: string){
        const user = await prisma.user.findFirst({
            where:{
                asaasCustomerId: id
            }
        })
        return user
    }

    async getUserSecurity(id: string){
        const user = await prisma.user.findUnique({
            where:{
                id
            },
            select: {
                id: true,
                asaasWalletId: true,
                paymentFee:true,
                deliverys: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                name: true,
                cpf: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                role: true,
                refundCredit: true,
                expireRefundCredit: true,
                createdAt: true,
                shoppingCart: true,
                address:true,
                products: true
            }
        }) as unknown as User

        return user
    }

    async changePassword(id: string, password: string){
        const user = await prisma.user.update({
            where: {
                id
            },
            data:{
                password
            }
        })
    }

    async updateIdCostumerPayment(ListUserDifferentToPacientUseCase: string, idCustomerPayment: string | null){
        const user = await prisma.user.update({
            where: {
                id: ListUserDifferentToPacientUseCase
            },
            data:{
                asaasCustomerId: idCustomerPayment
            },
        })

        return user
    }

    async turnAdmin(id: string){
        const user = await prisma.user.update({
            where:{
                id
            },
            data:{
                role: 'ADMIN' as Role
            },
            select: {
                id: true,
                asaasCustomerId: true,
                asaasWalletId: true,
                paymentFee:true,
                deliverys: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                name: true,
                cpf: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                role: true,
                refundCredit: true,
                expireRefundCredit: true,
                createdAt: true,
                shoppingCart: true,
                address:true,
            }
        }) as unknown as User

        return user
    }

    async findByCPF(cpf: string){
        const user = await prisma.user.findUnique({
            where: {cpf},
            select: {
                id: true,
                asaasCustomerId: true,
                asaasWalletId: true,
                paymentFee:true,
                deliverys: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                name: true,
                cpf: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                role: true,
                refundCredit: true,
                expireRefundCredit: true,
                createdAt: true,
                shoppingCart: true,
                address:true,
            }
        }) as unknown as User

        return user
    }
    
    async create(data: Prisma.UserUncheckedCreateInput){
        const user = await prisma.user.create(
            {
                data,
                select: {
                    id: true,
                    asaasWalletId: true,
                    paymentFee:true,
                    deliverys: {
                        orderBy: {
                            createdAt: 'desc'
                        }
                    },
                    name: true,
                    cpf: true,
                    email: true,
                    emailActive: true,
                    dateBirth: true,
                    phone: true,
                    role: true,
                    refundCredit: true,
                    expireRefundCredit: true,
                    shoppingCart: true,
                    createdAt: true,
                    products: true,
                    address:true,
                }
            }) as unknown as User
        return user
    }

    async list(){
        const users = await prisma.user.findMany({
            select: {
                id: true,
                asaasCustomerId: true,
                asaasWalletId: true,
                paymentFee:true,
                deliverys: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                name: true,
                cpf: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                role: true,
                createdAt: true,
                shoppingCart: true,
                products: true,
                address:true,
            }
        }) as unknown as User[]

        return users
    }

    async findById(id: string){
        const user = await prisma.user.findUnique({
            where: {id},
            select: {
                id: true,
                asaasCustomerId: true,
                shoppingCart:{
                    select:{
                        id: true
                    }
                },
                asaasWalletId: true,
                paymentFee:true,
                deliverys: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                name: true,
                cpf: true,
                password: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                role: true,
                refundCredit: true,
                expireRefundCredit: true,
                createdAt: true,
                products: true,
                address : true
            }
        }) as unknown as User

        return user
    }

    async findByEmail(email: string){
        const user = await prisma.user.findUnique({
            where: {email},
            select: {
                id: true,
                asaasCustomerId: true,
                asaasWalletId: true,
                paymentFee:true,
                deliverys: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                name: true,
                cpf: true,
                password: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                createdAt: true,
                shoppingCart: true,
                address:true,
                products: true
            }
        }) as unknown as User

        return user
    }

    async activeEmail(id: string){
        await prisma.user.update({
            where: {
                id
            },
            data:{
                emailActive: true
            }
        })
    }

    async update(data: Prisma.UserUncheckedUpdateInput){
        const user = await prisma.user.update({
            where: {
                id: data.id as string
            },
            select: {
                id: true,
                asaasWalletId: true,
                paymentFee:true,
                deliverys: {
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                name: true,
                cpf: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                role: true,
                createdAt: true,
                shoppingCart: true,
                address:true,
            },
            data
        }) as unknown as User

        return user
    }

    async delete(id: string){
        await prisma.user.delete({
            where: {
                id
            }
        })
    }
}