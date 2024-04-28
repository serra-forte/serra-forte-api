"use strict";

// src/usecases/users/update-full/update-user-test.spec.ts
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

// src/usecases/users/update-full/update-user-test.spec.ts
var import_bcrypt = require("bcrypt");

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

// src/usecases/users/update-full/update-user-test.spec.ts
var usersRepositoryInMemory;
var stu;
(0, import_vitest.describe)("Update user (unit)", () => {
  (0, import_vitest.beforeEach)(async () => {
    usersRepositoryInMemory = new InMemoryUsersRepository();
    stu = new UpdateUserUseCase(
      usersRepositoryInMemory
    );
    await usersRepositoryInMemory.create({
      id: "bd3234d7-21e6-4e1d-8129-8b823c4d331a",
      cpf: "524.658.490-93",
      passport: "123456789",
      dateBirth: "2023-10-03",
      email: "email1@test.com",
      name: "Kaio Moreira",
      phone: "77-77777-7777",
      password: await (0, import_bcrypt.hash)("123456", 8)
    });
  });
  (0, import_vitest.test)("Should be able to update a user account with cpf", async () => {
    const { user } = await stu.execute({
      id: "bd3234d7-21e6-4e1d-8129-8b823c4d331a",
      dateBirth: /* @__PURE__ */ new Date("1995-10-03"),
      name: "Sarah Moreira",
      phone: "77-7777-9999",
      cpf: "45274090001"
    });
    (0, import_vitest.expect)(user).toEqual(
      import_vitest.expect.objectContaining({
        id: "bd3234d7-21e6-4e1d-8129-8b823c4d331a",
        dateBirth: /* @__PURE__ */ new Date("1995-10-03"),
        phone: "77-7777-9999",
        name: "Sarah Moreira",
        cpf: "45274090001"
      })
    );
  });
  (0, import_vitest.test)("Should be able to update a user account with passport", async () => {
    const { user } = await stu.execute({
      id: "bd3234d7-21e6-4e1d-8129-8b823c4d331a",
      dateBirth: /* @__PURE__ */ new Date("1995-10-03"),
      name: "Sarah Moreira",
      phone: "77-7777-9999",
      passport: "987654321"
    });
    (0, import_vitest.expect)(user).toEqual(
      import_vitest.expect.objectContaining({
        id: "bd3234d7-21e6-4e1d-8129-8b823c4d331a",
        dateBirth: /* @__PURE__ */ new Date("1995-10-03"),
        phone: "77-7777-9999",
        name: "Sarah Moreira",
        passport: "987654321"
      })
    );
  });
  (0, import_vitest.test)("Should not be able to update a user account with id invalid", async () => {
    await (0, import_vitest.expect)(() => stu.execute({
      id: "id-user-3",
      dateBirth: /* @__PURE__ */ new Date("1995-10-03"),
      name: "Sarah Moreira",
      phone: "77-7777-9999"
    })).rejects.toEqual(new AppError("Usu\xE1rio n\xE3o encontrado", 404));
  });
  (0, import_vitest.test)("Should not be able to update a user account with cpf already exists", async () => {
    await (0, import_vitest.expect)(() => stu.execute({
      id: "bd3234d7-21e6-4e1d-8129-8b823c4d331a",
      dateBirth: /* @__PURE__ */ new Date("1995-10-03"),
      name: "Sarah Moreira",
      phone: "77-7777-9999",
      cpf: "524.658.490-93"
    })).rejects.toEqual(new AppError("CPF j\xE1 cadastrado", 409));
  });
  (0, import_vitest.test)("Should not be able to update a user account with passport already exists", async () => {
    await (0, import_vitest.expect)(() => stu.execute({
      id: "bd3234d7-21e6-4e1d-8129-8b823c4d331a",
      dateBirth: /* @__PURE__ */ new Date("1995-10-03"),
      name: "Sarah Moreira",
      phone: "77-7777-9999",
      passport: "123456789"
    })).rejects.toEqual(new AppError("Passaporte j\xE1 cadastrado", 409));
  });
});
