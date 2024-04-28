"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/usecases/users/verify-email/verify-email-test.spec.ts
var import_vitest = require("vitest");

// src/repositories/in-memory/in-memory-users-repository.ts
var import_crypto = require("crypto");
var InMemoryUsersRepository = class {
  constructor() {
    this.users = [];
  }
  async listAdmins() {
    const users = this.users.filter((user) => user.role === "ADMIN");
    return users;
  }
  async findByIdCostumerPayment(id) {
    const user = this.users.find((user2) => user2.idCustomerAsaas === id);
    if (!user) {
      return null;
    }
    return user;
  }
  async getUserSecurity(id) {
    const user = this.users.find((user2) => user2.id === id);
    if (!user) {
      return null;
    }
    const userSecurity = {
      id: user.id,
      idCustomerAsaas: user.idCustomerAsaas,
      email: user.email,
      cpf: user.cpf,
      passport: user.passport,
      name: user.name,
      phone: user.phone,
      role: user.role,
      dateBirth: user.dateBirth,
      emailActive: user.emailActive,
      createdAt: user.createdAt
    };
    return userSecurity;
  }
  async changePassword(id, password) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    this.users[userIndex].password = password;
  }
  async updateIdCostumerPayment(userId, idCustomerPayment) {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    this.users[userIndex].idCustomerAsaas = idCustomerPayment;
    return this.users[userIndex];
  }
  async turnAdmin(id) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users[userIndex].role = "ADMIN";
    return this.users[userIndex];
  }
  async create({
    id,
    idCustomerAsaas,
    cpf,
    dateBirth,
    email,
    name,
    passport,
    password,
    phone,
    emailActive,
    role
  }) {
    const user = {
      id: id ? id : (0, import_crypto.randomUUID)(),
      idCustomerAsaas: idCustomerAsaas ? idCustomerAsaas : null,
      dateBirth: dateBirth ? new Date(dateBirth) : null,
      email,
      name,
      passport: passport ? passport : null,
      password,
      phone: phone ? phone : null,
      address: [],
      leads: [],
      posts: [],
      tokens: [],
      emailActive: emailActive ? emailActive : false,
      role: role ? role : "GUEST",
      cpf: cpf ? cpf : null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.users.push(user);
    return user;
  }
  async list() {
    return this.users;
  }
  async findById(id) {
    const user = this.users.find((user2) => user2.id === id);
    if (!user) {
      return null;
    }
    return user;
  }
  async findByEmail(email) {
    const user = this.users.find((user2) => user2.email === email);
    if (!user) {
      return null;
    }
    return user;
  }
  async findByCPF(cpf) {
    const user = this.users.find((user2) => user2.cpf === cpf);
    if (!user) {
      return null;
    }
    return user;
  }
  async findByPassport(passport) {
    const user = this.users.find((user2) => user2.passport === passport);
    if (!user) {
      return null;
    }
    return user;
  }
  async activeEmail(id, activate = true) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    this.users[userIndex].emailActive = activate;
  }
  async update({
    id,
    dateBirth,
    email,
    name,
    passport,
    cpf,
    phone
  }) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users[userIndex].dateBirth = new Date(dateBirth);
    this.users[userIndex].email = email;
    this.users[userIndex].name = name;
    this.users[userIndex].passport = passport;
    this.users[userIndex].phone = phone;
    this.users[userIndex].cpf = cpf;
    return this.users[userIndex];
  }
  async delete(id) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users.splice(userIndex, 1);
  }
};

// src/usecases/users/verify-email/verify-email-usecase.ts
var import_config = require("dotenv/config");

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/users/verify-email/verify-email-usecase.ts
var VerifyEmailUseCase = class {
  constructor(usersRepository, usersTokensRepository, dayjsDateProvider2) {
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider2;
  }
  async execute({
    token,
    email
  }) {
    const findUserByEmail = await this.usersRepository.findByEmail(email);
    if (!findUserByEmail) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
    }
    const findToken = await this.usersTokensRepository.findByToken(token);
    if (!findToken) {
      throw new AppError("Token n\xE3o encontrado", 404);
    }
    await this.usersRepository.activeEmail(findUserByEmail.id);
  }
};

// src/usecases/users/verify-email/verify-email-test.spec.ts
var import_bcrypt2 = require("bcrypt");

// src/providers/DateProvider/implementations/provider-dayjs.ts
var import_dayjs = __toESM(require("dayjs"));
var import_utc = __toESM(require("dayjs/plugin/utc"));
var import_isBetween = __toESM(require("dayjs/plugin/isBetween"));
var import_timezone = __toESM(require("dayjs/plugin/timezone"));
var import_pt = require("dayjs/locale/pt");
import_dayjs.default.extend(import_utc.default);
import_dayjs.default.extend(import_isBetween.default);
import_dayjs.default.extend(import_timezone.default);
import_dayjs.default.locale("pt");
var DayjsDateProvider = class {
  compareIfAfter(start_date, end_date) {
    return (0, import_dayjs.default)(start_date).isAfter((0, import_dayjs.default)(end_date));
  }
  createDate(date) {
    const createDate = (0, import_dayjs.default)(date).startOf("day").format("YYYY-MM-DDTHH:mm:ssZ[Z]");
    const convertDatePtBR = createDate.substring(0, 19) + "." + createDate.substring(23);
    return convertDatePtBR;
  }
  dateTomorrow(date) {
    return import_dayjs.default.utc(date).add(1, "day").startOf("day").toDate();
  }
  dateIsSameByHour(start_date, end_date) {
    return (0, import_dayjs.default)(start_date).isSame(end_date, "d") && (0, import_dayjs.default)(start_date).isSame(end_date, "m") && (0, import_dayjs.default)(start_date).isSame(end_date, "y") && (0, import_dayjs.default)(start_date).isSame(end_date, "hour");
  }
  dateIsSame(start_date, end_date) {
    return (0, import_dayjs.default)(start_date).isSame(end_date, "d") && (0, import_dayjs.default)(start_date).isSame(end_date, "m") && (0, import_dayjs.default)(start_date).isSame(end_date, "y");
  }
  veirfyIsDateInBetween(dateVerify, start_date, end_date) {
    return (0, import_dayjs.default)(dateVerify).isBetween(start_date, (0, import_dayjs.default)(end_date), "date");
  }
  addHours(hours) {
    return (0, import_dayjs.default)().add(hours, "hour").toDate();
  }
  addDays(days) {
    const catchDatePtBR = (0, import_dayjs.default)().add(days, "days").format("YYYY-MM-DDTHH:mm:ssZ[Z]");
    const convertDatePtBR = catchDatePtBR.substring(0, 19) + "." + catchDatePtBR.substring(23);
    return convertDatePtBR;
  }
  addMoth(month) {
    const catchDatePtBR = (0, import_dayjs.default)().add(month, "months").format("YYYY-MM-DDTHH:mm:ssZ[Z]");
    const convertDatePtBR = catchDatePtBR.substring(0, 19) + "." + catchDatePtBR.substring(23);
    return convertDatePtBR;
  }
  compareInHours(start_date, end_date) {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);
    return (0, import_dayjs.default)(end_date_utc).diff(start_date_utc, "hours");
  }
  convertToUTC(date) {
    return (0, import_dayjs.default)(date).utc().local().format();
  }
  dateNow(date) {
    return import_dayjs.default.utc(date).add(0, "day").startOf("day").toDate();
  }
  compareInDays(start_date, end_date) {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);
    return (0, import_dayjs.default)(end_date_utc).diff(start_date_utc, "days");
  }
  compareIfBefore(start_date, end_date) {
    return (0, import_dayjs.default)(start_date).isBefore((0, import_dayjs.default)(end_date));
  }
};

// src/repositories/in-memory/in-memory-tokens-repository.ts
var import_crypto2 = require("crypto");
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
      id: (0, import_crypto2.randomUUID)(),
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

// src/env/index.ts
var import_zod = require("zod");
var import_config2 = require("dotenv/config");
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

// src/usecases/users/register/register-usecase.ts
var import_bcrypt = require("bcrypt");
var import_config3 = require("dotenv/config");
var import_crypto3 = require("crypto");
var RegisterUseCase = class {
  constructor(usersRepository, dayjsDateProvider2, usersTokensRepository, sendMailProvider2) {
    this.usersRepository = usersRepository;
    this.dayjsDateProvider = dayjsDateProvider2;
    this.usersTokensRepository = usersTokensRepository;
    this.sendMailProvider = sendMailProvider2;
  }
  async execute({
    email,
    name,
    password,
    phone,
    cpf
  }) {
    const findEmailAlreadyExists = await this.usersRepository.findByEmail(email);
    if (findEmailAlreadyExists) {
      throw new AppError("Email j\xE1 cadastrado", 409);
    }
    if (cpf) {
      const findCPFAlreadyExist = await this.usersRepository.findByCPF(cpf);
      if (findCPFAlreadyExist) {
        throw new AppError("CPF already exists!", 409);
      }
    }
    const criptingPassword = await (0, import_bcrypt.hash)(password, 8);
    const user = await this.usersRepository.create({
      email,
      name,
      password: criptingPassword,
      phone,
      cpf
    });
    let pathTemplate = env.NODE_ENV === "development" ? "./views/emails/verify-email.hbs" : "./build/views/emails/verify-email.hbs";
    const token = (0, import_crypto3.randomUUID)();
    const expireDateHours = this.dayjsDateProvider.addHours(3);
    await this.usersTokensRepository.create({
      userId: user.id,
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
      null
    );
    return {
      user
    };
  }
};

// src/providers/MailProvider/in-memory/in-memory-mail-provider.ts
var InMemoryMailProvider = class {
  constructor() {
    this.messages = [];
    this.messages = this.messages;
  }
  async findMessageSent(email) {
    const message = this.messages.find((message2) => message2.email === email);
    return message;
  }
  async sendEmail(email, name, subject, link, pathTemplate) {
    const message = {
      email,
      name,
      subject,
      link,
      textTemplate: pathTemplate
    };
    this.messages.push(message);
  }
};

// src/usecases/users/verify-email/verify-email-test.spec.ts
var usersRepositoryInMemory;
var usersTokensRepositoryInMemory;
var dayjsDateProvider;
var sendMailProvider;
var registerUseCase;
var stu;
(0, import_vitest.describe)("Verify email user (unit)", () => {
  (0, import_vitest.beforeEach)(async () => {
    usersRepositoryInMemory = new InMemoryUsersRepository();
    usersTokensRepositoryInMemory = new InMemoryTokensRepository();
    sendMailProvider = new InMemoryMailProvider();
    dayjsDateProvider = new DayjsDateProvider();
    registerUseCase = new RegisterUseCase(
      usersRepositoryInMemory,
      dayjsDateProvider,
      usersTokensRepositoryInMemory,
      sendMailProvider
    );
    stu = new VerifyEmailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dayjsDateProvider
    );
    import_vitest.vi.useFakeTimers();
  });
  (0, import_vitest.afterEach)(() => {
    import_vitest.vi.useFakeTimers();
  });
  (0, import_vitest.test)("Should be able to verify a new account", async () => {
    const { user } = await registerUseCase.execute({
      email: "user1-test@email.com",
      name: "John Doe",
      password: await (0, import_bcrypt2.hash)("123456", 8)
    });
    const userToken = await usersTokensRepositoryInMemory.findByUserId(user.id);
    await stu.execute({
      token: userToken?.token,
      email: "user1-test@email.com"
    });
    const userActive = await usersRepositoryInMemory.findByEmail("user1-test@email.com");
    (0, import_vitest.expect)(userActive.emailActive).toBe(true);
  });
  (0, import_vitest.test)("Should not be able to verify a new account with email already exists", async () => {
    const email = "email@notexists.com";
    const { user } = await registerUseCase.execute({
      email: "user1-test@email.com",
      name: "John Doe",
      password: await (0, import_bcrypt2.hash)("123456", 8)
    });
    const userToken = await usersTokensRepositoryInMemory.findByUserId(user.id);
    await (0, import_vitest.expect)(
      () => stu.execute({
        token: userToken?.token,
        email
      })
    ).rejects.toEqual(new AppError("Usu\xE1rio n\xE3o encontrado", 404));
  });
  (0, import_vitest.test)("Should not be able to verify a account with token not found", async () => {
    const { user } = await registerUseCase.execute({
      email: "user1-test@email.com",
      name: "John Doe",
      password: await (0, import_bcrypt2.hash)("123456", 8)
    });
    await (0, import_vitest.expect)(
      () => stu.execute({
        token: "xxx",
        email: "user1-test@email.com"
      })
    ).rejects.toEqual(new AppError("Token n\xE3o encontrado", 404));
  });
});
