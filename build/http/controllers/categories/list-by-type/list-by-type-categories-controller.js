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

// src/http/controllers/categories/list-by-type/list-by-type-categories-controller.ts
var list_by_type_categories_controller_exports = {};
__export(list_by_type_categories_controller_exports, {
  ListCategoryByType: () => ListCategoryByType
});
module.exports = __toCommonJS(list_by_type_categories_controller_exports);

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

// src/usecases/categories/list-by-type/list-by-type-categories-usecase.ts
var ListCategoryByTypeUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({ type }) {
    const categories = await this.categoriesRepository.listByType(type);
    return categories;
  }
};

// src/usecases/factories/categories/make-list-by-type-categories-usecase.ts
async function makeListCategoryByType() {
  const categoryRepository = new PrismaCategoryRepository();
  const listCategoryByTypeUseCase = new ListCategoryByTypeUseCase(
    categoryRepository
  );
  return listCategoryByTypeUseCase;
}

// src/http/controllers/categories/list-by-type/list-by-type-categories-controller.ts
var import_zod = require("zod");
async function ListCategoryByType(request, reply) {
  try {
    const categorySchema = import_zod.z.object({
      type: import_zod.z.enum(["CAMPING", "ATTRACTION"])
    });
    const {
      type
    } = categorySchema.parse(request.params);
    const listCategoryByTypeUseCase = await makeListCategoryByType();
    const category = await listCategoryByTypeUseCase.execute({
      type
    });
    return reply.status(200).send(category);
  } catch (error) {
    throw error;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ListCategoryByType
});
