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

// src/providers/CacheProvider/in-memory/in-memory-cache-provider.ts
var in_memory_cache_provider_exports = {};
__export(in_memory_cache_provider_exports, {
  InMemoryCacheProvider: () => InMemoryCacheProvider
});
module.exports = __toCommonJS(in_memory_cache_provider_exports);
var InMemoryCacheProvider = class {
  constructor() {
    this.cache = [];
  }
  async addToBlackList(token) {
    this.cache.push({ blacklist: [token] });
  }
  async addNewDateToDeleteBlackList(date) {
    this.cache.push({ date: [date] });
  }
  async resetDatesToDeleteBlackList() {
    this.cache.splice(0, 1);
  }
  async getDatesToDeleteBlackList() {
    const getDate = [];
    for (let index of this.cache) {
      if (index.date) {
        const [date] = index.date;
        getDate.push(date);
      }
    }
    return getDate;
  }
  async isTokenInBlackList(token) {
    const tokenInBlackList = this.cache.find((item) => {
      if (!item.blacklist) {
        return false;
      }
      return item.blacklist.includes(token);
    });
    if (tokenInBlackList) {
      return true;
    }
    return false;
  }
  async listBlackList() {
    const blackList = this.cache.map((item) => {
      return item.blacklist;
    });
    return blackList;
  }
  async clearBlackList() {
    this.cache.splice(0, 1);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryCacheProvider
});
