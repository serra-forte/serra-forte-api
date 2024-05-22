import { Order, Prisma, Status } from "@prisma/client"

export interface IOrderRepository {
    create(data: Prisma.OrderUncheckedCreateInput):Promise<Order>
    list():Promise<Order[]>
    listByUserId(idUser:string):Promise<Order[]>
    findById(id:string):Promise<Order | null>
    deleteById(id:string):Promise<void>
    updateStatus(id: string, status: Status): Promise<void>
}