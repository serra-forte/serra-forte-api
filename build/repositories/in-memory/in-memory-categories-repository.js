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

// src/repositories/in-memory/in-memory-categories-repository.ts
var in_memory_categories_repository_exports = {};
__export(in_memory_categories_repository_exports, {
  InMemoryCategoriesRepository: () => InMemoryCategoriesRepository
});
module.exports = __toCommonJS(in_memory_categories_repository_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryCategoriesRepository
});
