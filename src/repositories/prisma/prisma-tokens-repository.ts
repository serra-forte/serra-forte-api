import { Prisma, Token } from "@prisma/client";
import { ITokensRepository } from "../interface-tokens-repository";
import { prisma } from "@/lib/prisma";

export class PrismaTokensRepository implements ITokensRepository{
    async findTokenAuth(idUser: string, auth: string){
        const token = await prisma.token.findFirst({
            where: {idUser, token: auth}
        })
        return token
    }

    async deleteByUser(idUser: string): Promise<void> {
        await prisma.token.deleteMany({
          where: {
            idUser,
          },
        })
      }
      
    async deleteAll(){
        await prisma.token.deleteMany()
    }
    async create(data: Prisma.TokenUncheckedCreateInput){
       const token = await prisma.token.create({data})
       return token
    }

    async findByToken(token: string){
        const tokenData = await prisma.token.findUnique({
            where: {token},
            select:{
                token: true,
                expireDate: true,
                tokenGoogle: true,
                idUser: true,
                id:true,
                user: true
            }
        }) as unknown as Token
        
        return tokenData
    }

    async findByUserId(idUser: string){
        const token = await prisma.token.findFirst({where: {idUser}})

        return token
    }

    async findByUserAndToken(idUser: string, token: string){
        const tokenData = await prisma.token.findFirst({
            where: {idUser, token},
            select:{
                id:true,
                token: true,
                expireDate: true,
                tokenGoogle: true,
                user: true
            }}) as unknown as Token
        return tokenData
    }
    
    async delete(id: string): Promise<void> {
        await prisma.token.delete({where: {id}})
    }
}