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

// src/http/controllers/admin/update-user-by-admin/update-user-by-admin-controller.ts
var update_user_by_admin_controller_exports = {};
__export(update_user_by_admin_controller_exports, {
  UpdateUserByAdmin: () => UpdateUserByAdmin
});
module.exports = __toCommonJS(update_user_by_admin_controller_exports);

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

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/admin/update-user-by-admin/update-user-by-admin-usecase.ts
var import_bcrypt = require("bcrypt");
var import_config = require("dotenv/config");
var UpdateUserByAdminUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    userId,
    idCamping,
    password,
    email,
    name,
    phone
  }) {
    const findUserExist = await this.usersRepository.findById(userId);
    if (!findUserExist) {
      throw new AppError("User not found", 404);
    }
    let criptingPassword = "";
    if (password) {
      criptingPassword = await (0, import_bcrypt.hash)(password, 8);
    }
    const user = await this.usersRepository.update({
      id: userId,
      idCamping: idCamping || void 0,
      password: password ? criptingPassword : void 0,
      email: email || void 0,
      name: name || void 0,
      phone: phone || void 0
    });
    return user;
  }
};

// src/usecases/factories/admins/make-update-user-by-admin-usecase.ts
async function makeUpdateUserByAdmin() {
  const usersRepository = new PrismaUsersRepository();
  const updateUserByAdminUseCase = new UpdateUserByAdminUseCase(
    usersRepository
  );
  return updateUserByAdminUseCase;
}

// src/http/controllers/admin/update-user-by-admin/update-user-by-admin-controller.ts
var import_zod = require("zod");
async function UpdateUserByAdmin(request, reply) {
  try {
    const userSchema = import_zod.z.object({
      id: import_zod.z.string().uuid(),
      name: import_zod.z.string().min(4).optional().nullable(),
      email: import_zod.z.string().email().optional().nullable(),
      password: import_zod.z.string().min(6).nullable().optional(),
      phone: import_zod.z.string().optional().nullable(),
      camping: import_zod.z.object({
        id: import_zod.z.string().uuid().optional().nullable()
      })
    });
    const { id, email, name, password, camping, phone } = userSchema.parse(request.body);
    const updateUseCase = await makeUpdateUserByAdmin();
    const updateUser = await updateUseCase.execute({
      userId: id,
      email,
      phone,
      name,
      password,
      idCamping: camping.id
    });
    return reply.status(201).send(updateUser);
  } catch (error) {
    throw error;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UpdateUserByAdmin
});
