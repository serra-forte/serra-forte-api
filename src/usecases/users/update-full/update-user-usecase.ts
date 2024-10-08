import 'dotenv/config'
import { AppError } from "@/usecases/errors/app-error";
import { Address, User } from "@prisma/client";
import { IUsersRepository } from '@/repositories/interfaces/interface-users-repository';

interface IRequestUpdateUser {
    id: string,
    name: string,
    email: string,
    phone?: string | null,
    dateBirth?: Date | null,
    cpf?: string | null,
    address: {
        street: string,
        num: number,
        neighborhood: string,
        city: string,
        state: string,
        country: string,
        zipCode: number,
        complement?: string | null,
        reference?: string | null,
    }
}
interface IResponseUpdateUser {
    user: User
}

export class UpdateUserUseCase{
    constructor(
        private usersRepository: IUsersRepository,
    ) {}

    async execute({
        id,
        name,
        email,
        phone,
        dateBirth,
        cpf,
        address
    }:IRequestUpdateUser):Promise<IResponseUpdateUser>{
        const findUserExists = await this.usersRepository.getUserSecurity(id)
        if(!findUserExists){
            throw new AppError('Usuário não encontrado', 404)
        }

        let emailActive = findUserExists.emailActive;

        // buscar usuario pelo email
        const findUserByEmail = await this.usersRepository.findByEmail(email)

        if(findUserByEmail){
            // verificar email ja existe e se é o mesmo usuario
            if(findUserByEmail.id !== findUserExists.id){
                throw new AppError('Email já cadastrado', 409)
            }

            if(email !== findUserExists.email){
                // chamar metodo para alterar email active para false
                // pois o email foi alterado e precisa ser validado novamente
                emailActive = false;
            }
        }
        
        if(cpf){
            const findUserByCPF = await this.usersRepository.findByCPF(cpf)
        //[x] verificar se cpf ja existe
            if(findUserByCPF){
                if(findUserExists.id !== findUserByCPF.id){
                    throw new AppError('CPF já cadastrado', 409)
                }
            }

        }


        if(phone){
            const findUserByPhone = await this.usersRepository.findByPhone(phone)
            //[x] verificar se passport ja existe
            if(findUserByPhone){
                if(findUserExists.id !== findUserByPhone.id){
                    throw new AppError('Phone já cadastrado', 409)
                }
            }
        }

    //    await this.usersRepository.updateIdCostumerPayment(findUserExists.id, null)

       const userUpdated = await this.usersRepository.update({
            id,
            name,
            email,
            phone,
            dateBirth,
            cpf,
            emailActive,
            address: {
                upsert:{
                    create: address,
                    update: address
                }
            }
        })
        
        return {
            user: userUpdated
        }
    }
}