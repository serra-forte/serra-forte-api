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

// src/usecases/factories/products/make-list-products-usecase.ts
var make_list_products_usecase_exports = {};
__export(make_list_products_usecase_exports, {
  makeListProduct: () => makeListProduct
});
module.exports = __toCommonJS(make_list_products_usecase_exports);

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

// src/usecases/products/list/list-products-usecase.ts
var ListProductsUseCase = class {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }
  async execute() {
    const products = await this.productsRepository.list();
    return products;
  }
};

// src/usecases/factories/products/make-list-products-usecase.ts
async function makeListProduct() {
  const productsRepository = new PrismaProductsRepository();
  const listProductsUseCase = new ListProductsUseCase(
    productsRepository
  );
  return listProductsUseCase;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeListProduct
});
