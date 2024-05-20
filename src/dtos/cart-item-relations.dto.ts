import { Product, ShoppingCart, User } from "@prisma/client"

export interface ICartItemRelationsDTO {
    id: string
    product: Product
    shopping: ShoppingCart
    quantity: number
}