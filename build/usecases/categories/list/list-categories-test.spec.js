"use strict";

// src/usecases/categories/list/list-categories-test.spec.ts
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

// src/usecases/categories/list/list-categories-usecase.ts
var ListCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute() {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
};

// src/usecases/categories/list/list-categories-test.spec.ts
var categoriesRepositoryInMemory;
var stu;
(0, import_vitest.describe)("List categories (unit)", () => {
  (0, import_vitest.beforeEach)(async () => {
    categoriesRepositoryInMemory = new InMemoryCategoriesRepository();
    stu = new ListCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });
  (0, import_vitest.test)("Should be able to list Category", async () => {
    for (let i = 0; i < 10; i++) {
      await categoriesRepositoryInMemory.create({
        name: `categoria ${i}`,
        description: "criando mais de uma categoria",
        type: "ATTRACTION"
      });
    }
    const categories = await stu.execute();
    (0, import_vitest.expect)(categories).toHaveLength(10);
  });
});
