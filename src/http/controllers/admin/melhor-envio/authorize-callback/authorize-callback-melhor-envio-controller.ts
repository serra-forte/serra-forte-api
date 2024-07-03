import { FastifyReply, FastifyRequest } from "fastify";

export async function AuthorizeCallbackMelhorEnvio(request: FastifyRequest, reply: FastifyReply) {
  try {
    console.log(request.body)
    return reply.status(200).send('OK')
  } catch (error) {
    throw error
  }
}
    