import { Box, Policy, Role } from "@prisma/client";
import { Message } from "./in-memory/in-memory-mail-provider";
import { IBookingFormatted } from "@/usecases/bookings/list-by-user/list-by-user-booking-usecase";
import { IBookingRelationsDTO } from "@/dtos/shopping-cart-relations.dto";

export interface Variables {
    campingName?: string
    data?: string
    checkIn?: string
    checkOut?: string
    policy?: Policy | null
    value?: number
    password?: string | null
    role?: Role | null
    booking?: IBookingFormatted | IBookingRelationsDTO
    boxFormatted?: Box
    text?: string
}

export interface IMailProvider {
    sendEmail(
        email: string, 
        name:string, 
        subject:string, 
        link:string | null, 
        pathTemplate:string,
        variables:  Variables | null
    ): Promise<void>

    findMessageSent(email: string): Promise<Message>
}