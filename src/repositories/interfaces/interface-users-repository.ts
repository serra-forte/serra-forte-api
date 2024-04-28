import { Prisma, User } from "@prisma/client"

export interface IExpiredRefundCredit{
    userId: string, 
    date?: string | null
}

export interface IUsersRepository {
    create(data:Prisma.UserUncheckedCreateInput): Promise<User>
    list(): Promise<User[]>
    listAdmins(): Promise<User[]>
    findById(id:string): Promise<User | null>
    getUserSecurity(id:string): Promise<User | null>
    findByEmail(email:string): Promise<User | null>
    findByCPF(cpf:string): Promise<User | null>
    findByPhone(phone:string): Promise<User | null>

    activeEmail(id:string, activate?: boolean): Promise<void | null>
    changePassword(id:string, password:string): Promise<void | null>
    update(data:Prisma.UserUncheckedUpdateInput): Promise<User>
    updateRefundCredit(userId: string, value: number): Promise<number>
    updateExpireRefundCredit(data: IExpiredRefundCredit): Promise<void>
    turnAdmin(id:string): Promise<User | null>
    delete(id:string): Promise<void>
}