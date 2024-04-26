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

// src/usecases/admin/list-users/list-users-different-pacient-usecase.ts
var list_users_different_pacient_usecase_exports = {};
__export(list_users_different_pacient_usecase_exports, {
  ListUserDifferentToPacientUseCase: () => ListUserDifferentToPacientUseCase
});
module.exports = __toCommonJS(list_users_different_pacient_usecase_exports);
var import_config = require("dotenv/config");
var ListUserDifferentToPacientUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute() {
    const users = await this.usersRepository.listUserCamper();
    return users;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ListUserDifferentToPacientUseCase
});
