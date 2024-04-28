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

// src/providers/MailProvider/in-memory/in-memory-mail-provider.ts
var in_memory_mail_provider_exports = {};
__export(in_memory_mail_provider_exports, {
  InMemoryMailProvider: () => InMemoryMailProvider
});
module.exports = __toCommonJS(in_memory_mail_provider_exports);
var InMemoryMailProvider = class {
  constructor() {
    this.messages = [];
    this.messages = this.messages;
  }
  async findMessageSent(email) {
    const message = this.messages.find((message2) => message2.email === email);
    return message;
  }
  async sendEmail(email, name, subject, link, pathTemplate) {
    const message = {
      email,
      name,
      subject,
      link,
      textTemplate: pathTemplate
    };
    this.messages.push(message);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryMailProvider
});
