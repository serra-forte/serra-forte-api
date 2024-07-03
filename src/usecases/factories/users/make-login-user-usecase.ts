import { DayjsDateProvider } from "@/providers/DateProvider/implementations/provider-dayjs";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { PrismaTokensRepository } from "@/repositories/prisma/prisma-tokens-repository";
import { LoginUseCase } from "@/usecases/users/login/login-usecase";
import { MelhorEnvioProvider } from "@/providers/DeliveryProvider/implementations/provider-melhor-envio";

export async function makeLoginUser(): Promise<LoginUseCase> {
    const usersRepository = new PrismaUsersRepository();
    const usersTokensRepository = new PrismaTokensRepository();
    const dayjsDateProvider = new DayjsDateProvider();
    const melhorEnvioProvider = new MelhorEnvioProvider()

    const loginUseCase = new LoginUseCase(
        usersRepository,
        usersTokensRepository,
        dayjsDateProvider,
        melhorEnvioProvider
    )

    return loginUseCase
}