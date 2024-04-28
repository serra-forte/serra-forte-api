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

// src/repositories/in-memory/in-memory-users-repository.ts
var in_memory_users_repository_exports = {};
__export(in_memory_users_repository_exports, {
  InMemoryUsersRepository: () => InMemoryUsersRepository
});
module.exports = __toCommonJS(in_memory_users_repository_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryUsersRepository
});
