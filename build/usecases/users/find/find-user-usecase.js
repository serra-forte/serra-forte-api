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

// src/usecases/users/find/find-user-usecase.ts
var find_user_usecase_exports = {};
__export(find_user_usecase_exports, {
  FindUserUseCase: () => FindUserUseCase
});
module.exports = __toCommonJS(find_user_usecase_exports);
var import_config = require("dotenv/config");

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/users/find/find-user-usecase.ts
var FindUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    id
  }) {
    const findUserExist = await this.usersRepository.findById(id);
    if (!findUserExist) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
    }
    const getSafeUser = await this.usersRepository.getUserSecurity(findUserExist.id);
    return {
      user: getSafeUser
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FindUserUseCase
});
