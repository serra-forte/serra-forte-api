import { env } from "@/env";
import { IDateProvider } from "@/providers/DateProvider/interface-date-provider";
import { ITokensRepository } from "@/repositories/interface-tokens-repository";
import { IUsersRepository } from "@/repositories/interface-users-repository";
import { AppError } from "@/usecases/errors/app-error";
import { User } from "@prisma/client";
import { compare } from "bcrypt";
import 'dotenv/config'
import jwt from 'jsonwebtoken'

interface IRequestLoginAccount {
    email?: string | null
    password?: string | null
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
        token
    }:IRequestLoginAccount):Promise<IResponseLoginAccount>{
        if(email && password){
            const findUserExists = await this.usersRepository.findByEmail(email)
        
            if(!findUserExists){
                throw new AppError('Usuário ou senha incorretos', 401)
            }

            // comparar senha
            const passwordMatch = await compare(password, findUserExists.password as string)

            if(!passwordMatch){
                throw new AppError('Usuário ou senha incorretos', 401)
            }
        
            // Criar access token
            const accessToken = jwt.sign({}, env.JWT_SECRET_ACCESS_TOKEN, {
                subject: findUserExists.id,
                expiresIn: env.JWT_EXPIRES_IN_ACCESS_TOKEN
            }) 
        
            // Criar refresh token
            const refreshToken = jwt.sign({subject:findUserExists.id, email}, env.JWT_SECRET_REFRESH_TOKEN, {
                subject: findUserExists.id,
                expiresIn: env.JWT_EXPIRES_IN_REFRESH_TOKEN
            })

            // criar data de expiração do refresh token
            const expireDateRefreshToken = this.dayjsDateProvider.addDays(10)

            if(findUserExists.emailActive){
                await this.usersTokensRepository.deleteByUser(findUserExists.id)
            }

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

        if(!email && !password && token){
            const userToken = await this.usersTokensRepository.findByToken(token) as unknown as ITokenOnUser

            if(!userToken){
                throw new AppError('Token não encontrado', 404)
            }

            // Criar access token
            const accessToken = jwt.sign({}, env.JWT_SECRET_ACCESS_TOKEN, {
                subject: userToken.user.id,
                expiresIn: env.JWT_EXPIRES_IN_ACCESS_TOKEN
            }) 
        
            // Criar refresh token
            const refreshToken = jwt.sign({subject:userToken.user.id, email}, env.JWT_SECRET_REFRESH_TOKEN, {
                subject: userToken.user.id,
                expiresIn: env.JWT_EXPIRES_IN_REFRESH_TOKEN
            })

            // criar data de expiração do refresh token
            const expireDateRefreshToken = this.dayjsDateProvider.addDays(10)

            // Salvar refresh token no banco
            await this.usersTokensRepository.create({
                userId: userToken.user.id,
                expireDate: expireDateRefreshToken,
                token: refreshToken,
            })

            const getSafeUser = await this.usersRepository.getUserSecurity(userToken.user.id) as User

            return {
                user: getSafeUser,
                accessToken,
                refreshToken,
            }
        }

        throw new AppError('Not found account', 404)
    }
}