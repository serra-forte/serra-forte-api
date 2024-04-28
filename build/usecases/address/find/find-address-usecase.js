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

// src/usecases/address/find/find-address-usecase.ts
var find_address_usecase_exports = {};
__export(find_address_usecase_exports, {
  FindAddressByIdUseCase: () => FindAddressByIdUseCase
});
module.exports = __toCommonJS(find_address_usecase_exports);

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/address/find/find-address-usecase.ts
var FindAddressByIdUseCase = class {
  constructor(addressRepository) {
    this.addressRepository = addressRepository;
  }
  async execute({ id }) {
    const checkAddressExists = await this.addressRepository.findById(id);
    if (!checkAddressExists) {
      throw new AppError("Endere\xE7o n\xE3o encontrado", 404);
    }
    return checkAddressExists;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FindAddressByIdUseCase
});
