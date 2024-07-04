import { AppError } from "@/usecases/errors/app-error";
import { Role } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

export interface IPayload {
    sub: string;
    role: Role;
}

export async function verifyTokenMelhorEnvio(
    request: FastifyRequest,
    response: FastifyReply,
) {
    // destruturar do headers o toke
    const access_token = request.headers.authorization;
    const refresh_token = request.headers['refresh-token']

    // validar no if pra ve se existe
    if (!access_token) {
        throw new AppError("Token não recebido", 400);
    }

    if (!refresh_token) {
        throw new AppError("Token não recebido", 400);
    }
    // destruturar o token de dentro do authHeader
    const [, token] = access_token.split(" ");
    const [refreshToken] = String(refresh_token).split(" ")
    // verificar no verify o token
    // retirar de dentro do verify o id do user que esta no token
    try {
        // depois pesquisar em um método findbyid que vamos criar
        // adicionar userId no request 
        request.melhorEnvio = {
            accessToken: token,
            refreshToken
        }
        
    } catch(error) {
        throw new AppError("Token inexistente", 401);
    }
}
