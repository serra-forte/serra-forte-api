import { env } from '@/env';
import axios, { AxiosError } from 'axios';
import { IMelhorEnvioProvider, IRequestCalculateShipping, IResponseAuth, IResponseCalculateShipping } from './../interface-melhor-envio-provider';
import { IRailwayProvider } from '@/providers/RailwayProvider/interface-railway-provider';

export class MelhorEnvioProvider implements IMelhorEnvioProvider {
  constructor(private railwayProvider: IRailwayProvider) {}

  async refreshToken(): Promise<IResponseAuth> {
    try {
      const response = await axios.post(`${env.MELHOR_ENVIO_API_URL}/oauth/token`, {
        grant_type: 'refresh_token',
        refresh_token: env.MELHOR_ENVIO_REFRESH_TOKEN,
        client_id: env.MELHOR_ENVIO_CLIENT_ID,
        client_secret: env.MELHOR_ENVIO_CLIENT_SECRET,
      });

      if (response.status === 200) {
        // Atualizar o refresh token e o access token no Railway
        await this.railwayProvider.variablesUpsert([
          { name: 'MELHOR_ENVIO_REFRESH_TOKEN', value: response.data.refresh_token },
          { name: 'MELHOR_ENVIO_ACCESS_TOKEN', value: response.data.access_token }
        ]);
        return response.data;
      } else {
        throw new Error('Failed to get access token');
      }
    } catch (error) {
      console.error('Error fetching auth token:', error);
      throw error;
    }
  }

  async shipmentCalculate(data: IRequestCalculateShipping): Promise<IResponseCalculateShipping[]> {
    try {
      console.log('aqui 1');
      const response = await axios.post(`${env.MELHOR_ENVIO_API_URL}/api/v2/me/shipment/calculate`, data, {
        headers: {
          'Authorization': `Bearer ${env.MELHOR_ENVIO_ACCESS_TOKEN}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'Serra Forte/kaiomoreira.dev@gmail.com',
        }
      });

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Failed to calculate shipment');
      }
    } catch (error) {
      console.log('aqui 3');

      if (error instanceof AxiosError && error.response?.status === 401) {
        console.log('Token expirado, renovando...');

        // Tenta renovar o token
        try {
          await this.refreshToken();
          console.log('Token renovado com sucesso');
          
          // Após renovar o token, tenta novamente calcular o frete
          return await this.shipmentCalculate(data);
        } catch (refreshError) {
          console.error('Erro ao renovar o token:', refreshError);
          throw refreshError;
        }
      }

      throw error;
    }
  }

  async authorization(code: string): Promise<IResponseAuth> {
    try {
        const response = await axios.post(`${env.MELHOR_ENVIO_API_URL}/oauth/token`,
            {
              grant_type: 'authorization_code',
              state: 'serra-forte',
              code,
              client_id: env.MELHOR_ENVIO_CLIENT_ID,
              redirect_uri: env.MELHOR_REDIRECT_URI,  // Definido ao criar o app
              client_secret: env.MELHOR_ENVIO_CLIENT_SECRET,
            });
  
  
    
          console.log('acessado')
        if (response.status === 200) {
          console.log(response.data)
          return response.data;
        } else {
          throw new Error('Failed to get access token');
        }
      } catch (error) {
        console.error('Error fetching auth token:', error);
        throw error;
      }
  }
}


