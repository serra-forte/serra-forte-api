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

// src/usecases/admin/create-user-by-admin/create-user-by-admin-usecase.ts
var create_user_by_admin_usecase_exports = {};
__export(create_user_by_admin_usecase_exports, {
  CreateUserByAdminUseCase: () => CreateUserByAdminUseCase
});
module.exports = __toCommonJS(create_user_by_admin_usecase_exports);

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

// src/usecases/admin/create-user-by-admin/create-user-by-admin-usecase.ts
var import_bcrypt = require("bcrypt");
var import_config3 = require("dotenv/config");
var import_crypto = require("crypto");

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/utils/generator-random-key.ts
var import_config2 = require("dotenv/config");
function generatoRandomKey(length) {
  let result = "";
  const characters = env.CHARACTERS;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  const key = Buffer.from(result, "base64").toString("base64");
  return key;
}

// src/usecases/admin/create-user-by-admin/create-user-by-admin-usecase.ts
var CreateUserByAdminUseCase = class {
  constructor(usersRepository, dayjsDateProvider, usersTokensRepository, sendMailProvider) {
    this.usersRepository = usersRepository;
    this.dayjsDateProvider = dayjsDateProvider;
    this.usersTokensRepository = usersTokensRepository;
    this.sendMailProvider = sendMailProvider;
  }
  async execute({
    email,
    name,
    phone,
    idCamping
  }) {
    const findEmailAlreadyExists = await this.usersRepository.findByEmail(email);
    if (findEmailAlreadyExists) {
      throw new AppError("Email j\xE1 cadastrado", 409);
    }
    const randomPass = generatoRandomKey(8);
    const criptingPassword = await (0, import_bcrypt.hash)(`${randomPass}`, 8);
    const user = await this.usersRepository.create({
      idCamping,
      email,
      name,
      password: criptingPassword,
      phone
      // role: Role.AFFILIATE,
    });
    const pathTemplate = env.NODE_ENV === "development" ? "./views/emails/verify-email-with-password.hbs" : "./build/views/emails/verify-email-with-password.hbs";
    const token = (0, import_crypto.randomUUID)();
    const expireDateHours = this.dayjsDateProvider.addHours(3);
    await this.usersTokensRepository.create({
      idUser: user.id,
      expireDate: expireDateHours,
      token
    });
    const link = env.NODE_ENV === "development" ? `${env.APP_URL_FRONTEND_DEVELOPMENT}/verification/${token}/${email}` : `${env.APP_URL_FRONTEND_PRODUCTION}/verification/${token}/${email}`;
    await this.sendMailProvider.sendEmail(
      email,
      name,
      "Confirma\xE7\xE3o de email",
      link,
      pathTemplate,
      {
        password: randomPass
      }
    );
    return user;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateUserByAdminUseCase
});
