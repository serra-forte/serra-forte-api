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

// src/http/controllers/address/update-full/update-address-controlle.ts
var update_address_controlle_exports = {};
__export(update_address_controlle_exports, {
  UpdateAddress: () => UpdateAddress
});
module.exports = __toCommonJS(update_address_controlle_exports);

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

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

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
var import_zod = require("zod");
async function UpdateAddress(request, reply) {
  try {
    const userSchema = import_zod.z.object({
      id: import_zod.z.string().uuid(),
      user: import_zod.z.object({
        id: import_zod.z.string().uuid().optional()
      }).optional(),
      announcement: import_zod.z.object({
        id: import_zod.z.string().uuid().optional()
      }).optional(),
      street: import_zod.z.string(),
      num: import_zod.z.number().nonnegative(),
      district: import_zod.z.string(),
      country: import_zod.z.string(),
      city: import_zod.z.string(),
      state: import_zod.z.string(),
      zipCode: import_zod.z.number().nonnegative(),
      complement: import_zod.z.string().optional(),
      reference: import_zod.z.string().optional()
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UpdateAddress
});
