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

// src/usecases/images/list-by-user/list-by-user-images-usecase.ts
var list_by_user_images_usecase_exports = {};
__export(list_by_user_images_usecase_exports, {
  ListImageByUserUseCase: () => ListImageByUserUseCase
});
module.exports = __toCommonJS(list_by_user_images_usecase_exports);

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/images/list-by-user/list-by-user-images-usecase.ts
var ListImageByUserUseCase = class {
  constructor(imageRepository, userRepository) {
    this.imageRepository = imageRepository;
    this.userRepository = userRepository;
  }
  async execute({
    idUser
  }) {
    const findUserExists = await this.userRepository.findById(idUser);
    if (!findUserExists) {
      throw new AppError("User not found", 404);
    }
    const images = await this.imageRepository.listByUser(idUser);
    return images;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ListImageByUserUseCase
});
