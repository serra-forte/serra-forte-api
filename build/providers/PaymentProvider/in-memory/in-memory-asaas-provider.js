"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/providers/PaymentProvider/in-memory/in-memory-asaas-provider.ts
var in_memory_asaas_provider_exports = {};
__export(in_memory_asaas_provider_exports, {
  InMemoryAsaasProvider: () => InMemoryAsaasProvider
});
module.exports = __toCommonJS(in_memory_asaas_provider_exports);
var import_crypto = require("crypto");
var InMemoryAsaasProvider = class {
  constructor(dayjsDateProvider) {
    this.dayjsDateProvider = dayjsDateProvider;
    this.payments = [];
    this.customers = [];
    this.installments = [];
  }
  async createPayment({
    customer,
    billingType,
    value,
    dueDate,
    installmentCount,
    installmentValue,
    installment,
    description,
    externalReference,
    creditCard,
    creditCardHolderInfo,
    discount,
    fine,
    interest,
    remoteIp
  }) {
    const payment = {
      id: (0, import_crypto.randomUUID)(),
      customer,
      billingType,
      value,
      dueDate,
      installmentCount,
      installmentValue,
      installment,
      description,
      externalReference,
      creditCard,
      creditCardHolderInfo,
      discount,
      fine,
      interest,
      remoteIp
    };
    const instalmentsInfo = {
      id: payment.id,
      installments: (0, import_crypto.randomUUID)(),
      installmentCount,
      paymentValue: installmentValue
    };
    this.payments.push(payment);
    this.installments.push(instalmentsInfo);
    let netValue = 0;
    const dateExpireDiscount = /* @__PURE__ */ new Date("2023-12-19");
    const dateNow = this.dayjsDateProvider.dateNow();
    const verifyDiscountActive = this.dayjsDateProvider.compareIfBefore(
      dateNow,
      dateExpireDiscount
    );
    if (billingType === "BOLETO" || billingType === "PIX") {
      if (verifyDiscountActive) {
        netValue = Number(Math.abs(value - 0.99).toFixed(2));
      } else {
        netValue = Number(Math.abs(value - 1.99).toFixed(2));
      }
    }
    if (billingType === "CREDIT_CARD") {
      if (verifyDiscountActive) {
        netValue = Math.abs(Number((value * 0.0199 + 0.49).toFixed(2)) - value);
      } else {
        netValue = Math.abs(Number((value * 0.0299 + 0.49).toFixed(2)) - value);
      }
    }
    if (billingType === "CREDIT_CARD" && Number(installmentCount) <= 6) {
      if (verifyDiscountActive) {
        netValue = Math.abs(Number((value * 0.0249 + 0.49).toFixed(2)) - value);
      } else {
        netValue = Math.abs(Number((value * 0.0349 + 0.49).toFixed(2)) - value);
      }
    }
    if (billingType === "CREDIT_CARD" && Number(installmentCount) > 6) {
      if (verifyDiscountActive) {
        netValue = Math.abs(Number((value * 0.0299 + 0.49).toFixed(2)) - value);
      } else {
        netValue = Math.abs(Number((value * 0.0399 + 0.49).toFixed(2)) - value);
      }
    }
    return {
      id: payment.id,
      customer: payment.customer,
      value: payment.value,
      netValue,
      billingType: payment.billingType,
      installment: instalmentsInfo.id,
      status: "PAYMENT_RECEIVED",
      creditCard: payment.creditCard,
      dueDate: payment.dueDate,
      invoiceUrl: "https://invoice.com",
      description: payment.description,
      externalReference,
      creditCardToken: (0, import_crypto.randomUUID)()
    };
  }
  async createCustomer({ cpfCnpj, email, name, phone }) {
    const customer = {
      id: (0, import_crypto.randomUUID)(),
      cpfCnpj,
      email,
      name,
      phone
    };
    this.customers.push(customer);
    return customer;
  }
  async findUniqueInstallments(idInstallment) {
    const findInstallments = this.installments.find(
      (installment) => installment.id === idInstallment
    );
    if (!findInstallments) {
      return null;
    }
    return findInstallments;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryAsaasProvider
});
