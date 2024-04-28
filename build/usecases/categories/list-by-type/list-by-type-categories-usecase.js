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

// src/usecases/categories/list-by-type/list-by-type-categories-usecase.ts
var list_by_type_categories_usecase_exports = {};
__export(list_by_type_categories_usecase_exports, {
  ListCategoryByTypeUseCase: () => ListCategoryByTypeUseCase
});
module.exports = __toCommonJS(list_by_type_categories_usecase_exports);
var ListCategoryByTypeUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({ type }) {
    const categories = await this.categoriesRepository.listByType(type);
    return categories;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ListCategoryByTypeUseCase
});
