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

// src/providers/DateProvider/implementations/provider-dayjs.ts
var provider_dayjs_exports = {};
__export(provider_dayjs_exports, {
  DayjsDateProvider: () => DayjsDateProvider
});
module.exports = __toCommonJS(provider_dayjs_exports);
var import_dayjs = __toESM(require("dayjs"));
var import_utc = __toESM(require("dayjs/plugin/utc"));
var import_isBetween = __toESM(require("dayjs/plugin/isBetween"));
var import_timezone = __toESM(require("dayjs/plugin/timezone"));
var import_pt = require("dayjs/locale/pt");
import_dayjs.default.extend(import_utc.default);
import_dayjs.default.extend(import_isBetween.default);
import_dayjs.default.extend(import_timezone.default);
import_dayjs.default.locale("pt");
var DayjsDateProvider = class {
  compareIfAfter(start_date, end_date) {
    return (0, import_dayjs.default)(start_date).isAfter((0, import_dayjs.default)(end_date));
  }
  createDate(date) {
    const createDate = (0, import_dayjs.default)(date).startOf("day").format("YYYY-MM-DDTHH:mm:ssZ[Z]");
    const convertDatePtBR = createDate.substring(0, 19) + "." + createDate.substring(23);
    return convertDatePtBR;
  }
  dateTomorrow(date) {
    return import_dayjs.default.utc(date).add(1, "day").startOf("day").toDate();
  }
  dateIsSameByHour(start_date, end_date) {
    return (0, import_dayjs.default)(start_date).isSame(end_date, "d") && (0, import_dayjs.default)(start_date).isSame(end_date, "m") && (0, import_dayjs.default)(start_date).isSame(end_date, "y") && (0, import_dayjs.default)(start_date).isSame(end_date, "hour");
  }
  dateIsSame(start_date, end_date) {
    return (0, import_dayjs.default)(start_date).isSame(end_date, "d") && (0, import_dayjs.default)(start_date).isSame(end_date, "m") && (0, import_dayjs.default)(start_date).isSame(end_date, "y");
  }
  veirfyIsDateInBetween(dateVerify, start_date, end_date) {
    return (0, import_dayjs.default)(dateVerify).isBetween(start_date, (0, import_dayjs.default)(end_date), "date");
  }
  addHours(hours) {
    return (0, import_dayjs.default)().add(hours, "hour").toDate();
  }
  addDays(days) {
    const catchDatePtBR = (0, import_dayjs.default)().add(days, "days").format("YYYY-MM-DDTHH:mm:ssZ[Z]");
    const convertDatePtBR = catchDatePtBR.substring(0, 19) + "." + catchDatePtBR.substring(23);
    return convertDatePtBR;
  }
  addMoth(month) {
    const catchDatePtBR = (0, import_dayjs.default)().add(month, "months").format("YYYY-MM-DDTHH:mm:ssZ[Z]");
    const convertDatePtBR = catchDatePtBR.substring(0, 19) + "." + catchDatePtBR.substring(23);
    return convertDatePtBR;
  }
  compareInHours(start_date, end_date) {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);
    return (0, import_dayjs.default)(end_date_utc).diff(start_date_utc, "hours");
  }
  convertToUTC(date) {
    return (0, import_dayjs.default)(date).utc().local().format();
  }
  dateNow(date) {
    return import_dayjs.default.utc(date).add(0, "day").startOf("day").toDate();
  }
  compareInDays(start_date, end_date) {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);
    return (0, import_dayjs.default)(end_date_utc).diff(start_date_utc, "days");
  }
  compareIfBefore(start_date, end_date) {
    return (0, import_dayjs.default)(start_date).isBefore((0, import_dayjs.default)(end_date));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DayjsDateProvider
});
