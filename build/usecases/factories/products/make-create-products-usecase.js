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

// src/usecases/factories/products/make-create-products-usecase.ts
var make_create_products_usecase_exports = {};
__export(make_create_products_usecase_exports, {
  makeCreateProduct: () => makeCreateProduct
});
module.exports = __toCommonJS(make_create_products_usecase_exports);

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  // log: env.NODE_ENV === 'development' ? ['query'] : [],
});

// src/repositories/prisma/prisma-products-repository.ts
var PrismaProductsRepository = class {
  async list() {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    return products;
  }
  async findByName(name) {
    const product = await prisma.product.findUnique({ where: { name } });
    return product;
  }
  async create(data) {
    const product = await prisma.product.create({ data });
    return product;
  }
  async findById(id) {
    const product = await prisma.product.findUnique({ where: { id } });
    return product;
  }
  async update(data) {
    const product = await prisma.product.update({ where: { id: data.id }, data });
    return product;
  }
  async delete(id) {
    await prisma.product.delete({ where: { id } });
  }
};

// src/usecases/products/create/create-products-usecase.ts
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

// src/usecases/factories/products/make-create-products-usecase.ts
async function makeCreateProduct() {
  const productsRepository = new PrismaProductsRepository();
  const createProductsUseCase = new CreateProductsUseCase(
    productsRepository
  );
  return createProductsUseCase;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeCreateProduct
});
