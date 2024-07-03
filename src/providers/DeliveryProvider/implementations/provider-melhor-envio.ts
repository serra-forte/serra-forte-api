import { env } from '@/env';
import axios from 'axios';
import { IMelhorEnvioProvider, IRequestCalculateShipping, IResponseAuth, IResponseCalculateShipping } from './../interface-melhor-envio-provider';
export class MelhorEnvioProvider implements IMelhorEnvioProvider {
    async authorize(): Promise<IResponseAuth> {
        try {
            const response = await axios.post(`https://sandbox.melhorenvio.com.br/oauth/authorize`,
                {
                  client_id: '4733',
                  scope: 'cart-read cart-write companies-read companies-write coupons-read coupons-write notifications-read orders-read products-read products-write purchases-read shipping-calculate shipping-cancel shipping-checkout shipping-companies shipping-generate shipping-preview shipping-print shipping-share shipping-tracking ecommerce-shipping transactions-read users-read users-write',
                  state: 'teste',
                  redirect_uri: 'https://serraforte.up.railway.app',  // Definido ao criar o app
                  response_type: 'code',
                });

                console.log(response.data)
        
            if (response.status === 200) {
              return response.data.access_token;
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