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

// src/usecases/users/reset-password/reset-password-usecase.ts
var reset_password_usecase_exports = {};
__export(reset_password_usecase_exports, {
  ResetPasswordUseCase: () => ResetPasswordUseCase
});
module.exports = __toCommonJS(reset_password_usecase_exports);
var import_config = require("dotenv/config");
var import_bcrypt = require("bcrypt");

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/users/reset-password/reset-password-usecase.ts
var ResetPasswordUseCase = class {
  constructor(usersRepository, usersTokensRepository, dayjsDateProvider) {
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({
    token,
    password
  }) {
    const findToken = await this.usersTokensRepository.findByToken(token);
    if (!findToken) {
      throw new AppError("Token n\xE3o encontrado", 404);
    }
    if (this.dayjsDateProvider.compareIfBefore(
      findToken.expireDate,
      this.dayjsDateProvider.dateNow()
    )) {
      throw new AppError("Token expirado", 401);
    }
    const user = await this.usersRepository.findById(findToken.userId);
    const newPassword = await (0, import_bcrypt.hash)(password, 8);
    await this.usersRepository.changePassword(user.id, newPassword);
    await this.usersTokensRepository.delete(findToken.id);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ResetPasswordUseCase
});
