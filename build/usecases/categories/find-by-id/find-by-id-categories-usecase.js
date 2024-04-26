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

// src/usecases/categories/find-by-id/find-by-id-categories-usecase.ts
var find_by_id_categories_usecase_exports = {};
__export(find_by_id_categories_usecase_exports, {
  FindCategoryUseCase: () => FindCategoryUseCase
});
module.exports = __toCommonJS(find_by_id_categories_usecase_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FindCategoryUseCase
});
