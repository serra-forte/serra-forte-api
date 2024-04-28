"use strict";

// src/usecases/categories/create/create-categories-test.spec.ts
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

// src/usecases/categories/create/create-categories-test.spec.ts
var categoriesRepositoryInMemory;
var stu;
(0, import_vitest.describe)("Create category (unit)", () => {
  (0, import_vitest.beforeEach)(async () => {
    categoriesRepositoryInMemory = new InMemoryCategoriesRepository();
    stu = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });
  (0, import_vitest.test)("Should be able to create Category", async () => {
    const category = await stu.execute({
      name: "Smart Camping",
      description: "camping com espa\xE7o muito grande",
      type: "CAMPING"
    });
    (0, import_vitest.expect)(category).toEqual(
      import_vitest.expect.objectContaining({
        name: "Smart Camping",
        description: "camping com espa\xE7o muito grande",
        type: "CAMPING"
      })
    );
  });
});
