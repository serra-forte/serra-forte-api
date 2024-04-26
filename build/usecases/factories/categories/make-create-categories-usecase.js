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

// src/usecases/factories/categories/make-create-categories-usecase.ts
var make_create_categories_usecase_exports = {};
__export(make_create_categories_usecase_exports, {
  makeCreateCategory: () => makeCreateCategory
});
module.exports = __toCommonJS(make_create_categories_usecase_exports);

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  // log: env.NODE_ENV === 'development' ? ['query'] : [],
});

// src/repositories/prisma/prisma-categories-repository.ts
var PrismaCategoryRepository = class {
  async listByType(type) {
    return prisma.category.findMany({
      where: { type }
    });
  }
  async create(data) {
    const category = await prisma.category.create({ data });
    return category;
  }
  async list() {
    return prisma.category.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        description: true,
        attractions: true
      }
    });
  }
  async findById(id) {
    const category = await prisma.category.findUnique({
      where: { id }
    });
    return category;
  }
  async updateById(data) {
    const category = await prisma.category.update({
      where: { id: data.id },
      data
    });
    return category;
  }
  async deleteById(id) {
    await prisma.category.delete({
      where: { id }
    });
  }
};

// src/usecases/categories/create/create-categories-usecase.ts
var CreateCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({
    name,
    description,
    type
  }) {
    const category = await this.categoriesRepository.create({
      name,
      description,
      type
    });
    return category;
  }
};

// src/usecases/factories/categories/make-create-categories-usecase.ts
async function makeCreateCategory() {
  const categoryRepository = new PrismaCategoryRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(
    categoryRepository
  );
  return createCategoryUseCase;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeCreateCategory
});
