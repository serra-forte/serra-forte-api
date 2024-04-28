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

// src/http/controllers/users/update-full/update-user-controller.ts
var update_user_controller_exports = {};
__export(update_user_controller_exports, {
  UpdateUser: () => UpdateUser
});
module.exports = __toCommonJS(update_user_controller_exports);

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

// src/usecases/users/update-full/update-user-usecase.ts
var import_config = require("dotenv/config");

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/users/update-full/update-user-usecase.ts
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
var import_zod = require("zod");
async function UpdateUser(request, reply) {
  try {
    const userSchemaBody = import_zod.z.object({
      name: import_zod.z.string().min(4),
      cpf: import_zod.z.string().optional().nullable(),
      email: import_zod.z.string().email(),
      phone: import_zod.z.string().optional().nullable(),
      dateBirth: import_zod.z.string().optional().nullable()
    });
    const userSchemaParams = import_zod.z.object({
      id: import_zod.z.string().uuid()
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UpdateUser
});
