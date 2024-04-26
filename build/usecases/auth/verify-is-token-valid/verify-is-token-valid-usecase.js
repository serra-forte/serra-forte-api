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

// src/usecases/auth/verify-is-token-valid/verify-is-token-valid-usecase.ts
var verify_is_token_valid_usecase_exports = {};
__export(verify_is_token_valid_usecase_exports, {
  VerifyTokenIsValidUseCase: () => VerifyTokenIsValidUseCase
});
module.exports = __toCommonJS(verify_is_token_valid_usecase_exports);
var VerifyTokenIsValidUseCase = class {
  constructor(cacheProvider) {
    this.cacheProvider = cacheProvider;
  }
  async execute({
    accessToken
  }) {
    const token = await this.cacheProvider.isTokenInBlackList(accessToken);
    if (!token) {
      return false;
    }
    return true;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VerifyTokenIsValidUseCase
});
