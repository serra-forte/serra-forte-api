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

// src/usecases/images/delete/delete-images-usecase.ts
var delete_images_usecase_exports = {};
__export(delete_images_usecase_exports, {
  DeleteImageUseCase: () => DeleteImageUseCase
});
module.exports = __toCommonJS(delete_images_usecase_exports);

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/images/delete/delete-images-usecase.ts
var DeleteImageUseCase = class {
  constructor(imageRepository, storageProvider, fileProvider) {
    this.imageRepository = imageRepository;
    this.storageProvider = storageProvider;
    this.fileProvider = fileProvider;
  }
  async execute({
    id
  }) {
    const findImageExists = await this.imageRepository.findById(id);
    if (!findImageExists) {
      throw new AppError("Image not found", 404);
    }
    await this.storageProvider.deleteFile(findImageExists.hashName, "products");
    this.fileProvider.deleteFileTmp(findImageExists.hashName, "products");
    await this.imageRepository.deleteById(id);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeleteImageUseCase
});
