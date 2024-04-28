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

// src/repositories/in-memory/in-memory-images-repository.ts
var in_memory_images_repository_exports = {};
__export(in_memory_images_repository_exports, {
  InMemoryImagesRepository: () => InMemoryImagesRepository
});
module.exports = __toCommonJS(in_memory_images_repository_exports);
var import_crypto = require("crypto");
var InMemoryImagesRepository = class {
  constructor() {
    this.images = [];
  }
  async findByHashName(name) {
    const image = this.images.find((image2) => image2.hashName === name);
    if (!image) {
      return null;
    }
    return image;
  }
  async upload({
    id,
    userId,
    name,
    url,
    hashName
  }) {
    const image = {
      id: id ? id : (0, import_crypto.randomUUID)(),
      userId,
      name,
      url,
      hashName: hashName ? hashName : null
    };
    this.images.push(image);
    return image;
  }
  async list() {
    return this.images;
  }
  async listByUser(id) {
    const images = this.images.filter((image) => image.userId === id);
    return images;
  }
  async findById(id) {
    const image = this.images.find((image2) => image2.id === id);
    if (!image) {
      return null;
    }
    return image;
  }
  async deleteById(id) {
    const imageIndex = this.images.findIndex((image) => image.id === id);
    this.images.splice(imageIndex, 1);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryImagesRepository
});
