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

// src/repositories/prisma/prisma-products-repository.ts
var prisma_products_repository_exports = {};
__export(prisma_products_repository_exports, {
  PrismaProductsRepository: () => PrismaProductsRepository
});
module.exports = __toCommonJS(prisma_products_repository_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PrismaProductsRepository
});
