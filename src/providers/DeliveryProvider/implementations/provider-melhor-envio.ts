import { env } from '@/env';
import axios from 'axios';
import { IMelhorEnvioProvider, IRequestCalculateShipping, IResponseAuth, IResponseCalculateShipping } from './../interface-melhor-envio-provider';
export class MelhorEnvioProvider implements IMelhorEnvioProvider {
    async authorize(): Promise<IResponseAuth> {
        try {
            const response = await axios.post(`https://sandbox.melhorenvio.com.br/oauth/token`,
                {
                  grant_type: 'authorization_code',
                  client_id: '4735',
                  scope: 'cart-read cart-write companies-read companies-write coupons-read coupons-write notifications-read orders-read products-read products-write purchases-read shipping-calculate shipping-cancel shipping-checkout shipping-companies shipping-generate shipping-preview shipping-print shipping-share shipping-tracking ecommerce-shipping transactions-read users-read users-write',
                  state: 'serraforte',
                  redirect_uri: 'https://serraforte.up.railway.app',  // Definido ao criar o app
                  response_type: 'code',
                  client_secret: env.MELHOR_ENVIO_CLIENT_SECRET,
                  code: 'def502008048caa2a55cc14ca07207a4f263e8b2d70e37908ae33c75f12acdcfd57b88fad533073c818609a17cd738ae03fa71ed1351b18134a26ee5ec3be735591d8d1e14a68a6095a2d868f494831654b69dd99c26a0887fef8a5b1c20c8df4b1ffaabf32c4c1b264c47f7dcd4a1832f93f4194046ba1f66d79db1b5214b0fe028e1cfb81b02117db309638a5f1d9c4af12daadda7d6abf8b42dff711570d8fc7757687423bb6b199614034807d3ead31f09031d79d25cfd5ee460cf470f0630db4ef97ac6bca543e61c3600e06466939f9f4ccecb7a0d9902f0dcf514f90e491155d111efada3d9360139a43e1e0366893a4bf3fe41d5f9701f706d5df586f8a2ab304ea69f62b41bc703c4a2912c36cce53e452e12aba704252b4fe3e718c092cb12109ae85310d4ef82251b1a381a5f081fc358f7232b349868d30ea03f92219efcd9954a9942bc8091349e30a795760269c5c306600b8159dd13fc3bc49d313577746da9f02661d15951aa4cb2f51d440f8d05b1347d3547a79a33a9f988af462e23cd55a302c79dc09f228318534a4f47f9cb84fa2e4d90510128a8456e9b576affa7a22732d1881d33da3a588de36914ab11cdd8688f5be7e38ffca5e9275fb56abbd2b408651e4ac07a80f005c629979d55a1d195d0b8e36b41cd95e60ec650e050a7d0f7f353a272ea60eb666411b9e9144aa73582c06d3cc9ba3f04c1e5b8908f9d39db845054558e5dfa50d680aa8a586080875f0fd0a3bb0729879ddd0deef0d7e9283fe917dbf9040ec636b7ac5a5b199ea98da18c79a96cb027ddf69b910186fdc37f37a0e76324675c7217d5cf4afdca81623a93547d7b4206d74af1997ebb20b1fc683d06403f222d0412631094ba7923e6baa376fcea90ae96f3f50bc8a5f3a7247c4f931e2ac54c5931bab1fb5c6b7e1b98b9766d4e20dd49a756bd90823e9f860891000ae8926cd7df9cc9c90bb6b350752f7f05deb7a4239d03d383f81f5583df99e62d46350fb685494bf20efce80c41b0c8efa4129cbda3a3bcd92dc8785a12f7a4de95ee13f38501446a35be92ddf604d122db39aaf917f663da5a6eaa93f46c5fc412b49425e9714edca9dc0d7296a6bb6ea6fca8b7f16a6f0f9e76'
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