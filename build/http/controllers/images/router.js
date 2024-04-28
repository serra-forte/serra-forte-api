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

// src/http/controllers/images/router.ts
var router_exports = {};
__export(router_exports, {
  imageRoutes: () => imageRoutes
});
module.exports = __toCommonJS(router_exports);

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

// src/providers/StorageProvider/implementations/file-tmp.provider.ts
var import_fs = __toESM(require("fs"));
var import_config2 = require("dotenv/config");
var FileTMPProvider = class {
  deleteFileTmp(fileName, folderPath) {
    try {
      let path = env.NODE_ENV === "development" ? env.FOLDER_TMP_DEVELOPMENT : env.FOLDER_TMP_PRODUCTION;
      if (env.NODE_ENV === "test") {
        path = env.FOLDER_TMP_DEVELOPMENT;
      }
      if (!import_fs.default.existsSync(`${path}/${folderPath}/${fileName}`)) {
        return;
      }
      import_fs.default.unlinkSync(`${path}/${folderPath}/${fileName}`);
    } catch (error) {
      throw error;
    }
  }
};

// src/providers/StorageProvider/implementations/firebase-storage.provider.ts
var import_config4 = require("dotenv/config");

// src/config/firebase-connection.ts
var firebase = __toESM(require("firebase-admin"));
var import_config3 = require("dotenv/config");
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

// src/usecases/images/delete/delete-images-usecase.ts
var DeleteImageUseCase = class {
  constructor(imageRepository, storageProvider, fileProvider) {
    this.imageRepository = imageRepository;
    this.storageProvider = storageProvider;
    this.fileProvider = fileProvider;
  }
  async execute({
    id
  }) {
    const findImageExists = await this.imageRepository.findById(id);
    if (!findImageExists) {
      throw new AppError("Image not found", 404);
    }
    await this.storageProvider.deleteFile(findImageExists.hashName, "products");
    this.fileProvider.deleteFileTmp(findImageExists.hashName, "products");
    await this.imageRepository.deleteById(id);
  }
};

// src/usecases/factories/images/make-delete-images-usecase.ts
async function makeDeleteImage() {
  const imageRepository = new PrismaImageRepository();
  const storageProvider = new FirebaseStorageProvider();
  const fileTMPProvider = new FileTMPProvider();
  const deleteImageUseCase = new DeleteImageUseCase(
    imageRepository,
    storageProvider,
    fileTMPProvider
  );
  return deleteImageUseCase;
}

// src/http/controllers/images/delete/delete-images-controller.ts
var import_zod2 = require("zod");
async function DeleteImage(request, reply) {
  try {
    const imageSchemaParms = import_zod2.z.object({
      id: import_zod2.z.string().uuid()
    });
    const { id } = imageSchemaParms.parse(request.params);
    const deleteImageCampingUseCase = await makeDeleteImage();
    await deleteImageCampingUseCase.execute({
      id
    });
    return reply.status(200).send({ message: "Image deleted successfully" });
  } catch (error) {
    throw error;
  }
}

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

// src/http/controllers/images/upload/upload-images-controller.ts
var import_crypto = require("crypto");
var import_zod3 = require("zod");
var import_fs2 = __toESM(require("fs"));
async function UploadImage(request, reply) {
  try {
    const ImageSchema = import_zod3.z.object({
      filename: import_zod3.z.string(),
      _buf: import_zod3.z.instanceof(Buffer)
    });
    const multipartformUploadSchema = import_zod3.z.object({
      userId: import_zod3.z.object({
        value: import_zod3.z.string().uuid()
      }),
      // receber array de imagens ou objeto de imagem e transformar em array
      images: import_zod3.z.union([ImageSchema, ImageSchema.array()]).transform((value) => {
        return Array.isArray(value) ? value : [value];
      })
    });
    const {
      userId,
      images
    } = multipartformUploadSchema.parse(request.body);
    const imageInfo = [];
    const folderTmp = env.NODE_ENV === "production" ? env.FOLDER_TMP_PRODUCTION : env.FOLDER_TMP_DEVELOPMENT;
    for (let image of images) {
      const hashName = `${(0, import_crypto.randomUUID)()} - ${image.filename}`;
      const name = image.filename;
      import_fs2.default.writeFile(`${folderTmp}/${hashName}`, image._buf, (err) => {
        if (err) {
          console.error("Erro ao salvar o arquivo:", err);
          return reply.status(400).send({ message: "Erro ao salvar o arquivo" });
        }
      });
      imageInfo.push({
        name,
        hashName
      });
    }
    const uploadImageUseCase = await makeUpload();
    const arrayImagesUploaded = await uploadImageUseCase.execute({
      userId: userId.value,
      imageInfo
    });
    return reply.status(200).send(arrayImagesUploaded);
  } catch (error) {
    throw error;
  }
}

// src/usecases/images/list-by-user/list-by-user-images-usecase.ts
var ListImageByUserUseCase = class {
  constructor(imageRepository, userRepository) {
    this.imageRepository = imageRepository;
    this.userRepository = userRepository;
  }
  async execute({
    userId
  }) {
    const findUserExists = await this.userRepository.findById(userId);
    if (!findUserExists) {
      throw new AppError("User not found", 404);
    }
    const images = await this.imageRepository.listByUser(userId);
    return images;
  }
};

// src/usecases/factories/images/make-list-by-user-images-usecase.ts
async function makeListImageByUser() {
  const imageRepository = new PrismaImageRepository();
  const userRepository = new PrismaUsersRepository();
  const listImageByUserUseCase = new ListImageByUserUseCase(
    imageRepository,
    userRepository
  );
  return listImageByUserUseCase;
}

// src/http/controllers/images/list-by-user/list-by-user-images-controller.ts
var import_zod4 = require("zod");
async function ListImageByUser(request, reply) {
  try {
    const imageSchemaParms = import_zod4.z.object({
      id: import_zod4.z.string().uuid()
    });
    const { id } = imageSchemaParms.parse(request.params);
    const listImageByUserUseCase = await makeListImageByUser();
    const images = await listImageByUserUseCase.execute({
      userId: id
    });
    return reply.status(200).send(images);
  } catch (error) {
    throw error;
  }
}

// src/usecases/images/list/list-images-usecase.ts
var ListImageUseCase = class {
  constructor(imageRepository) {
    this.imageRepository = imageRepository;
  }
  async execute() {
    const images = await this.imageRepository.list();
    return images;
  }
};

// src/usecases/factories/images/make-list-images-usecase.ts
async function makeListImage() {
  const imageRepository = new PrismaImageRepository();
  const listImageUseCase = new ListImageUseCase(
    imageRepository
  );
  return listImageUseCase;
}

// src/http/controllers/images/list/list-images-controller.ts
async function ListImage(request, reply) {
  try {
    const listImageUseCase = await makeListImage();
    const images = await listImageUseCase.execute();
    return reply.status(200).send(images);
  } catch (error) {
    throw error;
  }
}

// src/http/controllers/images/router.ts
async function imageRoutes(fastifyApp) {
  fastifyApp.post("/", UploadImage);
  fastifyApp.get("/", ListImage);
  fastifyApp.get("/user/:id", ListImageByUser);
  fastifyApp.delete("/:id", DeleteImage);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  imageRoutes
});
