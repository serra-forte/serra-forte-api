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

// src/http/controllers/categories/routes.ts
var routes_exports = {};
__export(routes_exports, {
  categoriesRoutes: () => categoriesRoutes
});
module.exports = __toCommonJS(routes_exports);

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

// src/http/middlewares/verify-user-role.ts
function verifyUserRole(verifyToleRoleOne, verifyToleRoleTwo, verifyToleRoleThree, verifyToleRoleFour) {
  return async (request, reply) => {
    const { role } = request.user;
    if (role !== verifyToleRoleOne && role !== verifyToleRoleTwo && role !== verifyToleRoleThree && role !== verifyToleRoleFour) {
      return reply.status(401).send({ message: "Unauthorized." });
    }
  };
}

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  // log: env.NODE_ENV === 'development' ? ['query'] : [],
});

// src/repositories/prisma/prisma-categories-repository.ts
var PrismaCategoryRepository = class {
  async listByType(type) {
    return prisma.category.findMany({
      where: { type }
    });
  }
  async create(data) {
    const category = await prisma.category.create({ data });
    return category;
  }
  async list() {
    return prisma.category.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        description: true,
        attractions: true
      }
    });
  }
  async findById(id) {
    const category = await prisma.category.findUnique({
      where: { id }
    });
    return category;
  }
  async updateById(data) {
    const category = await prisma.category.update({
      where: { id: data.id },
      data
    });
    return category;
  }
  async deleteById(id) {
    await prisma.category.delete({
      where: { id }
    });
  }
};

// src/usecases/categories/create/create-categories-usecase.ts
var CreateCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({
    name,
    description,
    type
  }) {
    const category = await this.categoriesRepository.create({
      name,
      description,
      type
    });
    return category;
  }
};

// src/usecases/factories/categories/make-create-categories-usecase.ts
async function makeCreateCategory() {
  const categoryRepository = new PrismaCategoryRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(
    categoryRepository
  );
  return createCategoryUseCase;
}

// src/http/controllers/categories/create/create-categories-controller.ts
var import_zod2 = require("zod");
async function CreateCategory(request, reply) {
  try {
    const categorySchema = import_zod2.z.object({
      name: import_zod2.z.string().min(4),
      description: import_zod2.z.string().optional(),
      type: import_zod2.z.enum(["CAMPING", "ATTRACTION"])
    });
    const {
      name,
      description,
      type
    } = categorySchema.parse(request.body);
    const createCategoryUseCase = await makeCreateCategory();
    const category = await createCategoryUseCase.execute({
      name,
      description,
      type
    });
    return reply.status(200).send(category);
  } catch (error) {
    throw error;
  }
}

// src/usecases/categories/update/update-categories-usecase.ts
var UpdateCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({
    id,
    name,
    description,
    type
  }) {
    const category = await this.categoriesRepository.updateById({
      id,
      name,
      description,
      type
    });
    return category;
  }
};

// src/usecases/factories/categories/make-update-categories-usecase.ts
async function makeUpdateCategory() {
  const categoryRepository = new PrismaCategoryRepository();
  const updateCategoryUseCase = new UpdateCategoryUseCase(
    categoryRepository
  );
  return updateCategoryUseCase;
}

// src/http/controllers/categories/update/update-categories-controller.ts
var import_zod3 = require("zod");
async function UpdateCategory(request, reply) {
  try {
    const categorySchema = import_zod3.z.object({
      id: import_zod3.z.string().uuid(),
      name: import_zod3.z.string().min(4),
      description: import_zod3.z.string().optional(),
      type: import_zod3.z.enum(["CAMPING", "ATTRACTION"])
    });
    const {
      id,
      name,
      description,
      type
    } = categorySchema.parse(request.body);
    const updateCategoryUseCase = await makeUpdateCategory();
    const category = await updateCategoryUseCase.execute({
      id,
      name,
      description,
      type
    });
    return reply.status(200).send(category);
  } catch (error) {
    throw error;
  }
}

// src/usecases/categories/find-by-id/find-by-id-categories-usecase.ts
var FindCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({
    id
  }) {
    const findCategoryExist = await this.categoriesRepository.findById(id);
    if (!findCategoryExist) {
      throw new AppError("Category not found", 404);
    }
    return findCategoryExist;
  }
};

// src/usecases/factories/categories/make-find-by-id-categories-usecase.ts
async function makeFindCategory() {
  const categoryRepository = new PrismaCategoryRepository();
  const findCategoryUseCase = new FindCategoryUseCase(
    categoryRepository
  );
  return findCategoryUseCase;
}

// src/http/controllers/categories/find-by-id/find-by-id-categories-controller.ts
var import_zod4 = require("zod");
async function FindCategory(request, reply) {
  try {
    const categorySchema = import_zod4.z.object({
      id: import_zod4.z.string().uuid()
    });
    const {
      id
    } = categorySchema.parse(request.params);
    const findCategoryUseCase = await makeFindCategory();
    const category = await findCategoryUseCase.execute({
      id
    });
    return reply.status(200).send(category);
  } catch (error) {
    throw error;
  }
}

// src/usecases/categories/list/list-categories-usecase.ts
var ListCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute() {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
};

// src/usecases/factories/categories/make-list-categories-usecase.ts
async function makeListCategory() {
  const categoryRepository = new PrismaCategoryRepository();
  const listCategoryUseCase = new ListCategoryUseCase(
    categoryRepository
  );
  return listCategoryUseCase;
}

// src/http/controllers/categories/list/list-categories-controller.ts
async function ListCategory(request, reply) {
  try {
    const listCategoryUseCase = await makeListCategory();
    const categories = await listCategoryUseCase.execute();
    return reply.status(200).send(categories);
  } catch (error) {
    throw error;
  }
}

// src/usecases/categories/delete/delete-categories-usecase.ts
var DeleteCategoryUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({
    id
  }) {
    const findCategoryExist = await this.categoriesRepository.findById(id);
    if (!findCategoryExist) {
      throw new AppError("Category not found", 404);
    }
    await this.categoriesRepository.deleteById(id);
    return findCategoryExist;
  }
};

// src/usecases/factories/categories/make-delete-categories-usecase.ts
async function makeDeleteCategory() {
  const categoryRepository = new PrismaCategoryRepository();
  const deleteCategoryUseCase = new DeleteCategoryUseCase(
    categoryRepository
  );
  return deleteCategoryUseCase;
}

// src/http/controllers/categories/delete/delete-by-id-categories-controller.ts
var import_zod5 = require("zod");
async function DeleteCategory(request, reply) {
  try {
    const categorySchema = import_zod5.z.object({
      id: import_zod5.z.string().uuid()
    });
    const {
      id
    } = categorySchema.parse(request.params);
    const deleteCategoryUseCase = await makeDeleteCategory();
    await deleteCategoryUseCase.execute({
      id
    });
    return reply.status(200).send({ message: "Category deleted successfully" });
  } catch (error) {
    throw error;
  }
}

// src/usecases/categories/list-by-type/list-by-type-categories-usecase.ts
var ListCategoryByTypeUseCase = class {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async execute({ type }) {
    const categories = await this.categoriesRepository.listByType(type);
    return categories;
  }
};

// src/usecases/factories/categories/make-list-by-type-categories-usecase.ts
async function makeListCategoryByType() {
  const categoryRepository = new PrismaCategoryRepository();
  const listCategoryByTypeUseCase = new ListCategoryByTypeUseCase(
    categoryRepository
  );
  return listCategoryByTypeUseCase;
}

// src/http/controllers/categories/list-by-type/list-by-type-categories-controller.ts
var import_zod6 = require("zod");
async function ListCategoryByType(request, reply) {
  try {
    const categorySchema = import_zod6.z.object({
      type: import_zod6.z.enum(["CAMPING", "ATTRACTION"])
    });
    const {
      type
    } = categorySchema.parse(request.params);
    const listCategoryByTypeUseCase = await makeListCategoryByType();
    const category = await listCategoryByTypeUseCase.execute({
      type
    });
    return reply.status(200).send(category);
  } catch (error) {
    throw error;
  }
}

// src/http/controllers/categories/routes.ts
async function categoriesRoutes(fastifyApp) {
  fastifyApp.post("/", {
    onRequest: [verifyTokenJWT, verifyUserRole("ADMIN", "SUPER")]
  }, CreateCategory);
  fastifyApp.get("/:id", {
    onRequest: [verifyTokenJWT, verifyUserRole("ADMIN", "SUPER")]
  }, FindCategory);
  fastifyApp.get("/", ListCategory);
  fastifyApp.get("/type/:type", ListCategoryByType);
  fastifyApp.put("/", {
    onRequest: [verifyTokenJWT, verifyUserRole("ADMIN", "SUPER")]
  }, UpdateCategory);
  fastifyApp.delete("/:id", {
    onRequest: [verifyTokenJWT, verifyUserRole("ADMIN", "SUPER")]
  }, DeleteCategory);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  categoriesRoutes
});
