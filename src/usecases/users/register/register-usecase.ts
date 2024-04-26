import { env } from "@/env";
import { IUsersRepository } from "@/repositories/interface-users-repository";
import { hash } from 'bcrypt'
import 'dotenv/config'
import { randomUUID } from "crypto";
import { IDateProvider } from "@/providers/DateProvider/interface-date-provider";
import { ITokensRepository } from "@/repositories/interface-tokens-repository";
import { IMailProvider } from "@/providers/MailProvider/interface-mail-provider";
import { User } from "@prisma/client";
import { AppError } from "@/usecases/errors/app-error";

interface IRequestRegisterAccount {
    email: string,
    name: string,
    password: string,
    phone?: string | null,
    cpf?: string | null,
}
export interface IResponseRegisterAccount {
    user: User
}

export class RegisterUseCase{
    constructor(
        private usersRepository: IUsersRepository,
        private dayjsDateProvider: IDateProvider,
        private usersTokensRepository: ITokensRepository,
        private sendMailProvider: IMailProvider,
    ) {}

    async execute({
        email,
        name,
        password,
        phone,
        cpf,
    }:IRequestRegisterAccount):Promise<IResponseRegisterAccount>{
        const findEmailAlreadyExists = await this.usersRepository.findByEmail(email)

        if(findEmailAlreadyExists){
            throw new AppError('Email já cadastrado', 409)
        }

        if(cpf){
            const findCPFAlreadyExist = await this.usersRepository.findByCPF(cpf)

            if(findCPFAlreadyExist){
                throw new AppError('CPF already exists!', 409)
            }
        }
        const criptingPassword = await hash(password, 8)
       
        const user = await this.usersRepository.create({
            email,
            name,
            password: criptingPassword,
            phone,
            cpf,
        })

         // pegar template de verificaçao de email
         let pathTemplate = env.NODE_ENV === "development" ? 
         './views/emails/verify-email.hbs':
         './build/views/emails/verify-email.hbs' 
        
        // gerar token valido por 3h
        const token = randomUUID()
        // gerar data em horas
        const expireDateHours = this.dayjsDateProvider.addHours(3)

        // salvar token no banco
       await this.usersTokensRepository.create({
            idUser: user.id,
            expireDate: expireDateHours,
            token
        })
        // formatar link com token
        const link =
        env.NODE_ENV === 'development'
        ? `${env.APP_URL_FRONTEND_DEVELOPMENT}/verification/${token}/${email}`
        : `${env.APP_URL_FRONTEND_PRODUCTION}/verification/${token}/${email}`

        // enviar verificação de email
        await this.sendMailProvider.sendEmail(
            email, 
            name,
            "Confirmação de email", 
            link, 
            pathTemplate,
            null
        )

        return {
            user
        }
    }
}