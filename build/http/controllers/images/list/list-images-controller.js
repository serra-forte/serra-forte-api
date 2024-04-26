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

// src/http/controllers/images/list/list-images-controller.ts
var list_images_controller_exports = {};
__export(list_images_controller_exports, {
  ListImage: () => ListImage
});
module.exports = __toCommonJS(list_images_controller_exports);

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
        idUser: id
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ListImage
});
