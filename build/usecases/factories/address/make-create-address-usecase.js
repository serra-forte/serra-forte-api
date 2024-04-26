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

// src/usecases/factories/address/make-create-address-usecase.ts
var make_create_address_usecase_exports = {};
__export(make_create_address_usecase_exports, {
  makeCreateAddress: () => makeCreateAddress
});
module.exports = __toCommonJS(make_create_address_usecase_exports);

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
var import_client2 = require("@prisma/client");
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

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
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
    idUser
  }) {
    if (idUser) {
      const findUserExist = await this.usersRepository.findById(idUser);
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
      idUser
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeCreateAddress
});
