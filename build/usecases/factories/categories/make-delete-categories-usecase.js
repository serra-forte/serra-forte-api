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

// src/usecases/factories/categories/make-delete-categories-usecase.ts
var make_delete_categories_usecase_exports = {};
__export(make_delete_categories_usecase_exports, {
  makeDeleteCategory: () => makeDeleteCategory
});
module.exports = __toCommonJS(make_delete_categories_usecase_exports);

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

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/categories/delete/delete-categories-usecase.ts
var DeleteCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({
    id
  }) {
    const findCategoryExist = await this.categoriesRepository.findById(id);
    if (!findCategoryExist) {
      throw new AppError("Category not found", 404);
    }
    await this.categoriesRepository.deleteById(id);
    return findCategoryExist;
  }
};

// src/usecases/factories/categories/make-delete-categories-usecase.ts
async function makeDeleteCategory() {
  const categoryRepository = new PrismaCategoryRepository();
  const deleteCategoryUseCase = new DeleteCategoryUseCase(
    categoryRepository
  );
  return deleteCategoryUseCase;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeDeleteCategory
});
