import { IUserRelations } from "@/dtos/user-relations.dto";
import { env } from "@/env";
import { IDateProvider } from "@/providers/DateProvider/interface-date-provider";
import { ITokensRepository } from "@/repositories/interfaces/interface-tokens-repository";
import { IUsersRepository } from "@/repositories/interfaces/interface-users-repository";
import { AppError } from "@/usecases/errors/app-error";
import { User } from "@prisma/client";
import { compare } from "bcrypt";
import 'dotenv/config'
import jwt from 'jsonwebtoken'

interface IRequestLoginAccount {
    email: string
    password: string
    token?: string | null
}
interface IResponseLoginAccount {
    accessToken: string
    refreshToken: string
    user: User
}

export interface ITokenOnUser{
    id: string
    token: string
    user: User
}

export class LoginUseCase{
    constructor(
        private usersRepository: IUsersRepository,
        private usersTokensRepository: ITokensRepository,
        private dayjsDateProvider: IDateProvider,
    ) {}

    async execute({
        email,
        password,
    }:IRequestLoginAccount):Promise<IResponseLoginAccount>{
            const findUserExists = await this.usersRepository.findByEmail(email) as unknown as IUserRelations
        
            if(!findUserExists){
                throw new AppError('Usuário ou senha incorretos', 401)
            }

            // comparar senha
            const passwordMatch = await compare(password, findUserExists.password as string)

            if(!passwordMatch){
                throw new AppError('Usuário ou senha incorretos', 401)
            }
        
            console.log(findUserExists)
            // Criar access token
            const accessToken = jwt.sign({role: findUserExists.role, shoppingCartId:findUserExists.shoppingCart.id}, env.JWT_SECRET_ACCESS_TOKEN, {
                subject: findUserExists.id,
                expiresIn: env.JWT_EXPIRES_IN_ACCESS_TOKEN
            }) 
            console.log('aqui')
            // Criar refresh token
            const refreshToken = jwt.sign({subject:findUserExists.id, email}, env.JWT_SECRET_REFRESH_TOKEN, {
                subject: findUserExists.id,
                expiresIn: env.JWT_EXPIRES_IN_REFRESH_TOKEN
            })
            console.log('aqui')
            // criar data de expiração do refresh token
            const expireDateRefreshToken = this.dayjsDateProvider.addDays(10)

            if(findUserExists.emailActive){
                await this.usersTokensRepository.deleteByUser(findUserExists.id)
            }
            console.log('aqui')
            // Salvar refresh token no banco
            await this.usersTokensRepository.create({
                userId: findUserExists.id,
                expireDate: expireDateRefreshToken,
                token: refreshToken,
            })

            const getSafeUser = await this.usersRepository.getUserSecurity(findUserExists.id) as User

            return {
                user: getSafeUser,
                accessToken,
                refreshToken,
            }
    }
}