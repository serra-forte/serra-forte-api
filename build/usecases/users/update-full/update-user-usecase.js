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

// src/usecases/users/update-full/update-user-usecase.ts
var update_user_usecase_exports = {};
__export(update_user_usecase_exports, {
  UpdateUserUseCase: () => UpdateUserUseCase
});
module.exports = __toCommonJS(update_user_usecase_exports);
var import_config = require("dotenv/config");

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/users/update-full/update-user-usecase.ts
var UpdateUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    id,
    name,
    email,
    phone,
    dateBirth,
    cpf
  }) {
    const findUserExists = await this.usersRepository.getUserSecurity(id);
    if (!findUserExists) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
    }
    let emailActive = findUserExists.emailActive;
    const findUserByEmail = await this.usersRepository.findByEmail(email);
    if (findUserByEmail) {
      if (findUserByEmail.id !== findUserExists.id) {
        throw new AppError("Email j\xE1 cadastrado", 409);
      }
      if (email !== findUserExists.email) {
        emailActive = false;
      }
    }
    if (cpf) {
      const findUserByCPF = await this.usersRepository.findByCPF(cpf);
      if (findUserByCPF) {
        if (findUserExists.id !== findUserByCPF.id) {
          throw new AppError("CPF j\xE1 cadastrado", 409);
        }
      }
    }
    if (phone) {
      const findUserByPhone = await this.usersRepository.findByPhone(phone);
      if (findUserByPhone) {
        if (findUserExists.id !== findUserByPhone.id) {
          throw new AppError("Phone j\xE1 cadastrado", 409);
        }
      }
    }
    await this.usersRepository.updateIdCostumerPayment(findUserExists.id, null);
    const userUpdated = await this.usersRepository.update({
      id,
      name,
      email,
      phone,
      dateBirth,
      cpf,
      emailActive
    });
    return {
      user: userUpdated
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UpdateUserUseCase
});
