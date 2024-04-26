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

// src/repositories/in-memory/in-memory-addresses-repository.ts
var in_memory_addresses_repository_exports = {};
__export(in_memory_addresses_repository_exports, {
  InMemoryAddressesRepository: () => InMemoryAddressesRepository
});
module.exports = __toCommonJS(in_memory_addresses_repository_exports);
var import_client = require("@prisma/client");
var import_crypto = require("crypto");
var InMemoryAddressesRepository = class {
  constructor() {
    this.adresses = [];
  }
  async deleteById(id) {
    const addressIndex = this.adresses.findIndex((address) => address.id === id);
    this.adresses.splice(addressIndex, 1);
  }
  async create({
    id,
    street,
    num,
    district,
    city,
    state,
    country,
    zipCode,
    complement,
    reference,
    idUser,
    idAnnouncement,
    idCamping
  }) {
    const address = {
      id: id ? id : (0, import_crypto.randomUUID)(),
      idUser: idUser ? idUser : null,
      idAnnouncement: idAnnouncement ? idAnnouncement : null,
      idCamping: idCamping ? idCamping : null,
      street,
      num: new import_client.Prisma.Decimal(num),
      district,
      city,
      state,
      country,
      zipCode: new import_client.Prisma.Decimal(zipCode),
      complement: complement ? complement : null,
      reference: reference ? reference : null
    };
    this.adresses.push(address);
    return address;
  }
  async findById(id) {
    const address = this.adresses.find((address2) => address2.id === id);
    if (!address) {
      return null;
    }
    return address;
  }
  async updateById({
    id,
    num,
    city,
    complement,
    country,
    district,
    reference,
    state,
    street,
    zipCode
  }) {
    const addressIndex = this.adresses.findIndex((address) => address.id === id);
    this.adresses[addressIndex].num = num;
    this.adresses[addressIndex].city = city;
    this.adresses[addressIndex].complement = complement;
    this.adresses[addressIndex].country = country;
    this.adresses[addressIndex].district = district;
    this.adresses[addressIndex].reference = reference;
    this.adresses[addressIndex].state = state;
    this.adresses[addressIndex].street = street;
    this.adresses[addressIndex].zipCode = zipCode;
    return this.adresses[addressIndex];
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryAddressesRepository
});
