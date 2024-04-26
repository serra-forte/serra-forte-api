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

// src/http/controllers/users/routes.ts
var routes_exports = {};
__export(routes_exports, {
  usersRoutes: () => usersRoutes
});
module.exports = __toCommonJS(routes_exports);

// src/providers/MailProvider/implementations/provider-sendgrid.ts
var import_mail = __toESM(require("@sendgrid/mail"));

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

// src/providers/MailProvider/implementations/provider-sendgrid.ts
var import_config2 = require("dotenv/config");
var import_node_fs = __toESM(require("fs"));
var import_handlebars = __toESM(require("handlebars"));
var MailProvider = class {
  constructor() {
    import_mail.default.setApiKey(env.SENDGRID_API_KEY);
  }
  findMessageSent(email) {
    throw new Error("Method not implemented.");
  }
  async sendEmail(email, name, subject, link, pathTemplate, variables) {
    try {
      const readTemplate = import_node_fs.default.readFileSync(pathTemplate).toString("utf-8");
      const compileTemplate = import_handlebars.default.compile(readTemplate);
      const htmlTemplate = compileTemplate({ name, link, email, variables });
      const msg = {
        to: email,
        // Para 
        from: "form@turistarv.com.br",
        // De 
        subject,
        // Assunto
        html: htmlTemplate
      };
      await import_mail.default.send(msg);
      console.log("Email enviado com sucesso");
    } catch (error) {
      console.log(error);
    }
  }
};

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

// src/usecases/users/register/register-usecase.ts
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

// src/usecases/users/register/register-usecase.ts
var RegisterUseCase = class {
  constructor(usersRepository, dayjsDateProvider, usersTokensRepository, sendMailProvider) {
    this.usersRepository = usersRepository;
    this.dayjsDateProvider = dayjsDateProvider;
    this.usersTokensRepository = usersTokensRepository;
    this.sendMailProvider = sendMailProvider;
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
      null
    );
    return {
      user
    };
  }
};

// src/repositories/prisma/prisma-users-repository.ts
var import_client2 = require("@prisma/client");

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  // log: env.NODE_ENV === 'development' ? ['query'] : [],
});

// src/repositories/prisma/prisma-users-repository.ts
var PrismaUsersRepository = class {
  async listUserCamper() {
    const users = await prisma.user.findMany({
      where: {
        role: import_client2.Role.AFFILIATE
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        passport: true,
        touristType: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        createdAt: true,
        camping: true
      }
    });
    return users;
  }
  async updateExpireRefundCredit({
    idUser,
    date
  }) {
    await prisma.user.update({
      where: {
        id: idUser
      },
      data: {
        expireRefundCredit: date
      }
    });
  }
  async updateRefundCredit(idUser, value) {
    const user = await prisma.user.update({
      where: {
        id: idUser
      },
      data: {
        refundCredit: value
      }
    });
    const refundCreditNumber = Number(user.refundCredit);
    return refundCreditNumber;
  }
  async updateFirstPayment(idUser) {
    await prisma.user.update({
      where: {
        id: idUser
      },
      data: {
        firstPayment: true
      }
    });
  }
  async findByPhone(phone) {
    const user = await prisma.user.findUnique({
      where: { phone },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        campingsFavorite: true,
        passport: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
      }
    });
    return user;
  }
  async removeFavoriteCamping(idUser, idCamping) {
    const user = await prisma.user.findUnique({
      where: {
        id: idUser
      },
      select: {
        campingsFavorite: true
      }
    });
    const campingsFavorite = user?.campingsFavorite ? user?.campingsFavorite.split(",") : [];
    const newCampingsFavorite = campingsFavorite.filter((camping) => camping !== idCamping).join(",");
    await prisma.user.update({
      where: {
        id: idUser
      },
      data: {
        campingsFavorite: newCampingsFavorite
      }
    });
  }
  async addFavoriteCamping(idUser, idCamping) {
    const user = await prisma.user.findUnique({
      where: {
        id: idUser
      },
      select: {
        campingsFavorite: true
      }
    });
    const campingsFavorite = user?.campingsFavorite ? user?.campingsFavorite.split(",") : [];
    campingsFavorite.push(idCamping);
    const newCampingsFavorite = campingsFavorite.join(",");
    await prisma.user.update({
      where: {
        id: idUser
      },
      data: {
        campingsFavorite: newCampingsFavorite
      }
    });
  }
  async listAdmins() {
    const users = await prisma.user.findMany({
      where: {
        role: "ADMIN"
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        campingsFavorite: true,
        passport: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        bookings: true,
        images: true
      }
    });
    return users;
  }
  async findByIdCostumerPayment(id) {
    const user = await prisma.user.findFirst({
      where: {
        idCustomerAsaas: id
      }
    });
    return user;
  }
  async getUserSecurity(id) {
    const user = await prisma.user.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        firstPayment: true,
        cpf: true,
        passport: true,
        campingsFavorite: true,
        touristType: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
      }
    });
    return user;
  }
  async changePassword(id, password) {
    const user = await prisma.user.update({
      where: {
        id
      },
      data: {
        password
      }
    });
  }
  async updateIdCostumerPayment(idUser, idCustomerPayment) {
    const user = await prisma.user.update({
      where: {
        id: idUser
      },
      data: {
        idCustomerAsaas: idCustomerPayment
      }
    });
    return user;
  }
  async turnAdmin(id) {
    const user = await prisma.user.update({
      where: {
        id
      },
      data: {
        role: "ADMIN"
      },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        passport: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
      }
    });
    return user;
  }
  async findByCPF(cpf) {
    const user = await prisma.user.findUnique({
      where: { cpf },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        campingsFavorite: true,
        passport: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
      }
    });
    return user;
  }
  async findByPassport(passport) {
    const user = await prisma.user.findUnique({
      where: { passport },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        campingsFavorite: true,
        passport: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
      }
    });
    return user;
  }
  async create(data) {
    const user = await prisma.user.create(
      {
        data,
        select: {
          id: true,
          name: true,
          cpf: true,
          passport: true,
          email: true,
          emailActive: true,
          dateBirth: true,
          phone: true,
          role: true,
          refundCredit: true,
          expireRefundCredit: true,
          createdAt: true,
          address: true,
          camping: true,
          bookings: true,
          images: true
        }
      }
    );
    return user;
  }
  async list() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        campingsFavorite: true,
        passport: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
      }
    });
    return users;
  }
  async findById(id) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        firstPayment: true,
        campingsFavorite: true,
        passport: true,
        touristType: true,
        password: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
      }
    });
    return user;
  }
  async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        campingsFavorite: true,
        passport: true,
        password: true,
        email: true,
        emailActive: true,
        touristType: true,
        dateBirth: true,
        phone: true,
        address: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true,
        images: true
      }
    });
    return user;
  }
  async activeEmail(id) {
    await prisma.user.update({
      where: {
        id
      },
      data: {
        emailActive: true
      }
    });
  }
  async update(data) {
    const user = await prisma.user.update({
      where: {
        id: data.id
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        campingsFavorite: true,
        firstPayment: true,
        passport: true,
        email: true,
        touristType: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        createdAt: true,
        address: true,
        camping: true,
        bookings: true,
        images: true
      },
      data
    });
    return user;
  }
  async delete(id) {
    await prisma.user.delete({
      where: {
        id
      }
    });
  }
};

// src/repositories/prisma/prisma-tokens-repository.ts
var PrismaTokensRepository = class {
  async findTokenAuth(idUser, auth) {
    const token = await prisma.token.findFirst({
      where: { idUser, token: auth }
    });
    return token;
  }
  async deleteByUser(idUser) {
    await prisma.token.deleteMany({
      where: {
        idUser
      }
    });
  }
  async deleteAll() {
    await prisma.token.deleteMany();
  }
  async create(data) {
    const token = await prisma.token.create({ data });
    return token;
  }
  async findByToken(token) {
    const tokenData = await prisma.token.findUnique({
      where: { token },
      select: {
        token: true,
        expireDate: true,
        tokenGoogle: true,
        idUser: true,
        id: true,
        user: true
      }
    });
    return tokenData;
  }
  async findByUserId(idUser) {
    const token = await prisma.token.findFirst({ where: { idUser } });
    return token;
  }
  async findByUserAndToken(idUser, token) {
    const tokenData = await prisma.token.findFirst({
      where: { idUser, token },
      select: {
        id: true,
        token: true,
        expireDate: true,
        tokenGoogle: true,
        user: true
      }
    });
    return tokenData;
  }
  async delete(id) {
    await prisma.token.delete({ where: { id } });
  }
};

// src/usecases/factories/users/make-register-user-usecase.ts
async function makeRegisterUser() {
  const usersRepository = new PrismaUsersRepository();
  const usersTokensRepository = new PrismaTokensRepository();
  const sendMailProvider = new MailProvider();
  const dayjsDateProvider = new DayjsDateProvider();
  const registerUserUseCase = new RegisterUseCase(
    usersRepository,
    dayjsDateProvider,
    usersTokensRepository,
    sendMailProvider
  );
  return registerUserUseCase;
}

// src/http/controllers/users/register/register-user-controller.ts
var import_zod2 = require("zod");
async function RegisterUser(request, reply) {
  try {
    const userSchema = import_zod2.z.object({
      name: import_zod2.z.string().min(4),
      email: import_zod2.z.string().email(),
      password: import_zod2.z.string().min(6),
      phone: import_zod2.z.string().optional().nullable(),
      cpf: import_zod2.z.string().optional().nullable()
    });
    const {
      email,
      password,
      name,
      phone,
      cpf
    } = userSchema.parse(request.body);
    const registerUseCase = await makeRegisterUser();
    const { user } = await registerUseCase.execute({
      email,
      password,
      name,
      phone,
      cpf
    });
    return reply.status(201).send(user);
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/login/login-usecase.ts
var import_bcrypt2 = require("bcrypt");
var import_config4 = require("dotenv/config");
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
      const passwordMatch = await (0, import_bcrypt2.compare)(password, findUserExists.password);
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
        idUser: findUserExists.id,
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
        idUser: userToken.user.id,
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

// src/usecases/factories/users/make-login-user-usecase.ts
async function makeLoginUser() {
  const usersRepository = new PrismaUsersRepository();
  const usersTokensRepository = new PrismaTokensRepository();
  const dayjsDateProvider = new DayjsDateProvider();
  const loginUseCase = new LoginUseCase(
    usersRepository,
    usersTokensRepository,
    dayjsDateProvider
  );
  return loginUseCase;
}

// src/http/controllers/users/login/login-user-controller.ts
var import_zod3 = require("zod");
async function LoginUser(request, reply) {
  try {
    const userSchema = import_zod3.z.object({
      email: import_zod3.z.string().email().optional().nullable(),
      password: import_zod3.z.string().min(6).optional().nullable(),
      token: import_zod3.z.string().optional().nullable()
    });
    const {
      email,
      password,
      token
    } = userSchema.parse(request.body);
    const loginUserUseCase = await makeLoginUser();
    const userInfo = await loginUserUseCase.execute({
      email,
      password,
      token
    });
    const serializedTokens = JSON.stringify({
      accessToken: userInfo.accessToken,
      refreshToken: userInfo.refreshToken
    });
    return reply.status(200).setCookie("serializedTokens", serializedTokens, {
      path: "/",
      httpOnly: true,
      secure: true,
      // sameSite: true,
      maxAge: 60 * 60 * 24 * 7
      // 7 days
    }).send({
      user: userInfo.user
    });
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/verify-email/verify-email-usecase.ts
var import_config5 = require("dotenv/config");
var VerifyEmailUseCase = class {
  constructor(usersRepository, usersTokensRepository, dayjsDateProvider) {
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
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

// src/usecases/factories/users/make-verify-email-user-usecase.ts
async function makeVerifyEmail() {
  const usersRepository = new PrismaUsersRepository();
  const usersTokensRepository = new PrismaTokensRepository();
  const dayjsDateProvider = new DayjsDateProvider();
  const verifyEmailUseCase = new VerifyEmailUseCase(
    usersRepository,
    usersTokensRepository,
    dayjsDateProvider
  );
  return verifyEmailUseCase;
}

// src/http/controllers/users/verify-email/verify-email-controller.ts
var import_zod4 = require("zod");
async function VerifyEmail(request, reply) {
  try {
    const userSchema = import_zod4.z.object({
      email: import_zod4.z.string().email(),
      token: import_zod4.z.string()
    });
    const {
      email,
      token
    } = userSchema.parse(request.query);
    const verifyEmailUseCase = await makeVerifyEmail();
    await verifyEmailUseCase.execute({
      token,
      email
    });
    return reply.status(200).send({ message: "Verified email!" });
  } catch (error) {
    throw error;
  }
}

// src/config/redis-connection.ts
var import_config6 = require("dotenv/config");
var import_redis = require("redis");
var redisClient = env.NODE_ENV === "development" ? (0, import_redis.createClient)() : (0, import_redis.createClient)({ url: env.REDIS });
var connectToRedis = () => {
  const client = redisClient;
  client.connect();
  client.SET("67946caa-89eb-402a-ad8e-70987ab911c4", "157892");
  client.SETEX("395d2a4e-f5e7-4ebd-a263-8d0b838ac584", 604800, "123589");
  client.on("connect", async () => {
    console.log("Connected to Redis");
  });
  client.on("error", async (err) => {
    console.error("Error connecting to Redis:", err);
    setTimeout(() => {
      console.log("Attempting to reconnect to Redis...");
      connectToRedis();
    }, 3e3);
  });
  return client;
};
connectToRedis();

// src/providers/CacheProvider/implementations/provider-redis-in-memory.ts
var RedisInMemoryProvider = class {
  async resetDatesToDeleteBlackList() {
    await redisClient.del("DATE_DELETE_BLACKLIST");
  }
  async addNewDateToDeleteBlackList(date) {
    await redisClient.sAdd("DATE_DELETE_BLACKLIST", date);
  }
  async getDatesToDeleteBlackList() {
    const date = await redisClient.sMembers("DATE_DELETE_BLACKLIST");
    return date;
  }
  async listBlackList() {
    const tokens = await redisClient.sMembers("BLACKLIST");
    return tokens;
  }
  async addToBlackList(token) {
    await redisClient.sAdd("BLACKLIST", token);
  }
  async isTokenInBlackList(token) {
    const inBlackList = await redisClient.sIsMember("BLACKLIST", token);
    return inBlackList;
  }
  async clearBlackList() {
    await redisClient.del("BLACKLIST");
  }
};

// src/http/middlewares/verify-token-jwt.ts
var import_jsonwebtoken2 = require("jsonwebtoken");
async function verifyTokenJWT(request, response) {
  const cookie = request.cookies;
  if (!cookie) {
    throw new AppError("Token n\xE3o recebido", 400);
  }
  const { token } = cookie;
  console.log(token);
  try {
    const { sub: idUser, role } = (0, import_jsonwebtoken2.verify)(token, env.JWT_SECRET_ACCESS_TOKEN);
    const storageInMemoryProvider = new RedisInMemoryProvider();
    const inBlackList = await storageInMemoryProvider.isTokenInBlackList(token);
    if (inBlackList) {
      throw new AppError("Token inv\xE1lido", 401);
    }
    request.user = {
      id: idUser,
      role,
      token
    };
  } catch (error) {
    return response.status(404).send({ message: "Cookie not found" });
  }
}

// src/usecases/users/send-forgot-password/send-forgot-password-usecase.ts
var import_config7 = require("dotenv/config");
var import_crypto2 = require("crypto");
var SendForgotPasswordUseCase = class {
  constructor(usersRepository, usersTokensRepository, dayjsDateProvider, sendMailProvider) {
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
    this.sendMailProvider = sendMailProvider;
  }
  async execute({
    email
  }) {
    const findUserByEmail = await this.usersRepository.findByEmail(email);
    if (!findUserByEmail) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
    }
    let pathTemplate = env.NODE_ENV === "development" ? "./views/emails/forgot-password.hbs" : "./build/views/emails/forgot-password.hbs";
    const token = (0, import_crypto2.randomUUID)();
    const expireDate = this.dayjsDateProvider.addHours(3);
    await this.usersTokensRepository.create({
      idUser: findUserByEmail.id,
      expireDate,
      token
    });
    let link = env.NODE_ENV === "development" ? `${env.APP_URL_FRONTEND_DEVELOPMENT}/reset-password?token=${token}` : `${env.APP_URL_FRONTEND_PRODUCTION}/reset-password?token=${token}`;
    await this.sendMailProvider.sendEmail(
      findUserByEmail.email,
      findUserByEmail.name,
      "Redefini\xE7\xE3o de Senha",
      link,
      pathTemplate,
      null
    );
  }
};

// src/usecases/factories/users/make-send-forgot-password-usecase.ts
async function makeSendForgotPassword() {
  const usersRepository = new PrismaUsersRepository();
  const usersTokensRepository = new PrismaTokensRepository();
  const dayjsDateProvider = new DayjsDateProvider();
  const sendMailProvider = new MailProvider();
  const sendForgotPasswordUseCase = new SendForgotPasswordUseCase(
    usersRepository,
    usersTokensRepository,
    dayjsDateProvider,
    sendMailProvider
  );
  return sendForgotPasswordUseCase;
}

// src/http/controllers/users/send-forgot-password/send-forgot-password.ts
var import_zod5 = require("zod");
async function SendForgotPassword(request, reply) {
  try {
    const userSchema = import_zod5.z.object({
      email: import_zod5.z.string().email()
    });
    const {
      email
    } = userSchema.parse(request.body);
    const sendForgotPasswordUsecase = await makeSendForgotPassword();
    await sendForgotPasswordUsecase.execute({
      email
    });
    return reply.status(200).send({ message: "Email with password reset link sent!" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/reset-password/reset-password-usecase.ts
var import_config8 = require("dotenv/config");
var import_bcrypt3 = require("bcrypt");
var ResetPasswordUseCase = class {
  constructor(usersRepository, usersTokensRepository, dayjsDateProvider) {
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({
    token,
    password
  }) {
    const findToken = await this.usersTokensRepository.findByToken(token);
    if (!findToken) {
      throw new AppError("Token n\xE3o encontrado", 404);
    }
    if (this.dayjsDateProvider.compareIfBefore(
      findToken.expireDate,
      this.dayjsDateProvider.dateNow()
    )) {
      throw new AppError("Token expirado", 401);
    }
    const user = await this.usersRepository.findById(findToken.idUser);
    const newPassword = await (0, import_bcrypt3.hash)(password, 8);
    await this.usersRepository.changePassword(user.id, newPassword);
    await this.usersTokensRepository.delete(findToken.id);
  }
};

// src/usecases/factories/users/make-reset-password-usecase.ts
async function makeResetPassword() {
  const usersRepository = new PrismaUsersRepository();
  const usersTokensRepository = new PrismaTokensRepository();
  const dayjsDateProvider = new DayjsDateProvider();
  const resetPasswordUseCase = new ResetPasswordUseCase(
    usersRepository,
    usersTokensRepository,
    dayjsDateProvider
  );
  return resetPasswordUseCase;
}

// src/http/controllers/users/reset-password/reset-password-controller.ts
var import_zod6 = require("zod");
async function ResetPassword(request, reply) {
  try {
    const userSchemaBody = import_zod6.z.object({
      password: import_zod6.z.string().min(6)
    });
    const userSchemaQuery = import_zod6.z.object({
      token: import_zod6.z.string()
    });
    const {
      password
    } = userSchemaBody.parse(request.body);
    const {
      token
    } = userSchemaQuery.parse(request.query);
    const resetPasswordUseCase = await makeResetPassword();
    await resetPasswordUseCase.execute({
      password,
      token
    });
    return reply.status(200).send({ message: "Password reset successfully" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/find/find-user-usecase.ts
var import_config9 = require("dotenv/config");
var FindUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    id
  }) {
    const findUserExist = await this.usersRepository.findById(id);
    if (!findUserExist) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
    }
    const getSafeUser = await this.usersRepository.getUserSecurity(findUserExist.id);
    return {
      user: getSafeUser
    };
  }
};

// src/usecases/factories/users/make-find-user-usecase.ts
async function makeFindUser() {
  const usersRepository = new PrismaUsersRepository();
  const findUserUseCase = new FindUserUseCase(usersRepository);
  return findUserUseCase;
}

// src/http/controllers/users/find/find-user-controller.ts
var import_zod7 = require("zod");
async function FindUser(request, reply) {
  try {
    const userSchema = import_zod7.z.object({
      id: import_zod7.z.string().uuid()
    });
    const {
      id
    } = userSchema.parse(request.params);
    const findUserUseCase = await makeFindUser();
    const { user } = await findUserUseCase.execute({
      id
    });
    return reply.status(200).send(user);
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/delete/delete-user-usecase.ts
var import_bcrypt4 = require("bcrypt");
var import_config10 = require("dotenv/config");
var DeleteUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    id,
    password
  }) {
    const findUserExist = await this.usersRepository.findById(id);
    if (!findUserExist) {
      throw new AppError("User not found", 404);
    }
    const passwordMatch = await (0, import_bcrypt4.compare)(password, findUserExist.password);
    if (!passwordMatch) {
      throw new AppError("Password not match", 401);
    }
    await this.usersRepository.delete(findUserExist.id);
  }
};

// src/usecases/factories/users/make-delete-user-usecase.ts
async function makeDeleteUser() {
  const usersRepository = new PrismaUsersRepository();
  const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
  return deleteUserUseCase;
}

// src/http/controllers/users/delete/delete-user-controller.ts
var import_zod8 = require("zod");
async function DeleteUser(request, reply) {
  try {
    const userParams = import_zod8.z.object({
      id: import_zod8.z.string().uuid()
    });
    const userBodySchema = import_zod8.z.object({
      password: import_zod8.z.string().min(6, "M\xEDnimo 6 caracteres")
    });
    const {
      id
    } = userParams.parse(request.params);
    const { password } = userBodySchema.parse(request.body);
    const deleteUserUseCase = await makeDeleteUser();
    await deleteUserUseCase.execute({
      id,
      password
    });
    return reply.status(200).send({ message: "Usu\xE1rio deletado com sucesso" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/update-full/update-user-usecase.ts
var import_config11 = require("dotenv/config");
var UpdateUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    id,
    name,
    email,
    phone,
    dateBirth,
    cpf
  }) {
    const findUserExists = await this.usersRepository.getUserSecurity(id);
    if (!findUserExists) {
      throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
    }
    let emailActive = findUserExists.emailActive;
    const findUserByEmail = await this.usersRepository.findByEmail(email);
    if (findUserByEmail) {
      if (findUserByEmail.id !== findUserExists.id) {
        throw new AppError("Email j\xE1 cadastrado", 409);
      }
      if (email !== findUserExists.email) {
        emailActive = false;
      }
    }
    if (cpf) {
      const findUserByCPF = await this.usersRepository.findByCPF(cpf);
      if (findUserByCPF) {
        if (findUserExists.id !== findUserByCPF.id) {
          throw new AppError("CPF j\xE1 cadastrado", 409);
        }
      }
    }
    if (phone) {
      const findUserByPhone = await this.usersRepository.findByPhone(phone);
      if (findUserByPhone) {
        if (findUserExists.id !== findUserByPhone.id) {
          throw new AppError("Phone j\xE1 cadastrado", 409);
        }
      }
    }
    await this.usersRepository.updateIdCostumerPayment(findUserExists.id, null);
    const userUpdated = await this.usersRepository.update({
      id,
      name,
      email,
      phone,
      dateBirth,
      cpf,
      emailActive
    });
    return {
      user: userUpdated
    };
  }
};

// src/usecases/factories/users/make-update-user-usecase.ts
async function makeUpdateUser() {
  const usersRepository = new PrismaUsersRepository();
  const updateUserUseCase = new UpdateUserUseCase(usersRepository);
  return updateUserUseCase;
}

// src/http/controllers/users/update-full/update-user-controller.ts
var import_cpf_cnpj_validator = require("cpf-cnpj-validator");
var import_zod9 = require("zod");
async function UpdateUser(request, reply) {
  try {
    const userSchemaBody = import_zod9.z.object({
      name: import_zod9.z.string().min(4),
      cpf: import_zod9.z.string().optional().nullable(),
      email: import_zod9.z.string().email(),
      phone: import_zod9.z.string().optional().nullable(),
      dateBirth: import_zod9.z.string().optional().nullable()
    });
    const userSchemaParams = import_zod9.z.object({
      id: import_zod9.z.string().uuid()
    });
    const {
      id
    } = userSchemaParams.parse(request.params);
    const {
      name,
      phone,
      dateBirth,
      cpf,
      email
    } = userSchemaBody.parse(request.body);
    const updateUserUseCase = await makeUpdateUser();
    const { user } = await updateUserUseCase.execute({
      id,
      name,
      phone,
      email,
      dateBirth: dateBirth ? new Date(dateBirth) : null,
      cpf: import_cpf_cnpj_validator.cpf.format(cpf) ? import_cpf_cnpj_validator.cpf.format(cpf) : null
    });
    return reply.status(200).send(user);
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/logout/logout-usecase.ts
var import_config12 = require("dotenv/config");
var LogoutUseCase = class {
  constructor(usersTokensRepository, cacheProvider, dayjsDateProvider) {
    this.usersTokensRepository = usersTokensRepository;
    this.cacheProvider = cacheProvider;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({
    token,
    refreshToken,
    idUser
  }) {
    const userToken = await this.usersTokensRepository.findByUserAndToken(idUser, refreshToken);
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

// src/usecases/factories/users/make-logout-user-usecase.ts
async function makeLogoutUser() {
  const usersTokensRepository = new PrismaTokensRepository();
  const redisStorageProvider = new RedisInMemoryProvider();
  const dayjsDateProvider = new DayjsDateProvider();
  const logoutUseCase = new LogoutUseCase(
    usersTokensRepository,
    redisStorageProvider,
    dayjsDateProvider
  );
  return logoutUseCase;
}

// src/http/controllers/users/logout/logout-user-controller.ts
var import_zod10 = require("zod");
async function LogoutUser(request, reply) {
  try {
    const userSchema = import_zod10.z.object({
      refreshToken: import_zod10.z.string()
    });
    const {
      refreshToken
    } = userSchema.parse(request.body);
    const logoutUserUseCase = await makeLogoutUser();
    await logoutUserUseCase.execute({
      refreshToken,
      idUser: request.user.id,
      token: request.user.token
    });
    return reply.status(200).send({ message: "Logout feito com sucesso" });
  } catch (error) {
    throw error;
  }
}

// src/http/middlewares/verify-user-role.ts
function verifyUserRole(verifyToleRoleOne, verifyToleRoleTwo, verifyToleRoleThree, verifyToleRoleFour) {
  return async (request, reply) => {
    const { role } = request.user;
    if (role !== verifyToleRoleOne && role !== verifyToleRoleTwo && role !== verifyToleRoleThree && role !== verifyToleRoleFour) {
      return reply.status(401).send({ message: "Unauthorized." });
    }
  };
}

// src/usecases/users/email-exists/email-exists-users.usecase.ts
var import_config13 = require("dotenv/config");
var EmailVerifyUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    email
  }) {
    const findUserExist = await this.usersRepository.findByEmail(email);
    if (findUserExist) {
      return true;
    }
    return false;
  }
};

// src/usecases/factories/users/make-email-exists-users-usecases.ts
async function makeVerifyEmailUser() {
  const usersRepository = new PrismaUsersRepository();
  const emailVerifyUserUseCase = new EmailVerifyUserUseCase(usersRepository);
  return emailVerifyUserUseCase;
}

// src/http/controllers/users/email-exists/email-exists-controller.ts
var import_zod11 = require("zod");
async function EmailExists(request, reply) {
  try {
    const userSchema = import_zod11.z.object({
      email: import_zod11.z.string().email()
    });
    const {
      email
    } = userSchema.parse(request.query);
    const findUserUseCase = await makeVerifyEmailUser();
    const emailExists = await findUserUseCase.execute({
      email
    });
    return reply.status(200).send(emailExists);
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/refresh-token/refresh-token-usecase.ts
var import_config14 = require("dotenv/config");
var import_jsonwebtoken3 = require("jsonwebtoken");
var RefreshTokenUseCase = class {
  constructor(usersTokensRepository, dayjsDateProvider) {
    this.usersTokensRepository = usersTokensRepository;
    this.dayjsDateProvider = dayjsDateProvider;
  }
  async execute({
    token
  }) {
    const userToken = await this.usersTokensRepository.findByToken(token);
    if (!userToken) {
      throw new AppError("Refresh token n\xE3o encontrado", 404);
    }
    const verifyToken = this.dayjsDateProvider.compareIfBefore(
      userToken.expireDate,
      this.dayjsDateProvider.dateNow()
    );
    if (verifyToken) {
      await this.usersTokensRepository.delete(userToken.id);
      throw new AppError("Refresh token expirado", 401);
    }
    (0, import_jsonwebtoken3.verify)(token, env.JWT_SECRET_REFRESH_TOKEN);
    const newAccessToken = (0, import_jsonwebtoken3.sign)({}, env.JWT_SECRET_ACCESS_TOKEN, {
      subject: userToken.idUser,
      expiresIn: env.JWT_EXPIRES_IN_ACCESS_TOKEN
    });
    return {
      accessToken: newAccessToken
    };
  }
};

// src/usecases/factories/users/make-refresh-token-usecase.ts
async function makeRefreshToken() {
  const usersTokensRepository = new PrismaTokensRepository();
  const dayjsDateProvider = new DayjsDateProvider();
  const refreshTokenUseCase = new RefreshTokenUseCase(
    usersTokensRepository,
    dayjsDateProvider
  );
  return refreshTokenUseCase;
}

// src/http/controllers/users/refresh-token/refresh-token-users-controller.ts
var import_zod12 = require("zod");
async function RefreshToken(request, reply) {
  try {
    const refreshTokenBodySchema = import_zod12.z.object({
      refreshToken: import_zod12.z.string()
    });
    const {
      refreshToken
    } = refreshTokenBodySchema.parse(request.body);
    const refreshTokenUseCase = await makeRefreshToken();
    const updatedTokens = await refreshTokenUseCase.execute({ token: refreshToken });
    return reply.status(200).send(updatedTokens);
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/create-new-password-with-old-password/change-password-usecase.ts
var import_config15 = require("dotenv/config");
var import_bcrypt5 = require("bcrypt");
var CreateNewPasswordByOldPassword = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    idUser,
    newPassword,
    oldPassword
  }) {
    const findUserExist = await this.usersRepository.findById(idUser);
    if (!findUserExist) {
      throw new AppError("Usu\xE1rio n\xE3o existe", 404);
    }
    const passwordOldMatch = await (0, import_bcrypt5.compare)(oldPassword, findUserExist.password);
    if (!passwordOldMatch) {
      throw new AppError("Senha antiga n\xE3o incorreta", 401);
    }
    const createNewPassword = await (0, import_bcrypt5.hash)(newPassword, 8);
    await this.usersRepository.changePassword(
      findUserExist.id,
      createNewPassword
    );
  }
};

// src/usecases/factories/users/make-change-password-by-old-password-usecase.ts
async function makeCreateNewPasswordByOldPassword() {
  const usersRepository = new PrismaUsersRepository();
  const createNewPasswordByOldPassword = new CreateNewPasswordByOldPassword(
    usersRepository
  );
  return createNewPasswordByOldPassword;
}

// src/http/controllers/users/create-new-password-with-old-password/change-password-controller.ts
var import_zod13 = require("zod");
async function CreateNewPasswordByOldPassword2(request, reply) {
  try {
    const userSchemaBody = import_zod13.z.object({
      oldPassword: import_zod13.z.string().min(6, "M\xEDnimo 6 caracteres"),
      newPassword: import_zod13.z.string().min(6, "M\xEDnimo 6 caracteres")
    });
    const userSchemaParams = import_zod13.z.object({
      id: import_zod13.z.string().uuid("Id inv\xE1lido")
    });
    const { id } = userSchemaParams.parse(request.params);
    const { oldPassword, newPassword } = userSchemaBody.parse(
      request.body
    );
    const createNewPasswordUseCase = await makeCreateNewPasswordByOldPassword();
    await createNewPasswordUseCase.execute({
      idUser: id,
      oldPassword,
      newPassword
    });
    return reply.status(200).send({ message: "Senha alterada com sucesso" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/send-verification-email/send-verification-email-users-usecase.ts
var import_crypto3 = require("crypto");
var import_config16 = require("dotenv/config");
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
    const token = (0, import_crypto3.randomUUID)();
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

// src/usecases/factories/users/make-send-verification-email-user-usecase.ts
async function makeSendVerificationEmail() {
  const usersRepository = new PrismaUsersRepository();
  const sendMailProvider = new MailProvider();
  const usersTokensRepository = new PrismaTokensRepository();
  const dayjsDateProvider = new DayjsDateProvider();
  const sendVerificationEmailUserUseCase = new SendVerificationEmailUserUseCase(
    usersRepository,
    sendMailProvider,
    usersTokensRepository,
    dayjsDateProvider
  );
  return sendVerificationEmailUserUseCase;
}

// src/http/controllers/users/send-verification-email/send-verification-email-users-controller.ts
var import_zod14 = require("zod");
async function SendVerificationEmail(request, reply) {
  try {
    const userSchema = import_zod14.z.object({
      email: import_zod14.z.string().email()
    });
    const { email } = userSchema.parse(request.params);
    const sendEmailVerificationUserUsecase = await makeSendVerificationEmail();
    await sendEmailVerificationUserUsecase.execute({
      email
    });
    return reply.status(200).send({ message: "E-mail verification sent successfully" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/users/delete-all-tokens/refresh-token-usecase.ts
var import_config17 = require("dotenv/config");
var DeleteAllTokensUseCase = class {
  constructor(usersTokensRepository) {
    this.usersTokensRepository = usersTokensRepository;
  }
  async execute() {
    await this.usersTokensRepository.deleteAll();
  }
};

// src/usecases/factories/users/make-delete-all-token-usecase.ts
async function makeDeleteAllToken() {
  const usersTokensRepository = new PrismaTokensRepository();
  const deleteAllTokensUseCase = new DeleteAllTokensUseCase(
    usersTokensRepository
  );
  return deleteAllTokensUseCase;
}

// src/http/controllers/users/delete-all-tokens/delete-all-tokens-users-controller.ts
async function DeleteAllTokens(request, reply) {
  try {
    const refreshTokenUseCase = await makeDeleteAllToken();
    await refreshTokenUseCase.execute();
    return reply.status(200).send({ message: "All tokens deleted" });
  } catch (error) {
    throw error;
  }
}

// src/http/controllers/users/routes.ts
async function usersRoutes(fastifyApp) {
  fastifyApp.post("/", RegisterUser);
  fastifyApp.post("/login", LoginUser);
  fastifyApp.get("/email-exists", EmailExists);
  fastifyApp.post("/refresh-token", RefreshToken);
  fastifyApp.post("/logout", { onRequest: [verifyTokenJWT] }, LogoutUser);
  fastifyApp.patch("/verify-email", VerifyEmail);
  fastifyApp.post("/forgot-password", SendForgotPassword);
  fastifyApp.patch("/password-update/:id", { onRequest: [verifyTokenJWT] }, CreateNewPasswordByOldPassword2);
  fastifyApp.patch("/reset-password", ResetPassword);
  fastifyApp.get("/:id", { onRequest: [verifyTokenJWT] }, FindUser);
  fastifyApp.put("/:id", { onRequest: [verifyTokenJWT] }, UpdateUser);
  fastifyApp.delete("/:id", { onRequest: [verifyTokenJWT] }, DeleteUser);
  fastifyApp.post(
    "/send-verification-email/:email",
    {
      onRequest: [
        verifyTokenJWT,
        verifyUserRole("GUEST", "ADMIN", "SUPER")
      ]
    },
    SendVerificationEmail
  );
  fastifyApp.delete("/delete-all-tokens", { onRequest: [verifyTokenJWT, verifyUserRole("SUPER")] }, DeleteAllTokens);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  usersRoutes
});
