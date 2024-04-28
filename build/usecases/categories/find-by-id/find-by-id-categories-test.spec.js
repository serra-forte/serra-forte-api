"use strict";

// src/usecases/categories/find-by-id/find-by-id-categories-test.spec.ts
var import_vitest = require("vitest");

// src/repositories/in-memory/in-memory-categories-repository.ts
var import_node_crypto = require("crypto");
var InMemoryCategoriesRepository = class {
  constructor() {
    this.categories = [];
  }
  async listByType(type) {
    return this.categories.filter((category) => category.type === type);
  }
  async create({
    id,
    name,
    type,
    description
  }) {
    const category = {
      id: id ? id : (0, import_node_crypto.randomUUID)(),
      name,
      type,
      description: description ? description : null
    };
    this.categories.push(category);
    return category;
  }
  async list() {
    return this.categories;
  }
  async findById(id) {
    const category = this.categories.find((category2) => category2.id === id);
    if (!category) {
      return null;
    }
    return category;
  }
  async updateById({
    id,
    name,
    type,
    description
  }) {
    const categoryIndex = this.categories.findIndex((category) => category.id === id);
    this.categories[categoryIndex].description = description;
    this.categories[categoryIndex].name = name;
    this.categories[categoryIndex].type = type;
    return this.categories[categoryIndex];
  }
  async deleteById(id) {
    const categoryIndex = this.categories.findIndex((category) => category.id === id);
    this.categories.splice(categoryIndex, 1);
  }
};

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/categories/find-by-id/find-by-id-categories-usecase.ts
var FindCategoryUseCase = class {
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
    return findCategoryExist;
  }
};

// src/usecases/categories/find-by-id/find-by-id-categories-test.spec.ts
var categoriesRepositoryInMemory;
var stu;
(0, import_vitest.describe)("Find category (unit)", () => {
  (0, import_vitest.beforeEach)(async () => {
    categoriesRepositoryInMemory = new InMemoryCategoriesRepository();
    stu = new FindCategoryUseCase(
      categoriesRepositoryInMemory
    );
    await categoriesRepositoryInMemory.create({
      id: "a857ff33-3664-4a38-abab-fa6dfc31f1e2",
      name: "Smart Camping",
      description: "camping com espa\xE7o muito grande",
      type: "ATTRACTION"
    });
  });
  (0, import_vitest.test)("Should be able to find Category", async () => {
    const category = await stu.execute({
      id: "a857ff33-3664-4a38-abab-fa6dfc31f1e2"
    });
    (0, import_vitest.expect)(category).toEqual(
      import_vitest.expect.objectContaining({
        name: "Smart Camping",
        description: "camping com espa\xE7o muito grande",
        type: "ATTRACTION"
      })
    );
  });
  (0, import_vitest.test)("Should not be able to find Category with invalid id", async () => {
    await (0, import_vitest.expect)(() => stu.execute({
      id: "71e93499-aac1-4d6b-b9df-9e7a55669180"
    })).rejects.toEqual(new AppError("Category not found", 404));
  });
});
