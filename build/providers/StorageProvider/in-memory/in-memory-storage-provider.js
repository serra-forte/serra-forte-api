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

// src/providers/StorageProvider/in-memory/in-memory-storage-provider.ts
var in_memory_storage_provider_exports = {};
__export(in_memory_storage_provider_exports, {
  InMemoryStorageProvider: () => InMemoryStorageProvider
});
module.exports = __toCommonJS(in_memory_storage_provider_exports);
var InMemoryStorageProvider = class {
  constructor() {
    this.storage = [];
  }
  async deleteFile(fileName, folderStorage) {
    this.storage.push(fileName);
  }
  async uploadFile(fileName, pathFolder, folderStorage) {
    if (!fileName) {
      return void 0;
    }
    this.storage.push(fileName);
    return fileName;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryStorageProvider
});
