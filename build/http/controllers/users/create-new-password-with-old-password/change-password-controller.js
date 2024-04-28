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

// src/http/controllers/users/create-new-password-with-old-password/change-password-controller.ts
var change_password_controller_exports = {};
__export(change_password_controller_exports, {
  CreateNewPasswordByOldPassword: () => CreateNewPasswordByOldPassword2
});
module.exports = __toCommonJS(change_password_controller_exports);

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  // log: env.NODE_ENV === 'development' ? ['query'] : [],
});

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

// src/usecases/users/create-new-password-with-old-password/change-password-usecase.ts
var import_config = require("dotenv/config");
var import_bcrypt = require("bcrypt");

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/users/create-new-password-with-old-password/change-password-usecase.ts
var CreateNewPasswordByOldPassword = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    userId,
    newPassword,
    oldPassword
  }) {
    const findUserExist = await this.usersRepository.findById(userId);
    if (!findUserExist) {
      throw new AppError("Usu\xE1rio n\xE3o existe", 404);
    }
    const passwordOldMatch = await (0, import_bcrypt.compare)(oldPassword, findUserExist.password);
    if (!passwordOldMatch) {
      throw new AppError("Senha antiga n\xE3o incorreta", 401);
    }
    const createNewPassword = await (0, import_bcrypt.hash)(newPassword, 8);
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
var import_zod = require("zod");
async function CreateNewPasswordByOldPassword2(request, reply) {
  try {
    const userSchemaBody = import_zod.z.object({
      oldPassword: import_zod.z.string().min(6, "M\xEDnimo 6 caracteres"),
      newPassword: import_zod.z.string().min(6, "M\xEDnimo 6 caracteres")
    });
    const userSchemaParams = import_zod.z.object({
      id: import_zod.z.string().uuid("Id inv\xE1lido")
    });
    const { id } = userSchemaParams.parse(request.params);
    const { oldPassword, newPassword } = userSchemaBody.parse(
      request.body
    );
    const createNewPasswordUseCase = await makeCreateNewPasswordByOldPassword();
    await createNewPasswordUseCase.execute({
      userId: id,
      oldPassword,
      newPassword
    });
    return reply.status(200).send({ message: "Senha alterada com sucesso" });
  } catch (error) {
    throw error;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateNewPasswordByOldPassword
});
