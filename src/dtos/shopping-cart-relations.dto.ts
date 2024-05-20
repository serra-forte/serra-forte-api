import { User } from "@prisma/client"

export interface IShoppingCartRelationsDTO {
    id: string
    total: number
    user: User
    cartItem: {
        id: string
        productId: string
        name: string
        quantity: number
        price: number
        mainImage: string
    }[]
}