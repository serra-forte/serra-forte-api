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

// src/usecases/admin/update-user-by-admin/update-user-by-admin-usecase.ts
var update_user_by_admin_usecase_exports = {};
__export(update_user_by_admin_usecase_exports, {
  UpdateUserByAdminUseCase: () => UpdateUserByAdminUseCase
});
module.exports = __toCommonJS(update_user_by_admin_usecase_exports);

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/admin/update-user-by-admin/update-user-by-admin-usecase.ts
var import_bcrypt = require("bcrypt");
var import_config = require("dotenv/config");
var UpdateUserByAdminUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    idUser,
    idCamping,
    password,
    email,
    name,
    phone
  }) {
    const findUserExist = await this.usersRepository.findById(idUser);
    if (!findUserExist) {
      throw new AppError("User not found", 404);
    }
    let criptingPassword = "";
    if (password) {
      criptingPassword = await (0, import_bcrypt.hash)(password, 8);
    }
    const user = await this.usersRepository.update({
      id: idUser,
      idCamping: idCamping || void 0,
      password: password ? criptingPassword : void 0,
      email: email || void 0,
      name: name || void 0,
      phone: phone || void 0
    });
    return user;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UpdateUserByAdminUseCase
});
