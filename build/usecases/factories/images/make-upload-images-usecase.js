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

// src/usecases/factories/images/make-upload-images-usecase.ts
var make_upload_images_usecase_exports = {};
__export(make_upload_images_usecase_exports, {
  makeUpload: () => makeUpload
});
module.exports = __toCommonJS(make_upload_images_usecase_exports);

// src/providers/StorageProvider/implementations/firebase-storage.provider.ts
var import_config3 = require("dotenv/config");

// src/config/firebase-connection.ts
var firebase = __toESM(require("firebase-admin"));
var import_config2 = require("dotenv/config");

// src/env/index.ts
var import_zod = require("zod");
var import_config = require("dotenv/config");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["development", "production", "test"]).default("development"),
  PORT: import_zod.z.coerce.number().default(3335),
  HOST: import_zod.z.string().default("0.0.0.0"),
  DATABASE_URL: import_zod.z.string(),
  JWT_SECRET_ACCESS_TOKEN: import_zod.z.string(),
  JWT_SECRET_REFRESH_TOKEN: import_zod.z.string(),
  JWT_EXPIRES_IN_REFRESH_TOKEN: import_zod.z.string(),
  JWT_EXPIRES_IN_ACCESS_TOKEN: import_zod.z.string(),
  COOKIE_SECRET: import_zod.z.string(),
  SENDGRID_API_KEY: import_zod.z.string(),
  APP_URL_DEVLOPMENT: import_zod.z.string().optional(),
  APP_URL_PRODUCTION: import_zod.z.string().optional(),
  REDIS: import_zod.z.string(),
  CHARACTERS: import_zod.z.string(),
  ASAAS_API_URL: import_zod.z.string(),
  ASAAS_API_KEY: import_zod.z.string(),
  FIREBASE_PROJECT_ID: import_zod.z.string(),
  FIREBASE_CLIENT_EMAIL: import_zod.z.string().email(),
  FIREBASE_PRIVATE_KEY: import_zod.z.string(),
  FIREBASE_BUCKET: import_zod.z.string(),
  FOLDER_TMP_DEVELOPMENT: import_zod.z.string(),
  FOLDER_TMP_PRODUCTION: import_zod.z.string(),
  ASAAS_ACCESS_KEY: import_zod.z.string(),
  APP_URL_FRONTEND_DEVELOPMENT: import_zod.z.string(),
  APP_URL_FRONTEND_PRODUCTION: import_zod.z.string()
});
var _env = envSchema.safeParse(process.env);
if (_env.success !== true) {
  console.error("Error converting environment variables", _env.error.format());
  throw new Error("Invalid environment variables");
}
var env = _env.data;

// src/config/firebase-connection.ts
var firebaseApp = firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: env.FIREBASE_PROJECT_ID,
    clientEmail: env.FIREBASE_CLIENT_EMAIL,
    privateKey: env.FIREBASE_PRIVATE_KEY
  }),
  storageBucket: env.FIREBASE_BUCKET
}).storage().bucket();

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/providers/StorageProvider/implementations/firebase-storage.provider.ts
var FirebaseStorageProvider = class {
  constructor() {
    this.storage = firebaseApp;
  }
  async deleteFile(fileName, folderStorage) {
    try {
      if (!fileName) {
        return;
      }
      await this.storage.file(`${folderStorage}/${fileName}`).delete();
    } catch (error) {
      console.log("Error ao deletar a imagem");
    }
  }
  async uploadFile(fileName, pathFolder, folderStorage) {
    try {
      const destination = `${folderStorage}/${fileName}`;
      const filePath = `${pathFolder}/${fileName}`;
      const uploadImage = await this.storage.upload(filePath, {
        destination
      });
      if (!uploadImage) {
        throw new AppError("Error ao fazer upload da imagem", 400);
      }
      const fileNameUploaded = uploadImage[0].metadata.name;
      const file = this.storage.file(fileNameUploaded);
      const fileRef = await file.getSignedUrl({
        action: "read",
        expires: "03-09-2491"
      });
      const URL = fileRef[0];
      return URL;
    } catch (error) {
      console.log("Error ao fazer upload da imagem");
    }
  }
};

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  // log: env.NODE_ENV === 'development' ? ['query'] : [],
});

// src/repositories/prisma/prisma-images-repository.ts
var PrismaImageRepository = class {
  async findByHashName(name) {
    const image = await prisma.image.findUnique({
      where: {
        hashName: name
      }
    });
    return image;
  }
  async list() {
    const images = await prisma.image.findMany();
    return images;
  }
  async listByUser(id) {
    const images = await prisma.image.findMany({
      where: {
        userId: id
      }
    });
    return images;
  }
  async findById(id) {
    const image = await prisma.image.findUnique({
      where: { id }
    });
    return image;
  }
  async upload(data) {
    const image = await prisma.image.create({
      data
    });
    return image;
  }
  async updateUrl(data) {
    await prisma.image.update({
      where: {
        id: data.id
      },
      data: {
        url: data.url
      }
    });
  }
  async deleteById(id) {
    await prisma.image.delete({
      where: {
        id
      }
    });
  }
};

// src/repositories/prisma/prisma-users-repository.ts
var PrismaUsersRepository = class {
  async updateExpireRefundCredit({
    ListUserDifferentToPacientUseCase,
    date
  }) {
    await prisma.user.update({
      where: {
        id: ListUserDifferentToPacientUseCase
      },
      data: {
        expireRefundCredit: date
      }
    });
  }
  async updateRefundCredit(ListUserDifferentToPacientUseCase, value) {
    const user = await prisma.user.update({
      where: {
        id: ListUserDifferentToPacientUseCase
      },
      data: {
        refundCredit: value
      }
    });
    const refundCreditNumber = Number(user.refundCredit);
    return refundCreditNumber;
  }
  async findByPhone(phone) {
    const user = await prisma.user.findUnique({
      where: { phone },
      select: {
        id: true,
        idCustomerAsaas: true,
        name: true,
        cpf: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
      }
    });
    return user;
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
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
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
        name: true,
        cpf: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
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
  async updateIdCostumerPayment(ListUserDifferentToPacientUseCase, idCustomerPayment) {
    const user = await prisma.user.update({
      where: {
        id: ListUserDifferentToPacientUseCase
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
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
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
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
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
          email: true,
          emailActive: true,
          dateBirth: true,
          phone: true,
          role: true,
          refundCredit: true,
          expireRefundCredit: true,
          createdAt: true
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
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        createdAt: true
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
        password: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        refundCredit: true,
        expireRefundCredit: true,
        createdAt: true
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
        password: true,
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        createdAt: true
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
        email: true,
        emailActive: true,
        dateBirth: true,
        phone: true,
        role: true,
        createdAt: true
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

// src/usecases/images/upload/upload-images-usecase.ts
var UploadImageUseCase = class {
  constructor(storageProvider, userRepository, imageRepository) {
    this.storageProvider = storageProvider;
    this.userRepository = userRepository;
    this.imageRepository = imageRepository;
  }
  async execute({
    userId,
    imageInfo
  }) {
    const findUserExists = await this.userRepository.findById(userId);
    if (!findUserExists) {
      throw new AppError("User not found", 404);
    }
    const pathFolder = env.NODE_ENV === "production" ? `${env.FOLDER_TMP_PRODUCTION}` : `${env.FOLDER_TMP_DEVELOPMENT}`;
    let arrayImagesUploaded = [];
    for (let image of imageInfo) {
      let imageUrl = await this.storageProvider.uploadFile(image.hashName, pathFolder, "products");
      const createImage = await this.imageRepository.upload({
        userId,
        name: image.name,
        hashName: image.hashName,
        url: imageUrl
      });
      arrayImagesUploaded.push(createImage);
    }
    return arrayImagesUploaded;
  }
};

// src/usecases/factories/images/make-upload-images-usecase.ts
async function makeUpload() {
  const imageRepository = new PrismaImageRepository();
  const storageProvider = new FirebaseStorageProvider();
  const userRepository = new PrismaUsersRepository();
  const uploadImageUseCase = new UploadImageUseCase(
    storageProvider,
    userRepository,
    imageRepository
  );
  return uploadImageUseCase;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeUpload
});
