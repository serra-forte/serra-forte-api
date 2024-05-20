import { Role, ShoppingCart } from "@prisma/client";

export interface IUserRelations {
    id: string;
    idCustomerAsaas: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    dateBirth: Date;
    cpf: string;
    emailActive: boolean;
    role: Role;
    createdAt: Date;
    refundCredit: number;
    expireRefundCredit: Date;
    shoppingCart: ShoppingCart
}