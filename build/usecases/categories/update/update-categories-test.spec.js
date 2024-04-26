"use strict";

// src/usecases/categories/update/update-categories-test.spec.ts
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

// src/usecases/categories/update/update-categories-usecase.ts
var UpdateCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({
    id,
    name,
    description,
    type
  }) {
    const category = await this.categoriesRepository.updateById({
      id,
      name,
      description,
      type
    });
    return category;
  }
};

// src/usecases/categories/update/update-categories-test.spec.ts
var categoriesRepositoryInMemory;
var stu;
(0, import_vitest.describe)("Update category(unit)", () => {
  (0, import_vitest.beforeEach)(async () => {
    categoriesRepositoryInMemory = new InMemoryCategoriesRepository();
    stu = new UpdateCategoryUseCase(
      categoriesRepositoryInMemory
    );
    await categoriesRepositoryInMemory.create({
      id: "a857ff33-3664-4a38-abab-fa6dfc31f1e2",
      name: "Smart Camping",
      description: "camping com espa\xE7o muito grande",
      type: "CAMPING"
    });
  });
  (0, import_vitest.test)("Should be able to update Category", async () => {
    const category = await stu.execute({
      id: "a857ff33-3664-4a38-abab-fa6dfc31f1e2",
      name: "Chal\xE9",
      description: "chal\xE9 com espa\xE7o muito grande",
      type: "CAMPING"
    });
    (0, import_vitest.expect)(category).toEqual(
      import_vitest.expect.objectContaining({
        name: "Chal\xE9",
        description: "chal\xE9 com espa\xE7o muito grande",
        type: "CAMPING"
      })
    );
  });
});
