import { IAsaasPayment } from '@/dtos/asaas-payment.dto';
import { IAsaasProvider } from '../../../../../providers/PaymentProvider/interface-asaas-payment';
import { IShoppingCartRelationsDTO } from "@/dtos/shopping-cart-relations.dto";
import { IDateProvider } from "@/providers/DateProvider/interface-date-provider";
import { ICartItemRepository } from "@/repositories/interfaces/interface-cart-item-repository";
import { IOrderRepository } from "@/repositories/interfaces/interface-order-repository";
import { IProductsRepository } from "@/repositories/interfaces/interface-products-repository";
import { IShoppingCartRepository } from "@/repositories/interfaces/interface-shopping-cart-repository";
import { IUsersRepository } from "@/repositories/interfaces/interface-users-repository";
import { AppError } from "@/usecases/errors/app-error";
import { Item, Order, PaymentMethod } from "@prisma/client";
import { IMailProvider } from '@/providers/MailProvider/interface-mail-provider';
import { IOrderRelationsDTO } from '@/dtos/order-relations.dto';
import { IUserRelations } from '@/dtos/user-relations.dto';

export interface IRequestCreateOrderWithCreditCard {
    userId: string
    remoteIp: string
    installmentCount?: number | null
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
}

export class CreateOrderWithCreditCardUsecase {
    constructor(
        private orderRepository: IOrderRepository,
        private userRepository: IUsersRepository,
        private shoppingCartRepository: IShoppingCartRepository,
        private cartItemRepository: ICartItemRepository,
        private productsRepository: IProductsRepository,
        private dateProvider: IDateProvider,
        private asaasProvider: IAsaasProvider,
        private mailProvider: IMailProvider
    ) {}

    async execute({
        userId,
        remoteIp,
        creditCard,
        creditCardHolderInfo,
        installmentCount
    }: IRequestCreateOrderWithCreditCard): Promise<IOrderRelationsDTO> {
        // buscar usuario pelo id
        const findUserExist = await this.userRepository.findById(userId) as unknown as IUserRelations

        // validar ser o usuario existe
        if(!findUserExist) {
            throw new AppError("Usuário não encontrado", 404)
        }

        // buscar carrinho pelo id 
        const findShoppingCartExist = await this.shoppingCartRepository.findById(findUserExist.shoppingCart.id) as unknown as IShoppingCartRelationsDTO

        // validar se o carrinho existe
        if(!findShoppingCartExist) {
            throw new AppError("Carrinho não encontrado", 404)
        }

        // calcular total do carrinho
        let total = findShoppingCartExist.cartItem.reduce((acc, cartItem) => {
            return acc + Number(cartItem.price) * Number(cartItem.quantity);
        }, 0);

        if(findShoppingCartExist.cartItem.length === 0) {
            throw new AppError("Carrinho vazio", 400)
        }

        // verificar a quantidade dos produtos no estoque
        for(let item of findShoppingCartExist.cartItem) {
            const product = await this.productsRepository.findById(item.productId)

            if(product){
                if(product.quantity < item.quantity) {
                    throw new AppError("Estoque insuficiente", 400)
                }
            }
        }

        // calcular cupom de desconto

        // criar pagamento na asaas
        let newCustomer = ''
        const newDate = this.dateProvider.addDays(0)
        // validar se o cliente existe no asaas se não existir criar
        if (!findUserExist.asaasCustomerId) {
            // atualizar user com o id do cliente no asaas
            const createCustomer = await this.asaasProvider.createCustomer({
                name: findUserExist.name,
                cpfCnpj: findUserExist.cpf as string,
                email: findUserExist.email,
                phone: findUserExist.phone?.replace('(+)', '').replace(' ', '') as string,
            })

            if (!createCustomer) {
                throw new AppError('Error create customer for Asaas', 400)
            }

            const customer = await this.userRepository.updateAsaasCostumerId(
                findUserExist.id,
                createCustomer.id as string,
            )
            newCustomer = String(customer.asaasCustomerId)
        }

        // verificar se o usuario tem um idCostumerPayment se não tiver retorna o new customer criado anteriormente
        const idCostumerPayment = findUserExist.asaasCustomerId
        ? findUserExist.asaasCustomerId
        : String(newCustomer)

        // criar cobrança do tipo pix no asaas
        const paymentAsaas = await this.asaasProvider.createPayment({
            customer: idCostumerPayment,
            billingType: PaymentMethod.CREDIT_CARD,
            dueDate: newDate,
            installmentCount,
            installmentValue: total,
            creditCard,
            creditCardHolderInfo,
            value: total,
            description: 'Payment of order',
            remoteIp: String(remoteIp),
        }) as IAsaasPayment
        
        if (!paymentAsaas) {
            throw new AppError('Error create payment Asaas', 400)
        }

        // criar codigo do pedido
        const countOrder = await this.orderRepository.countOrders()
        const code = `#${countOrder + 1}-${findUserExist.name.toUpperCase()}`
            
        // criar pedido passando lista de itens para criar juntos
        const order = await this.orderRepository.create({
            userId,
            code,
            shoppingCartId: findShoppingCartExist.id,
            total,
            items: {
                createMany: {
                    data: findShoppingCartExist.cartItem.map(item => {
                        return {
                            productId: item.productId,
                            quantity: item.quantity,
                            name: item.name,
                            price: Number(item.price)
                        } as unknown as Item;
                    })
                }
            },
            orderDate: new Date(),
            payment: {
                create: {
                    asaasId: paymentAsaas.id,
                    userId,
                    paymentMethod: "CREDIT_CARD",
                    invoiceUrl: paymentAsaas.invoiceUrl,
                    value: total,
                }
            }
        }) as unknown as IOrderRelationsDTO

        // esvaziar o carrinho
        await this.cartItemRepository.deleteAllByShoppingCartId(findShoppingCartExist.id)

        // limpar total
        await this.shoppingCartRepository.updateTotal(findShoppingCartExist.id, 0)

        // criar variavel com caminho do template de email
        const templatePathApproved = './views/emails/confirmation-payment.hbs'

        // disparar envio de email de pagamento recebido do usuário com nota fiscal(invoice)
        await this.mailProvider.sendEmail(
        findUserExist.email,
        findUserExist.name,
        'Confirmação de Pagamento',
        paymentAsaas.invoiceUrl,
        templatePathApproved,
        {   
            order,
        },
        )

        // decrementar quantidade no estoque
        for(let item of findShoppingCartExist.cartItem) {
            await this.productsRepository.updateQuantity(item.productId, item.quantity)

            // buscar produto pelo id
            const product = await this.productsRepository.findById(item.productId)

            if(product && product.quantity === 0) {
                // desativar produto
                await this.productsRepository.updateStatus(product.id, false)
            }
        }

        // retornar pedido criado
        return order
    }
}