import { Prisma, Token } from "@prisma/client"

export interface ITokensRepository {
    create(data:Prisma.TokenUncheckedCreateInput):Promise<Token>
    findByToken(token:string):Promise<Token | null>
    findByUserId(idUser:string):Promise<Token | null>
    findTokenAuth(idUser:string, auth: string):Promise<Token | null>
    findByUserAndToken(idUser:string, token:string):Promise<Token | null>
    delete(id:string):Promise<void>
    deleteAll():Promise<void>
    deleteByUser(idUser: string): Promise<void>
}