import { env } from '@/env';
import axios, { AxiosError } from 'axios';
import { IMelhorEnvioProvider, IRequestCalculateShipping, IResponseAuth, IResponseCalculateShipping } from './../interface-melhor-envio-provider';
import { IRailwayProvider, Variables } from '@/providers/RailwayProvider/interface-railway-provider';

export class MelhorEnvioProvider implements IMelhorEnvioProvider {
  isNewToken: boolean = false;

  constructor(private railwayProvider: IRailwayProvider) {}

  async refreshToken(): Promise<IResponseAuth> {
    try {
      const response = await axios.post(`${env.MELHOR_ENVIO_API_URL}/oauth/token`, {
        grant_type: 'refresh_token',
        client_id: env.MELHOR_ENVIO_CLIENT_ID,
        client_secret: env.MELHOR_ENVIO_CLIENT_SECRET,
        refresh_token: env.MELHOR_ENVIO_REFRESH_TOKEN,
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
      // console.error('Error fetching auth token:', error);
      throw error;
    }
  }

  async shipmentCalculate(data: IRequestCalculateShipping, access_token?: string | null): Promise<IResponseCalculateShipping[] | any> {
    try {
      console.log(this.isNewToken)
      let validToken = env.MELHOR_ENVIO_ACCESS_TOKEN
      if(this.isNewToken){
        this.isNewToken = false;

        validToken = access_token as string
      } 
      console.log(this.isNewToken)
      console.log(validToken)

      const response = await axios.post(`${env.MELHOR_ENVIO_API_URL}/api/v2/me/shipment/calculate`, data, {
        headers: {
          'Authorization': `Bearer ${validToken}`,
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
      if (error instanceof AxiosError && error.response?.status === 401) {
        console.log('Token expirado, renovando...');
        // Tenta renovar o token
        try {
          const response = await this.refreshToken();
          console.log('Token renovado com sucesso');
          
          if(response.access_token) {
            this.isNewToken = true;
            // Após renovar o token, tenta novamente calcular o frete
            console.log(this.isNewToken)
            return await this.shipmentCalculate(data, response.access_token);
          }
        } catch (refreshError) {
          console.error('Erro ao renovar o token:', refreshError);
          // throw refreshError;
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
              redirect_uri: env.MELHOR_REDIRECT_URI,  // Definido ao criar o app.
              client_secret: env.MELHOR_ENVIO_CLIENT_SECRET,
            });
  
        if (response.status === 200) {
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
}


