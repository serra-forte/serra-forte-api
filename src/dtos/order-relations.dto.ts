import { Item, Payment, User } from "@prisma/client"

export interface IOrderRelationsDTO{
    id: string
    total: number
    user: User
    items: Item[]
    payment: Payment
    createdAt: Date
}