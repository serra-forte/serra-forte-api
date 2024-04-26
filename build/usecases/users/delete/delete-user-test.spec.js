"use strict";

// src/usecases/users/delete/delete-user-test.spec.ts
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
  async updateIdCostumerPayment(idUser, idCustomerPayment) {
    const userIndex = this.users.findIndex((user) => user.id === idUser);
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

// src/usecases/users/delete/delete-user-test.spec.ts
var import_bcrypt2 = require("bcrypt");

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/users/delete/delete-user-usecase.ts
var import_bcrypt = require("bcrypt");
var import_config = require("dotenv/config");
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
    const passwordMatch = await (0, import_bcrypt.compare)(password, findUserExist.password);
    if (!passwordMatch) {
      throw new AppError("Password not match", 401);
    }
    await this.usersRepository.delete(findUserExist.id);
  }
};

// src/usecases/users/delete/delete-user-test.spec.ts
var usersRepositoryInMemory;
var stu;
(0, import_vitest.describe)("Delete user (unit)", () => {
  (0, import_vitest.beforeEach)(async () => {
    usersRepositoryInMemory = new InMemoryUsersRepository();
    stu = new DeleteUserUseCase(
      usersRepositoryInMemory
    );
    await usersRepositoryInMemory.create({
      id: "bd3234d7-21e6-4e1d-8129-8b823c4d331a",
      cpf: "524.658.490-93",
      dateBirth: "2023-10-03",
      email: "email1@test.com",
      name: "Kaio Moreira",
      phone: "77-77777-7777",
      password: await (0, import_bcrypt2.hash)("123456", 8)
    });
  });
  (0, import_vitest.test)("Should be able to delete user", async () => {
    await stu.execute({
      id: "bd3234d7-21e6-4e1d-8129-8b823c4d331a"
    });
    const findUserExist = await usersRepositoryInMemory.getUserSecurity("bd3234d7-21e6-4e1d-8129-8b823c4d331a");
    (0, import_vitest.expect)(findUserExist).toEqual(null);
  });
  (0, import_vitest.test)("Should not be able to delete a user is not exists ", async () => {
    await (0, import_vitest.expect)(
      () => stu.execute({
        id: "id-faker-user-2"
      })
    ).rejects.toEqual(new AppError("Usu\xE1rio n\xE3o encontrado", 404));
  });
});
