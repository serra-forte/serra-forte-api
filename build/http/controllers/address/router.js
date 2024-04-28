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

// src/http/controllers/address/router.ts
var router_exports = {};
__export(router_exports, {
  addressRoutes: () => addressRoutes
});
module.exports = __toCommonJS(router_exports);

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

// src/config/redis-connection.ts
var import_config2 = require("dotenv/config");
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

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/http/middlewares/verify-token-jwt.ts
var import_jsonwebtoken = require("jsonwebtoken");
async function verifyTokenJWT(request, response) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError("Token n\xE3o recebido", 400);
  }
  const [, token] = authHeader.split(" ");
  try {
    const { sub: userId, role } = (0, import_jsonwebtoken.verify)(token, env.JWT_SECRET_ACCESS_TOKEN);
    const storageInMemoryProvider = new RedisInMemoryProvider();
    const inBlackList = await storageInMemoryProvider.isTokenInBlackList(token);
    if (inBlackList) {
      throw new AppError("Token inv\xE1lido", 401);
    }
    request.user = {
      id: userId,
      role,
      token
    };
  } catch (error) {
    throw new AppError("Token expirado", 401);
  }
}

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  // log: env.NODE_ENV === 'development' ? ['query'] : [],
});

// src/repositories/prisma/prisma-addresses-repository.ts
var PrismaAddressesRepository = class {
  async deleteById(id) {
    await prisma.address.delete({
      where: { id }
    });
  }
  async create(data) {
    const address = await prisma.address.create({ data });
    return address;
  }
  async findById(id) {
    const address = await prisma.address.findUnique({ where: { id } });
    return address;
  }
  async updateById(data) {
    const address = await prisma.address.update({ where: { id: data.id }, data });
    return address;
  }
};

// src/repositories/prisma/prisma-users-repository.ts
var PrismaUsersRepository = class {
  async updateExpireRefundCredit({
    ListUserDifferentToPacientUseCase,
    date
  }) {
    await prisma.user.update({
      where: {
        id: ListUserDifferentToPacientUseCase
      },
      data: {
        expireRefundCredit: date
      }
    });
  }
  async updateRefundCredit(ListUserDifferentToPacientUseCase, value) {
    const user = await prisma.user.update({
      where: {
        id: ListUserDifferentToPacientUseCase
      },
      data: {
        refundCredit: value
      }
    });
    const refundCreditNumber = Number(user.refundCredit);
    return refundCreditNumber;
  }
  async findByPhone(phone) {
    const user = await prisma.user.findUnique({
      where: { phone },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
      }
    });
    return user;
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
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
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
        name: true,
        cpf: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
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
  async updateIdCostumerPayment(ListUserDifferentToPacientUseCase, idCustomerPayment) {
    const user = await prisma.user.update({
      where: {
        id: ListUserDifferentToPacientUseCase
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
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
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
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
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
          email: true,
          emailActive: true,
          dateBirth: true,
          phone: true,
          role: true,
          refundCredit: true,
          expireRefundCredit: true,
          createdAt: true
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
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        createdAt: true
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
        password: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
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
        password: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        createdAt: true
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
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        createdAt: true
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

// src/usecases/address/create/create-address-usecase.ts
var CreateAddressUseCase = class {
  constructor(addressRepository, usersRepository) {
    this.addressRepository = addressRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    street,
    num,
    city,
    state,
    zipCode,
    complement,
    reference,
    country,
    district,
    idAnnouncement,
    userId
  }) {
    if (userId) {
      const findUserExist = await this.usersRepository.findById(userId);
      if (!findUserExist) {
        throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
      }
    }
    const address = await this.addressRepository.create({
      street,
      num,
      city,
      state,
      zipCode,
      complement,
      reference,
      country,
      district,
      idAnnouncement,
      userId
    });
    return address;
  }
};

// src/usecases/factories/address/make-create-address-usecase.ts
async function makeCreateAddress() {
  const addressRepository = new PrismaAddressesRepository();
  const usersRepository = new PrismaUsersRepository();
  const createAddressUseCase = new CreateAddressUseCase(addressRepository, usersRepository);
  return createAddressUseCase;
}

// src/http/controllers/address/create/create-address-controlle.ts
var import_zod2 = require("zod");
async function CreateAddress(request, reply) {
  try {
    const userSchema = import_zod2.z.object({
      user: import_zod2.z.object({
        id: import_zod2.z.string().uuid().optional()
      }).optional(),
      announcement: import_zod2.z.object({
        id: import_zod2.z.string().uuid().optional()
      }).optional(),
      street: import_zod2.z.string(),
      num: import_zod2.z.number().nonnegative(),
      district: import_zod2.z.string(),
      country: import_zod2.z.string(),
      city: import_zod2.z.string(),
      state: import_zod2.z.string(),
      zipCode: import_zod2.z.number().nonnegative(),
      complement: import_zod2.z.string().optional(),
      reference: import_zod2.z.string().optional()
    });
    const {
      announcement,
      user,
      street,
      num,
      district,
      country,
      city,
      state,
      zipCode,
      complement,
      reference
    } = userSchema.parse(request.body);
    const createAddressUseCase = await makeCreateAddress();
    const address = await createAddressUseCase.execute({
      userId: user?.id,
      idAnnouncement: announcement?.id,
      street,
      num,
      district,
      country,
      city,
      state,
      zipCode,
      complement,
      reference
    });
    return reply.status(200).send(address);
  } catch (error) {
    throw error;
  }
}

// src/usecases/address/update-full/update-address-usecase.ts
var UpdateAddressByIdUseCase = class {
  constructor(addressRepository, usersRepository) {
    this.addressRepository = addressRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    id,
    street,
    num,
    country,
    district,
    zipCode,
    idAnnouncement,
    userId,
    city,
    state,
    complement,
    reference
  }) {
    if (userId) {
      const findUserExist = await this.usersRepository.findById(userId);
      if (!findUserExist) {
        throw new AppError("Usu\xE1rio n\xE3o encontrado", 404);
      }
    }
    const checkAddressExists = await this.addressRepository.findById(id);
    if (!checkAddressExists) {
      throw new AppError("Endere\xE7o n\xE3o encontrado", 404);
    }
    const address = await this.addressRepository.updateById({
      id,
      street,
      num,
      country,
      district,
      zipCode,
      city,
      state,
      complement,
      reference
    });
    return address;
  }
};

// src/usecases/factories/address/make-update-address-usecase.ts
async function makeUpdateAddress() {
  const addressRepository = new PrismaAddressesRepository();
  const usersRepository = new PrismaUsersRepository();
  const updateAddressByIdUseCase = new UpdateAddressByIdUseCase(addressRepository, usersRepository);
  return updateAddressByIdUseCase;
}

// src/http/controllers/address/update-full/update-address-controlle.ts
var import_zod3 = require("zod");
async function UpdateAddress(request, reply) {
  try {
    const userSchema = import_zod3.z.object({
      id: import_zod3.z.string().uuid(),
      user: import_zod3.z.object({
        id: import_zod3.z.string().uuid().optional()
      }).optional(),
      announcement: import_zod3.z.object({
        id: import_zod3.z.string().uuid().optional()
      }).optional(),
      street: import_zod3.z.string(),
      num: import_zod3.z.number().nonnegative(),
      district: import_zod3.z.string(),
      country: import_zod3.z.string(),
      city: import_zod3.z.string(),
      state: import_zod3.z.string(),
      zipCode: import_zod3.z.number().nonnegative(),
      complement: import_zod3.z.string().optional(),
      reference: import_zod3.z.string().optional()
    });
    const {
      id,
      announcement,
      user,
      street,
      num,
      district,
      country,
      city,
      state,
      zipCode,
      complement,
      reference
    } = userSchema.parse(request.body);
    const updateAddressUseCase = await makeUpdateAddress();
    const address = await updateAddressUseCase.execute({
      id,
      userId: user?.id,
      idAnnouncement: announcement?.id,
      street,
      num,
      district,
      country,
      city,
      state,
      zipCode,
      complement,
      reference
    });
    return reply.status(200).send(address);
  } catch (error) {
    throw error;
  }
}

// src/http/controllers/address/router.ts
async function addressRoutes(fastifyApp) {
  fastifyApp.addHook("onRequest", verifyTokenJWT);
  fastifyApp.post("/", CreateAddress);
  fastifyApp.put("/", UpdateAddress);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addressRoutes
});
