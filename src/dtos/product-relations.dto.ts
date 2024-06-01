import { User } from '@prisma/client';
export interface IProductRelationsDTO {
    id: string
    productId: string
    shoppingCartId: string
    quantity: number
    price: number
    name: string
    mainImage: string
    description: string
    active: boolean
    createdAt: Date
    user: User
}