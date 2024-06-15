import { Order, Prisma, Status } from "@prisma/client"

export interface IOrderRepository {
    create(data: Prisma.OrderUncheckedCreateInput):Promise<Order>
    list():Promise<Order[]>
    listByShoppKeeper(userId: string):Promise<Order[]>
    listByDeliveryMan(userId: string):Promise<Order[]>
    listByUserId(idUser:string):Promise<Order[]>
    findById(id:string):Promise<Order | null>
    listByIds(orderIds:string[]):Promise<Order[]>
    deleteById(id:string):Promise<void>
    updateStatus(id: string, status: Status): Promise<void>
    countOrders(): Promise<number>
    addDescription(id: string, description: string): Promise<void>
}