import { env } from '@/env'
import 'dotenv/config'
import { createClient } from 'redis'

export const redisClient =
  env.NODE_ENV === 'development'
    ? createClient()
    : createClient({ url: env.REDIS })

const connectToRedis = () => {
  const client = redisClient

  client.connect()
  // Usando o comando SET para definir um valor com a chave especificada
  client.SET('67946caa-89eb-402a-ad8e-70987ab911c4', '157892');

  // Usando o comando SETEX para definir um valor com um tempo de vida de 7 dias (604800 segundos)
  client.SETEX('395d2a4e-f5e7-4ebd-a263-8d0b838ac584', 604800, '123589');

  // Adiciona manipuladores de eventos para reconexão
  client.on('connect', async () => {
    console.log('Connected to Redis')
  })

  client.on('error', async (err) => {
    console.error('Error connecting to Redis:', err)

    // Adiciona lógica de reconexão aqui
    setTimeout(() => {
      console.log('Attempting to reconnect to Redis...')
      connectToRedis() // Chama a função novamente para tentar reconectar
    }, 3000)
  })

  return client
}

connectToRedis()
