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

// src/usecases/products/create/create-products-usecase.ts
var create_products_usecase_exports = {};
__export(create_products_usecase_exports, {
  CreateProductsUseCase: () => CreateProductsUseCase
});
module.exports = __toCommonJS(create_products_usecase_exports);
var CreateProductsUseCase = class {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }
  async execute({
    name,
    categoryId,
    description,
    price,
    mainImage,
    quantity
  }) {
    const productAlreadyExists = await this.productsRepository.findByName(name);
    if (productAlreadyExists) {
      throw new Error("Product already exists");
    }
    const product = await this.productsRepository.create({
      name,
      description,
      price,
      mainImage: mainImage ?? null,
      quantity
    });
    return product;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateProductsUseCase
});
