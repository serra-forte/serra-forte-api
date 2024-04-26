import 'dotenv/config'
import { ITokensRepository } from "@/repositories/interface-tokens-repository";

export class DeleteAllTokensUseCase{
    constructor(
        private usersTokensRepository: ITokensRepository,
    ) {}

    async execute():Promise<void>{
        // Delete all tokens
        await this.usersTokensRepository.deleteAll()
    }
}