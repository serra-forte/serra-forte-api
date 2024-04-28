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

// src/http/controllers/users/delete-all-tokens/delete-all-tokens-users-controller.ts
var delete_all_tokens_users_controller_exports = {};
__export(delete_all_tokens_users_controller_exports, {
  DeleteAllTokens: () => DeleteAllTokens
});
module.exports = __toCommonJS(delete_all_tokens_users_controller_exports);

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  // log: env.NODE_ENV === 'development' ? ['query'] : [],
});

// src/repositories/prisma/prisma-tokens-repository.ts
var PrismaTokensRepository = class {
  async findTokenAuth(userId, auth) {
    const token = await prisma.token.findFirst({
      where: { userId, token: auth }
    });
    return token;
  }
  async deleteByUser(userId) {
    await prisma.token.deleteMany({
      where: {
        userId
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
        userId: true,
        id: true,
        user: true
      }
    });
    return tokenData;
  }
  async findByUserId(userId) {
    const token = await prisma.token.findFirst({ where: { userId } });
    return token;
  }
  async findByUserAndToken(userId, token) {
    const tokenData = await prisma.token.findFirst({
      where: { userId, token },
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

// src/usecases/users/delete-all-tokens/refresh-token-usecase.ts
var import_config = require("dotenv/config");
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeleteAllTokens
});
