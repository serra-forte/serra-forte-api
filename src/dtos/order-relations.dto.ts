import { Item, Payment, ShoppingCart, Status, User } from "@prisma/client"

export interface IOrderRelationsDTO{
    id: string
    code: string
    total: number
    user: User
    status: Status
    items: Item[]
    payment: Payment
    shoppingCart: ShoppingCart
    createdAt: Date
}