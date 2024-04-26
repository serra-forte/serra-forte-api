"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/providers/MailProvider/implementations/provider-ethereal.ts
var provider_ethereal_exports = {};
__export(provider_ethereal_exports, {
  EtherealProvider: () => EtherealProvider
});
module.exports = __toCommonJS(provider_ethereal_exports);
var import_fs = __toESM(require("fs"));
var import_handlebars = __toESM(require("handlebars"));
var import_nodemailer = __toESM(require("nodemailer"));
var EtherealProvider = class _EtherealProvider {
  constructor(client) {
    this.client = client;
  }
  static async createTransporter() {
    const account = await import_nodemailer.default.createTestAccount();
    const transporter = import_nodemailer.default.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass
      }
    });
    return new _EtherealProvider(transporter);
  }
  async sendEmail(email, name, subject, link, pathTemplate, variables) {
    if (!this.client) {
      throw new Error("Ethereal client not initialized");
    }
    const readTemplate = import_fs.default.readFileSync(pathTemplate).toString("utf-8");
    const compileTemplate = import_handlebars.default.compile(readTemplate);
    const htmlTemplate = compileTemplate({ name, link, email, variables });
    const message = await this.client.sendMail({
      to: email,
      from: "<noreply@rentx.com>",
      subject,
      html: htmlTemplate
    });
    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", import_nodemailer.default.getTestMessageUrl(message));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EtherealProvider
});
