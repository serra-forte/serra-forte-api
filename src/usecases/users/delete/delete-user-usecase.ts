import { IUsersRepository } from "@/repositories/interface-users-repository";
import { AppError } from "@/usecases/errors/app-error";
import { compare } from "bcrypt";
import 'dotenv/config'

interface IRequestDeleteUser {
   id: string,
   password: string
}

export class DeleteUserUseCase{
    constructor(
        private usersRepository: IUsersRepository,
    ) {}

    async execute({
        id,
        password
    }:IRequestDeleteUser):Promise<void>{
        // encontrar usuario pelo id
        const findUserExist = await this.usersRepository.findById(id)
        // validar se usuario existe
        if(!findUserExist){
            throw new AppError('User not found', 404)
        }

        // comparar senha
        const passwordMatch = await compare(password, findUserExist.password as string)

        if(!passwordMatch){
            throw new AppError('Password not match', 401)
        }
    

        // delete user
        await this.usersRepository.delete(findUserExist.id)
    }
}