export interface AsaasPaymentWallet {
  walletId: string // Identificador da carteira Asaas que será transferido o valor da cobrança
  fixedValue?: number | null // Valor fixo a ser transferido para a conta quando a cobrança for recebida
  percentualValue?: number | null // Percentual sobre o valor líquido da cobrança a ser transferido quando for recebida
  totalFixedValue?: number | null // (Somente parcelamentos). Valor que será feito split referente ao valor total que será parcelado.
}
export interface IChargeData {
  id?: string
  customer: string
  billingType: string
  value: number
  dueDate: string
  installmentCount?: number | null
  installmentValue?: number | null
  installment?: string
  description?: string
  // externalReference: string
  creditCardToken?: string
  split?:AsaasPaymentWallet []
  creditCard?: {
    holderName?: string
    number?: string
    expiryMonth?: string
    expiryYear?: string
    ccv: string
  }
  creditCardHolderInfo?: {
    name: string
    email: string
    cpfCnpj: string
    postalCode: string
    addressNumber: string
    addressComplement: string
    phone: string
  }
  discount?: {
    value: number
    dueDateLimitDays: number
    type: string
  }
  fine?: {
    value: number
    type: string
  }
  interest?: {
    value: number
    type: string
  }
  remoteIp: string
}

export interface ICustomerData {
  id?: string
  name: string
  email: string
  cpfCnpj: string
  phone?: string
}

export interface IRefundPayment{
  idPayment: string, 
  value: number, 
  description: string
}

export interface IBankAccount{
  bankName: string
  agency: string
  account: string
  accountType: string
  accountDigit: string
}

export interface IAsaasProvider {
  createPayment(data: IChargeData): Promise<any | undefined>
  createCustomer(data: ICustomerData): Promise<ICustomerData | undefined>
  findUniqueInstallments(idInstallment: string): Promise<any | null>
  refundPayment(data: IRefundPayment): Promise<any | undefined>
}
