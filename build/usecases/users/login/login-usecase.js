"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/usecases/users/login/login-usecase.ts
var login_usecase_exports = {};
__export(login_usecase_exports, {
  LoginUseCase: () => LoginUseCase
});
module.exports = __toCommonJS(login_usecase_exports);

// src/env/index.ts
var import_zod = require("zod");
var import_config = require("dotenv/config");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["development", "production", "test"]).default("development"),
  PORT: import_zod.z.coerce.number().default(3335),
  HOST: import_zod.z.string().default("0.0.0.0"),
  DATABASE_URL: import_zod.z.string(),
  JWT_SECRET_ACCESS_TOKEN: import_zod.z.string(),
  JWT_SECRET_REFRESH_TOKEN: import_zod.z.string(),
  JWT_EXPIRES_IN_REFRESH_TOKEN: import_zod.z.string(),
  JWT_EXPIRES_IN_ACCESS_TOKEN: import_zod.z.string(),
  COOKIE_SECRET: import_zod.z.string(),
  SENDGRID_API_KEY: import_zod.z.string(),
  APP_URL_DEVLOPMENT: import_zod.z.string().optional(),
  APP_URL_PRODUCTION: import_zod.z.string().optional(),
  REDIS: import_zod.z.string(),
  CHARACTERS: import_zod.z.string(),
  ASAAS_API_URL: import_zod.z.string(),
  ASAAS_API_KEY: import_zod.z.string(),
  FIREBASE_PROJECT_ID: import_zod.z.string(),
  FIREBASE_CLIENT_EMAIL: import_zod.z.string().email(),
  FIREBASE_PRIVATE_KEY: import_zod.z.string(),
  FIREBASE_BUCKET: import_zod.z.string(),
  FOLDER_TMP_DEVELOPMENT: import_zod.z.string(),
  FOLDER_TMP_PRODUCTION: import_zod.z.string(),
  ASAAS_ACCESS_KEY: import_zod.z.string(),
  APP_URL_FRONTEND_DEVELOPMENT: import_zod.z.string(),
  APP_URL_FRONTEND_PRODUCTION: import_zod.z.string()
});
var _env = envSchema.safeParse(process.env);
if (_env.success !== true) {
  console.error("Error converting environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}
var env = _env.data;

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/users/login/login-usecase.ts
var import_bcrypt = require("bcrypt");
var import_config2 = require("dotenv/config");
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var LoginUseCase = class {
  constructor(usersRepository, usersTokensRepository, dayjsDateProvider) {
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({
    email,
    password,
    token
  }) {
    if (email && password) {
      const findUserExists = await this.usersRepository.findByEmail(email);
      if (!findUserExists) {
        throw new AppError("Usu\xE1rio ou senha incorretos", 401);
      }
      const passwordMatch = await (0, import_bcrypt.compare)(password, findUserExists.password);
      if (!passwordMatch) {
        throw new AppError("Usu\xE1rio ou senha incorretos", 401);
      }
      const accessToken = import_jsonwebtoken.default.sign({}, env.JWT_SECRET_ACCESS_TOKEN, {
        subject: findUserExists.id,
        expiresIn: env.JWT_EXPIRES_IN_ACCESS_TOKEN
      });
      const refreshToken = import_jsonwebtoken.default.sign({ subject: findUserExists.id, email }, env.JWT_SECRET_REFRESH_TOKEN, {
        subject: findUserExists.id,
        expiresIn: env.JWT_EXPIRES_IN_REFRESH_TOKEN
      });
      const expireDateRefreshToken = this.dayjsDateProvider.addDays(10);
      if (findUserExists.emailActive) {
        await this.usersTokensRepository.deleteByUser(findUserExists.id);
      }
      await this.usersTokensRepository.create({
        userId: findUserExists.id,
        expireDate: expireDateRefreshToken,
        token: refreshToken
      });
      const getSafeUser = await this.usersRepository.getUserSecurity(findUserExists.id);
      return {
        user: getSafeUser,
        accessToken,
        refreshToken
      };
    }
    if (!email && !password && token) {
      const userToken = await this.usersTokensRepository.findByToken(token);
      if (!userToken) {
        throw new AppError("Token n\xE3o encontrado", 404);
      }
      const accessToken = import_jsonwebtoken.default.sign({}, env.JWT_SECRET_ACCESS_TOKEN, {
        subject: userToken.user.id,
        expiresIn: env.JWT_EXPIRES_IN_ACCESS_TOKEN
      });
      const refreshToken = import_jsonwebtoken.default.sign({ subject: userToken.user.id, email }, env.JWT_SECRET_REFRESH_TOKEN, {
        subject: userToken.user.id,
        expiresIn: env.JWT_EXPIRES_IN_REFRESH_TOKEN
      });
      const expireDateRefreshToken = this.dayjsDateProvider.addDays(10);
      await this.usersTokensRepository.create({
        userId: userToken.user.id,
        expireDate: expireDateRefreshToken,
        token: refreshToken
      });
      const getSafeUser = await this.usersRepository.getUserSecurity(userToken.user.id);
      return {
        user: getSafeUser,
        accessToken,
        refreshToken
      };
    }
    throw new AppError("Not found account", 404);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LoginUseCase
});
