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

// src/usecases/address/create/create-address-usecase.ts
var create_address_usecase_exports = {};
__export(create_address_usecase_exports, {
  CreateAddressUseCase: () => CreateAddressUseCase
});
module.exports = __toCommonJS(create_address_usecase_exports);

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/address/create/create-address-usecase.ts
var CreateAddressUseCase = class {
  constructor(addressRepository, usersRepository) {
    this.addressRepository = addressRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    street,
    num,
    city,
    state,
    zipCode,
    complement,
    reference,
    country,
    district,
    idAnnouncement,
    idUser
  }) {
    if (idUser) {
      const findUserExist = await this.usersRepository.findById(idUser);
      if (!findUserExist) {
        throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
      }
    }
    const address = await this.addressRepository.create({
      street,
      num,
      city,
      state,
      zipCode,
      complement,
      reference,
      country,
      district,
      idAnnouncement,
      idUser
    });
    return address;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateAddressUseCase
});
