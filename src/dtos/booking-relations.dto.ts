import { Box, Camping, Companion, Payment, Policy, Status, Vehicle } from "@prisma/client"
import { User } from "@sentry/node"

export interface IBookingRelationsDTO {
    id: string
    initialDate: Date
    finalDate: Date
    camping: Camping
    boxes: Box[]
    payment: Payment
    user: User
    policy: Policy
    subPolicy: Policy
    status: Status
    companions: Companion[]
    vehicles: Vehicle[]
}