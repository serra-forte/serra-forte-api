"use strict";

// src/usecases/address/update-full/update-address-test.spec.ts
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

// src/usecases/address/update-full/update-address-test.spec.ts
var import_bcrypt = require("bcrypt");

// src/repositories/in-memory/in-memory-addresses-repository.ts
var import_client = require("@prisma/client");
var import_crypto2 = require("crypto");
var InMemoryAddressesRepository = class {
  constructor() {
    this.adresses = [];
  }
  async deleteById(id) {
    const addressIndex = this.adresses.findIndex((address) => address.id === id);
    this.adresses.splice(addressIndex, 1);
  }
  async create({
    id,
    street,
    num,
    district,
    city,
    state,
    country,
    zipCode,
    complement,
    reference,
    userId,
    idAnnouncement,
    idCamping
  }) {
    const address = {
      id: id ? id : (0, import_crypto2.randomUUID)(),
      userId: userId ? userId : null,
      idAnnouncement: idAnnouncement ? idAnnouncement : null,
      idCamping: idCamping ? idCamping : null,
      street,
      num: new import_client.Prisma.Decimal(num),
      district,
      city,
      state,
      country,
      zipCode: new import_client.Prisma.Decimal(zipCode),
      complement: complement ? complement : null,
      reference: reference ? reference : null
    };
    this.adresses.push(address);
    return address;
  }
  async findById(id) {
    const address = this.adresses.find((address2) => address2.id === id);
    if (!address) {
      return null;
    }
    return address;
  }
  async updateById({
    id,
    num,
    city,
    complement,
    country,
    district,
    reference,
    state,
    street,
    zipCode
  }) {
    const addressIndex = this.adresses.findIndex((address) => address.id === id);
    this.adresses[addressIndex].num = num;
    this.adresses[addressIndex].city = city;
    this.adresses[addressIndex].complement = complement;
    this.adresses[addressIndex].country = country;
    this.adresses[addressIndex].district = district;
    this.adresses[addressIndex].reference = reference;
    this.adresses[addressIndex].state = state;
    this.adresses[addressIndex].street = street;
    this.adresses[addressIndex].zipCode = zipCode;
    return this.adresses[addressIndex];
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

// src/usecases/address/update-full/update-address-test.spec.ts
var addressRepositoryInMemory;
var usersRepositoryInMemory;
var stu;
(0, import_vitest.describe)("Update address (unit)", () => {
  (0, import_vitest.beforeEach)(async () => {
    addressRepositoryInMemory = new InMemoryAddressesRepository();
    usersRepositoryInMemory = new InMemoryUsersRepository();
    stu = new UpdateAddressByIdUseCase(
      addressRepositoryInMemory,
      usersRepositoryInMemory
    );
    await usersRepositoryInMemory.create({
      id: "2c72f329-8ba9-4335-8491-e8af5e9e19a0",
      cpf: "12345678910",
      dateBirth: /* @__PURE__ */ new Date("1999-06-01"),
      email: "user-test@email.com",
      name: "John Doe",
      phone: "77-77777-7777",
      password: await (0, import_bcrypt.hash)("123456", 8)
    });
    await addressRepositoryInMemory.create({
      id: "c92b51df-a450-43b4-b26a-b96245fc0ada",
      city: "city-user-1",
      country: "country-user-1",
      district: "district-user-1",
      num: 1,
      state: "state-user-1",
      street: "street-user-1",
      zipCode: 1,
      complement: "complement-user-1",
      reference: "reference-user-1",
      userId: "2c72f329-8ba9-4335-8491-e8af5e9e19a0"
    });
  });
  (0, import_vitest.test)("Should be able to update a address", async () => {
    const address = await stu.execute({
      id: "c92b51df-a450-43b4-b26a-b96245fc0ada",
      userId: "2c72f329-8ba9-4335-8491-e8af5e9e19a0",
      city: "city-user-2",
      country: "country-user-2",
      district: "district-user-2",
      num: 2,
      state: "state-user-2",
      street: "street-user-2",
      zipCode: 2,
      complement: "complement-user-2",
      reference: "reference-user-2"
    });
    (0, import_vitest.expect)(address).toEqual(
      import_vitest.expect.objectContaining({
        id: "c92b51df-a450-43b4-b26a-b96245fc0ada",
        city: "city-user-2",
        country: "country-user-2",
        district: "district-user-2",
        num: 2,
        state: "state-user-2",
        street: "street-user-2",
        zipCode: 2,
        complement: "complement-user-2",
        reference: "reference-user-2"
      })
    );
  });
  (0, import_vitest.test)("Should not be able to update a address with id invalid", async () => {
    await (0, import_vitest.expect)(() => stu.execute({
      id: "fake-id",
      userId: "2c72f329-8ba9-4335-8491-e8af5e9e19a0",
      city: "city-user-2",
      country: "country-user-2",
      district: "district-user-2",
      num: 2,
      state: "state-user-2",
      street: "street-user-2",
      zipCode: 2,
      complement: "complement-user-2",
      reference: "reference-user-2"
    })).rejects.toEqual(new AppError("Endere\xE7o n\xE3o encontrado", 404));
  });
  (0, import_vitest.test)("Should not be able to update a address with userId invalid", async () => {
    await (0, import_vitest.expect)(() => stu.execute({
      id: "c92b51df-a450-43b4-b26a-b96245fc0ada",
      userId: "fake-id",
      city: "city-user-2",
      country: "country-user-2",
      district: "district-user-2",
      num: 2,
      state: "state-user-2",
      street: "street-user-2",
      zipCode: 2,
      complement: "complement-user-2",
      reference: "reference-user-2"
    })).rejects.toEqual(new AppError("Usu\xE1rio n\xE3o encontrado", 404));
  });
});
