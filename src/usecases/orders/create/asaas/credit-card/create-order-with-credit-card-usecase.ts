import { IAsaasPayment } from '@/dtos/asaas-payment.dto';
import { AsaasPaymentWallet, IAsaasProvider } from '../../../../../providers/PaymentProvider/interface-asaas-payment';
import { IShoppingCartRelationsDTO } from "@/dtos/shopping-cart-relations.dto";
import { IDateProvider } from "@/providers/DateProvider/interface-date-provider";
import { ICartItemRepository } from "@/repositories/interfaces/interface-cart-item-repository";
import { IOrderRepository } from "@/repositories/interfaces/interface-order-repository";
import { IProductsRepository } from "@/repositories/interfaces/interface-products-repository";
import { IShoppingCartRepository } from "@/repositories/interfaces/interface-shopping-cart-repository";
import { IUsersRepository } from "@/repositories/interfaces/interface-users-repository";
import { AppError } from "@/usecases/errors/app-error";
import { Address, Item, Order, PaymentMethod } from "@prisma/client";
import { IMailProvider } from '@/providers/MailProvider/interface-mail-provider';
import { IOrderRelationsDTO } from '@/dtos/order-relations.dto';
import { IUserRelations } from '@/dtos/user-relations.dto';
import { IProductRelationsDTO } from '@/dtos/product-relations.dto';

export interface IRequestCreateOrderWithCreditCard {
    userId: string
    remoteIp: string
    installmentCount?: number | null,
    address: {
        street: string
        num: number
        neighborhood: string
        city: string
        state: string
        country: string
        zipCode: number
        complement?: string | null
        reference?: string | null
    }
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
        installmentCount,
        address
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

        // verificar se o endereco existe
        if(!address) {
            throw new AppError("Endereço não informado", 404)
        }

        // calcular total do carrinho
        let total = findShoppingCartExist.cartItem.reduce((acc, cartItem) => {
            return acc + Number(cartItem.price) * Number(cartItem.quantity);
        }, 0);

        if(findShoppingCartExist.cartItem.length === 0) {
            throw new AppError("Carrinho vazio", 400)
        }

        let objItemsShopKeeper: any = {};

        // Array para calcular o total de cada lojista
        let arrayPaymentWalletToShopKeeper: AsaasPaymentWallet[] = [];


        // verificar a quantidade dos produtos no estoque
        for(let item of findShoppingCartExist.cartItem) {
           const product = await this.productsRepository.findById(item.productId) as unknown as IProductRelationsDTO

            if (product) {
                if (product.quantity < item.quantity) {
                    throw new AppError("Estoque insuficiente", 400);
                }

                // Separar items por lojista
                const shopKeeperId = item.userId;
                if (!objItemsShopKeeper[shopKeeperId]) {
                    // Inicializa um array para este lojista se ainda não existe
                    objItemsShopKeeper[shopKeeperId] = [];
                }
                // Adiciona o item ao array correspondente ao lojista
                objItemsShopKeeper[shopKeeperId].push(item);
            }
        }

        // Converte o objeto em um array de arrays
        let arrayItemsShopKeeperArray: Item[][] = Object.values(objItemsShopKeeper);

         // For para calcular o total de cada lojista
         for(let arrayShopKeeper of arrayItemsShopKeeperArray) {
             // calcular total
             let totalShopKeeper = arrayShopKeeper.reduce((acc, item) => {
                let total = acc + Number(item.price) * Number(item.quantity);
                
                return total - total * 3.99 / 100 // 3.99% de desconto
            }, 0);

            // buscar lojista pelo id
            const findShopKeeperExist = await this.userRepository.findById(arrayShopKeeper[0].userId as string)

            // validar se o lojista existe
            if(!findShopKeeperExist) {
                throw new AppError("Lojista não encontrado", 404)
            }

            // validar se o lojista tem um asaasWalletId
            if(!findShopKeeperExist.asaasWalletId) {
                throw new AppError("Lojista não possui carteira de pagamento Asaas", 404)
            }

            // variavel para calcular o desconto
            const paymentFeeDicount = totalShopKeeper * Number(findShopKeeperExist.paymentFee) / 100
            
            // aplicar calculo de desconto no total menos o desconto para cada lojista
            totalShopKeeper = totalShopKeeper - paymentFeeDicount

            // adicionar total de cada lojista no arrayPaymentWalletToShopKeeper
            arrayPaymentWalletToShopKeeper.push({
                userId: findShopKeeperExist.id,
                walletId: findShopKeeperExist.asaasWalletId,
                fixedValue: totalShopKeeper
            })
        }

       
        // calcular cupom de desconto

        // criar pagamento na asaas
        let newCustomer = ''
        const newDate = this.dateProvider.addDays(0)
        // validar se o cliente existe no asaas se não existir criar
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

        // verificar se o usuario tem um idCostumerPayment se não tiver retorna o new customer criado anteriormente
        const idCostumerPayment = String(newCustomer)

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
            split: arrayPaymentWalletToShopKeeper ?? null
        }) as IAsaasPayment
        
        if (!paymentAsaas) {
            throw new AppError('Error create payment Asaas', 400)
        }

         // array de id do pedidos para retornar
         let orderIdsArray: string[] = [];

        // Função para criar pedidos recursivamente
        async function recursiveCreateOrders(arrayShopKeeper: Item[][], orderRepository: IOrderRepository, index = 0,) {
            if (index >= arrayShopKeeper.length) {
                return; // Termina a recursão quando todos os pedidos forem criados
            }

            const itemsShopKeeper = arrayShopKeeper[index];

            try {
            // somar total do carrinho
            total = Number(arrayPaymentWalletToShopKeeper.find(user => user.userId === itemsShopKeeper[0].userId)!.fixedValue)
            
            // criar codigo do pedido
            const countOrder = await orderRepository.countOrders()
            const code = `#${countOrder + 1}`
                
            // criar pedido passando lista de itens para criar juntos
               const order = await orderRepository.create({
                    userId,
                    code,
                    shoppingCartId: findShoppingCartExist.id,
                    total,
                    delivery:{
                        create:{
                            address:{
                                create: address
                            }
                        }
                    },
                    items: {
                        createMany: {
                            data: itemsShopKeeper.map(item => {
                                return {
                                    userId: item.userId,
                                    productId: item.productId,
                                    quantity: item.quantity,
                                    name: item.name,
                                    price: Number(item.price),
                                    mainImage: item.mainImage
                                } as unknown as Item;
                            })
                        }
                    },
                    payment: {
                        create: {
                            asaasPaymentId: paymentAsaas.id,
                            userId,
                            paymentMethod: "CREDIT_CARD",
                            invoiceUrl: paymentAsaas.invoiceUrl,
                            value: total,
                        }
                    }
                })

                // adicionar id do pedido ao array
                orderIdsArray.push(order.id)

                // mandar email para lojista que o pedido foi criado
            } catch (error) {
                console.error(`Erro ao criar pedido: ${error}`);
                throw new AppError("Erro ao criar pedido", 400);
            }

            // Chama a função recursiva para o próximo grupo de itens
            await recursiveCreateOrders(arrayShopKeeper, orderRepository, index + 1,);
        }

        await recursiveCreateOrders(arrayItemsShopKeeperArray, this.orderRepository);


        // decrementar quantidade no estoque
        for(let item of findShoppingCartExist.cartItem) {
            await this.productsRepository.updateQuantity(item.productId, item.quantity)

            // buscar produto pelo id
            const product = await this.productsRepository.findById(item.productId)

            // atualizar vendas do produto no estoque
            await this.productsRepository.updateSales(item.productId, item.quantity)

            // atualizar vendas do produto no estoque
            await this.productsRepository.updateSales(item.productId, item.quantity)

            if(product && product.quantity === 0) {
                // desativar produto
                await this.productsRepository.updateStatus(product.id, false)
            }
        }

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
            null
        )


        // buscar pedido mais recente criado
        const listOrders = await this.orderRepository.listByIds(orderIdsArray) as unknown as IOrderRelationsDTO[]

        const order = listOrders[0] as unknown as IOrderRelationsDTO

        // retornar pedido criado
        return order
    }
}