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

// src/http/controllers/products/create/create-products-controller.ts
var create_products_controller_exports = {};
__export(create_products_controller_exports, {
  CreateProduct: () => CreateProduct
});
module.exports = __toCommonJS(create_products_controller_exports);

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

// src/http/controllers/products/create/create-products-controller.ts
var import_zod = require("zod");
async function CreateProduct(request, reply) {
  try {
    const productSchema = import_zod.z.object({
      categoryId: import_zod.z.string().optional().nullable(),
      name: import_zod.z.string().min(4),
      description: import_zod.z.string().optional().nullable(),
      quantity: import_zod.z.number().nonnegative(),
      mainImage: import_zod.z.string().optional().nullable(),
      price: import_zod.z.number().nonnegative()
    });
    const {
      name,
      description,
      price,
      quantity,
      mainImage,
      categoryId
    } = productSchema.parse(request.body);
    const createProductUseCase = await makeCreateProduct();
    const product = await createProductUseCase.execute({
      name,
      description,
      price,
      quantity,
      mainImage,
      categoryId
    });
    return reply.status(200).send(product);
  } catch (error) {
    throw error;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateProduct
});
