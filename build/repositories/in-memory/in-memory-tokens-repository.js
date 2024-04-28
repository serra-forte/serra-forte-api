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

// src/repositories/in-memory/in-memory-tokens-repository.ts
var in_memory_tokens_repository_exports = {};
__export(in_memory_tokens_repository_exports, {
  InMemoryTokensRepository: () => InMemoryTokensRepository
});
module.exports = __toCommonJS(in_memory_tokens_repository_exports);
var import_crypto = require("crypto");
var InMemoryTokensRepository = class {
  constructor() {
    this.tokens = [];
  }
  async findByUserAndToken(userId, token) {
    const userToken = this.tokens.find(
      (userToken2) => userToken2.userId === userId && userToken2.token === token
    );
    if (!userToken) {
      return null;
    }
    return userToken;
  }
  async create({
    userId,
    expireDate,
    token
  }) {
    const userToken = {
      id: (0, import_crypto.randomUUID)(),
      userId,
      expireDate: new Date(expireDate),
      token,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.tokens.push(userToken);
    return userToken;
  }
  async findByToken(token) {
    const userToken = this.tokens.find((userToken2) => userToken2.token === token);
    if (!userToken) {
      return null;
    }
    return userToken;
  }
  async findByUserId(userId) {
    const userToken = this.tokens.find((userToken2) => userToken2.userId === userId);
    if (!userToken) {
      return null;
    }
    return userToken;
  }
  async delete(id) {
    const userIndex = this.tokens.findIndex((userToken) => userToken.id === id);
    this.tokens.splice(userIndex, 1);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryTokensRepository
});
