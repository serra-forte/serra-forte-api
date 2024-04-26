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

// src/usecases/users/send-verification-email/send-verification-email-users-usecase.ts
var send_verification_email_users_usecase_exports = {};
__export(send_verification_email_users_usecase_exports, {
  SendVerificationEmailUserUseCase: () => SendVerificationEmailUserUseCase
});
module.exports = __toCommonJS(send_verification_email_users_usecase_exports);

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

// src/usecases/users/send-verification-email/send-verification-email-users-usecase.ts
var import_crypto = require("crypto");
var import_config2 = require("dotenv/config");
var SendVerificationEmailUserUseCase = class {
  constructor(usersRepository, sendMailProvider, usersTokensRepository, dayjsDateProvider) {
    this.usersRepository = usersRepository;
    this.sendMailProvider = sendMailProvider;
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({ email }) {
    const findUserExist = await this.usersRepository.findByEmail(email);
    if (!findUserExist) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
    }
    if (findUserExist.emailActive) {
      throw new AppError("Email j\xE1 verificado", 400);
    }
    const token = (0, import_crypto.randomUUID)();
    const expireDateHours = this.dayjsDateProvider.addHours(3);
    await this.usersTokensRepository.create({
      idUser: findUserExist.id,
      token,
      expireDate: expireDateHours
    });
    const link = env.NODE_ENV === "development" ? `${env.APP_URL_FRONTEND_DEVELOPMENT}/verification/${token}/${email}` : `${env.APP_URL_FRONTEND_PRODUCTION}/verification/${token}/${email}`;
    const pathTemplate = env.NODE_ENV === "development" ? "./views/emails/verify-email.hbs" : "./build/views/emails/verify-email.hbs";
    await this.sendMailProvider.sendEmail(
      email,
      findUserExist.name,
      "Confirma\xE7\xE3o de email",
      link,
      pathTemplate,
      null
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SendVerificationEmailUserUseCase
});
