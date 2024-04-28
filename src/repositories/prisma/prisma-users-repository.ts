import { ListUserDifferentToPacientUseCase } from './../../usecases/admin/list-users/list-users-different-pacient-usecase';
import { $Enums, Prisma, Role, User } from "@prisma/client";
import { IExpiredRefundCredit, IUsersRepository } from "../interface-users-repository";
import { prisma } from "@/lib/prisma";

export class PrismaUsersRepository implements IUsersRepository{

    async updateExpireRefundCredit({
        ListUserDifferentToPacientUseCase,
        date
    }:IExpiredRefundCredit): Promise<void> {
        await prisma.user.update({
            where:{
                id: ListUserDifferentToPacientUseCase
            },
            data: {
                expireRefundCredit: date
            }
        })
    }

    async updateRefundCredit(ListUserDifferentToPacientUseCase: string, value: number): Promise<number> {
       const user = await prisma.user.update({
            where:{
                id: ListUserDifferentToPacientUseCase
            },
            data: {
                refundCredit: value
            }
        })
        
        const refundCreditNumber = Number(user.refundCredit)
        
        return refundCreditNumber
    }
    

    async findByPhone(phone: string){
        const user = await prisma.user.findUnique({
            where: {phone},
            select: {
                id: true,
                idCustomerAsaas: true,
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
            }
        }) as unknown as User[]
    
        return users

    }

    async findByIdCostumerPayment(id: string){
        const user = await prisma.user.findFirst({
            where:{
                idCustomerAsaas: id
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
                idCustomerAsaas: idCustomerPayment
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
                idCustomerAsaas: true,
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
            }
        }) as unknown as User

        return user
    }

    async findByCPF(cpf: string){
        const user = await prisma.user.findUnique({
            where: {cpf},
            select: {
                id: true,
                idCustomerAsaas: true,
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
                }
            }) as unknown as User
        return user
    }

    async list(){
        const users = await prisma.user.findMany({
            select: {
                id: true,
                idCustomerAsaas: true,
                name: true,
                cpf: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                role: true,
                createdAt: true,
            }
        }) as unknown as User[]

        return users
    }

    async findById(id: string){
        const user = await prisma.user.findUnique({
            where: {id},
            select: {
                id: true,
                idCustomerAsaas: true,
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
            }
        }) as unknown as User

        return user
    }

    async findByEmail(email: string){
        const user = await prisma.user.findUnique({
            where: {email},
            select: {
                id: true,
                idCustomerAsaas: true,
                name: true,
                cpf: true,
                password: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                createdAt: true,
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
                name: true,
                cpf: true,
                email: true,
                emailActive: true,
                dateBirth: true,
                phone: true,
                role: true,
                createdAt: true,
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