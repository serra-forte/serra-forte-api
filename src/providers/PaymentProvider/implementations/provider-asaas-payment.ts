import axios from 'axios'
import {
  IAsaasProvider,
  IChargeData,
  ICustomerData,
  IRefundPayment,
} from '../interface-asaas-payment'
import 'dotenv/config'

// interface ResponseRefundPayment {
//   status: number
//   data: any
//   error: {
//     code: number
//     message: string
//   }
// }

export class AsaasProvider implements IAsaasProvider {
  async refundPayment({
    idPayment,
    value,
    description,
  }: IRefundPayment): Promise<any> {
    try {
      const responseRefundPayment = await axios
        .post(`${process.env.ASAAS_API_URL}/payments/${idPayment}/refund`,
          {
            value,
            description,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              access_token: `${process.env.ASAAS_API_KEY}`,
            },
          },
        )
        .then((response) => {
          return response.data
        })
      return responseRefundPayment
    } catch (error) {
      console.log(error)
      return undefined
    }
  }

  async findUniqueInstallments(idInstallment: string) {
    try {
      const responseFindInstallments = await axios
        .get(`${process.env.ASAAS_API_URL}/installments/${idInstallment}`, {
          headers: {
            'Content-Type': 'application/json',
            access_token: `${process.env.ASAAS_API_KEY}`,
          },
        })
        .then((response) => {
          return response.data
        })

      return responseFindInstallments
    } catch (error) {
      console.log('Error find Unique Installments in ASAAS', error)

      return undefined
    }
  }

  async createPayment(data: IChargeData) {
    try {
      const responseCreatePayment = await axios
        .post(`${process.env.ASAAS_API_URL}/payments`, data, {
          headers: {
            'Content-Type': 'application/json',
            access_token: `${process.env.ASAAS_API_KEY}`,
          },
        })
        .then((response) => {
          return response.data
        })
      return responseCreatePayment
    } catch (error) {
      console.log(error)
      return undefined
    }
  }

  async createCustomer(data: ICustomerData) {
    try {
      const responseCreateCustomer = await axios
        .post(`${process.env.ASAAS_API_URL}/customers`, data, {
          headers: {
            'Content-Type': 'application/json',
            access_token: `${process.env.ASAAS_API_KEY}`,
          },
        })
        .then((response) => {
          return response.data
        })
      return responseCreateCustomer
    } catch (error) {
      console.log(error)

      return undefined
    }
  }
}
