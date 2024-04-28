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

// src/usecases/users/logout/logout-usecase.ts
var logout_usecase_exports = {};
__export(logout_usecase_exports, {
  LogoutUseCase: () => LogoutUseCase
});
module.exports = __toCommonJS(logout_usecase_exports);
var import_config = require("dotenv/config");

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/users/logout/logout-usecase.ts
var LogoutUseCase = class {
  constructor(usersTokensRepository, cacheProvider, dayjsDateProvider) {
    this.usersTokensRepository = usersTokensRepository;
    this.cacheProvider = cacheProvider;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({
    token,
    refreshToken,
    userId
  }) {
    const userToken = await this.usersTokensRepository.findByUserAndToken(userId, refreshToken);
    if (!userToken) {
      throw new AppError("Refresh token n\xE3o encontrado", 404);
    }
    await this.cacheProvider.addToBlackList(token);
    await this.usersTokensRepository.deleteByUser(userToken.user.id);
    const dataExpirateClearBlackList = await this.cacheProvider.getDatesToDeleteBlackList();
    if (dataExpirateClearBlackList.length === 0) {
      const newDateExpire2 = JSON.stringify(this.dayjsDateProvider.addDays(7));
      await this.cacheProvider.addNewDateToDeleteBlackList(newDateExpire2);
    }
    const [newDateExpire] = await this.cacheProvider.getDatesToDeleteBlackList();
    const dataExpirate = new Date(JSON.parse(newDateExpire));
    const dateNow = this.dayjsDateProvider.dateNow();
    const verifyExpireDate = this.dayjsDateProvider.compareIfBefore(dateNow, dataExpirate);
    if (!verifyExpireDate) {
      await this.cacheProvider.clearBlackList();
      await this.cacheProvider.resetDatesToDeleteBlackList();
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LogoutUseCase
});
