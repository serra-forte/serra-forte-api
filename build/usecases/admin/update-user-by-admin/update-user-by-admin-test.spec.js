"use strict";

// src/usecases/admin/update-user-by-admin/update-user-by-admin-test.spec.ts
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

// src/usecases/admin/update-user-by-admin/update-user-by-admin-test.spec.ts
var import_bcrypt2 = require("bcrypt");

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
    idUser,
    idCamping,
    password,
    email,
    name,
    phone
  }) {
    const findUserExist = await this.usersRepository.findById(idUser);
    if (!findUserExist) {
      throw new AppError("User not found", 404);
    }
    let criptingPassword = "";
    if (password) {
      criptingPassword = await (0, import_bcrypt.hash)(password, 8);
    }
    const user = await this.usersRepository.update({
      id: idUser,
      idCamping: idCamping || void 0,
      password: password ? criptingPassword : void 0,
      email: email || void 0,
      name: name || void 0,
      phone: phone || void 0
    });
    return user;
  }
};

// src/usecases/admin/update-user-by-admin/update-user-by-admin-test.spec.ts
var cardRepositoryInMemory;
var usersRepositoryInMemory;
var stu;
(0, import_vitest.describe)("Update user by admin (unit)", () => {
  (0, import_vitest.beforeEach)(async () => {
    cardRepositoryInMemory = new InMemoryCardRepository();
    usersRepositoryInMemory = new InMemoryUsersRepository(
      cardRepositoryInMemory
    );
    stu = new UpdateUserByAdminUseCase(usersRepositoryInMemory);
    await usersRepositoryInMemory.create({
      id: "de560a53-ca70-4826-b41a-9b8b0739a6d8",
      cpf: "12345678910",
      email: "user-test@email.com",
      gender: "MASCULINO",
      name: "John Doe",
      role: "ADMIN",
      phone: "77-77777-7777",
      password: await (0, import_bcrypt2.hash)("123456", 8)
    });
    await usersRepositoryInMemory.create({
      id: "ffb3d339-507d-4495-895c-8bc8118bbf4d",
      cpf: "12345678910",
      email: "user-test5@email.com",
      gender: "MASCULINO",
      name: "John Doe",
      role: "PACIENT",
      phone: "77-77777-7777",
      password: await (0, import_bcrypt2.hash)("123456", 8)
    });
  });
  (0, import_vitest.test)("Should be able to update user", async () => {
    const user = await stu.execute({
      idUser: "ffb3d339-507d-4495-895c-8bc8118bbf4d",
      idAdmin: "de560a53-ca70-4826-b41a-9b8b0739a6d8",
      email: "linda-dev@outlook.com",
      name: "Linda Moreira",
      role: "DOCTOR",
      phone: "77-77777-7788",
      cpf: "12345678910",
      gender: "FEMININO",
      password: "1234567"
    });
    (0, import_vitest.expect)(user).toEqual(
      import_vitest.expect.objectContaining({
        id: "ffb3d339-507d-4495-895c-8bc8118bbf4d",
        email: "linda-dev@outlook.com",
        name: "Linda Moreira",
        phone: "77-77777-7788",
        role: "DOCTOR",
        cpf: "12345678910",
        gender: "FEMININO"
      })
    );
  });
  (0, import_vitest.test)("Should not be able to update with user admin invalid", async () => {
    await (0, import_vitest.expect)(
      () => stu.execute({
        idUser: "ffb3d339-507d-4495-895c-8bc8118bbf4d",
        idAdmin: "2517ba10-f4f5-448f-9d60-14ef4a37878a",
        email: "user-test1@email.com",
        name: "Kaio Moreira",
        phone: "77-77777-7777",
        role: "ADMIN",
        gender: "FEMININO",
        password: "1234567",
        cpf: "12345678910"
      })
    ).rejects.toEqual(new AppError("Usuario n\xE3o encontrado", 404));
  });
});
