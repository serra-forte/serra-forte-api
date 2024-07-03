import { env } from '@/env';
import axios from 'axios';
import { IMelhorEnvioProvider, IRequestCalculateShipping, IResponseAuth, IResponseCalculateShipping } from './../interface-melhor-envio-provider';
export class MelhorEnvioProvider implements IMelhorEnvioProvider {
    async authenticate(code: string): Promise<IResponseAuth> {
        try {
            const response = await axios.post(`https://sandbox.melhorenvio.com.br/oauth/token`,
                {
                  grant_type: 'authorization_code',
                  state: 'serra-forte',
                  code,
                  client_id: env.MELHOR_ENVIO_CLIENT_ID,
                  redirect_uri: env.MELHOR_REDIRECT_URI,  // Definido ao criar o app
                  client_secret: env.MELHOR_ENVIO_CLIENT_SECRET,
                });
        
            if (response.status === 200) {
              return response.data;
            } else {
              throw new Error('Failed to get access token');
            }
          } catch (error) {
            console.error('Error fetching auth token:', error);
            throw error;
          }
    }
    calculateDelivery(data: IRequestCalculateShipping): Promise<IResponseCalculateShipping> {
        throw new Error('Method not implemented.');
    }
}