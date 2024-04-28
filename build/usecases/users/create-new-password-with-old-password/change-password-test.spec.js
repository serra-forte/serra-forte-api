"use strict";

// src/usecases/users/create-new-password-with-old-password/change-password-test.spec.ts
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

// src/usecases/users/create-new-password-with-old-password/change-password-test.spec.ts
var import_bcrypt2 = require("bcrypt");

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

// src/usecases/users/create-new-password-with-old-password/change-password-test.spec.ts
var usersRepositoryInMemory;
var cardRepositoryInMemory;
var stu;
(0, import_vitest.describe)("Create new password by old password (unit)", () => {
  (0, import_vitest.beforeEach)(async () => {
    cardRepositoryInMemory = new InMemoryCardRepository();
    usersRepositoryInMemory = new InMemoryUsersRepository(
      cardRepositoryInMemory
    );
    stu = new CreateNewPasswordByOldPassword(usersRepositoryInMemory);
    await usersRepositoryInMemory.create({
      id: "9f7702b8-a7d9-4532-8ef6-ecffcb37e178",
      cpf: "12345678910",
      gender: "MASCULINO",
      email: "user-test@email.com",
      name: "John Doe",
      phone: "77-77777-7777",
      password: await (0, import_bcrypt2.hash)("123456", 8)
    });
  });
  (0, import_vitest.test)("Should be able to change passwod account with old password", async () => {
    const createNewPassword = await stu.execute({
      userId: "9f7702b8-a7d9-4532-8ef6-ecffcb37e178",
      oldPassword: "123456",
      newPassword: "159753"
    });
    (0, import_vitest.expect)(createNewPassword).toBe("Senha alterada com sucesso");
  });
  (0, import_vitest.test)("Should not be able to change passwod account with old password incorret", async () => {
    await (0, import_vitest.expect)(
      () => stu.execute({
        userId: "9f7702b8-a7d9-4532-8ef6-ecffcb37e178",
        oldPassword: "12345",
        newPassword: "159753"
      })
    ).rejects.toEqual(new AppError("Senha antiga n\xE3o incorreta", 401));
  });
  (0, import_vitest.test)("Should not be able to change passwod account by old password with userId invalid", async () => {
    await (0, import_vitest.expect)(
      () => stu.execute({
        userId: "66db1c18-a79c-4b0c-bbde-1eeef1b5e94a",
        oldPassword: "123456",
        newPassword: "159753"
      })
    ).rejects.toEqual(new AppError("Usu\xE1rio n\xE3o existe", 404));
  });
});
