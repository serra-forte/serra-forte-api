"use strict";

// src/usecases/address/find/find-address-test.spec.ts
var import_vitest = require("vitest");

// src/repositories/in-memory/in-memory-addresses-repository.ts
var import_client = require("@prisma/client");
var import_crypto = require("crypto");
var InMemoryAddressesRepository = class {
  constructor() {
    this.adresses = [];
  }
  async deleteById(id) {
    const addressIndex = this.adresses.findIndex((address) => address.id === id);
    this.adresses.splice(addressIndex, 1);
  }
  async create({
    id,
    street,
    num,
    district,
    city,
    state,
    country,
    zipCode,
    complement,
    reference,
    idUser,
    idAnnouncement,
    idCamping
  }) {
    const address = {
      id: id ? id : (0, import_crypto.randomUUID)(),
      idUser: idUser ? idUser : null,
      idAnnouncement: idAnnouncement ? idAnnouncement : null,
      idCamping: idCamping ? idCamping : null,
      street,
      num: new import_client.Prisma.Decimal(num),
      district,
      city,
      state,
      country,
      zipCode: new import_client.Prisma.Decimal(zipCode),
      complement: complement ? complement : null,
      reference: reference ? reference : null
    };
    this.adresses.push(address);
    return address;
  }
  async findById(id) {
    const address = this.adresses.find((address2) => address2.id === id);
    if (!address) {
      return null;
    }
    return address;
  }
  async updateById({
    id,
    num,
    city,
    complement,
    country,
    district,
    reference,
    state,
    street,
    zipCode
  }) {
    const addressIndex = this.adresses.findIndex((address) => address.id === id);
    this.adresses[addressIndex].num = num;
    this.adresses[addressIndex].city = city;
    this.adresses[addressIndex].complement = complement;
    this.adresses[addressIndex].country = country;
    this.adresses[addressIndex].district = district;
    this.adresses[addressIndex].reference = reference;
    this.adresses[addressIndex].state = state;
    this.adresses[addressIndex].street = street;
    this.adresses[addressIndex].zipCode = zipCode;
    return this.adresses[addressIndex];
  }
};

// src/usecases/errors/app-error.ts
var AppError = class {
  constructor(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
};

// src/usecases/address/find/find-address-usecase.ts
var FindAddressByIdUseCase = class {
  constructor(addressRepository) {
    this.addressRepository = addressRepository;
  }
  async execute({ id }) {
    const checkAddressExists = await this.addressRepository.findById(id);
    if (!checkAddressExists) {
      throw new AppError("Endere\xE7o n\xE3o encontrado", 404);
    }
    return checkAddressExists;
  }
};

// src/usecases/address/find/find-address-test.spec.ts
var addressRepositoryInMemory;
var stu;
(0, import_vitest.describe)("Find address (unit)", () => {
  (0, import_vitest.beforeEach)(async () => {
    addressRepositoryInMemory = new InMemoryAddressesRepository();
    stu = new FindAddressByIdUseCase(
      addressRepositoryInMemory
    );
    await addressRepositoryInMemory.create({
      id: "c92b51df-a450-43b4-b26a-b96245fc0ada",
      city: "city-user-1",
      country: "country-user-1",
      district: "district-user-1",
      num: 1,
      state: "state-user-1",
      street: "street-user-1",
      zipCode: 1
    });
  });
  (0, import_vitest.test)("Should be able to find address", async () => {
    const findAddress = await stu.execute({
      id: "c92b51df-a450-43b4-b26a-b96245fc0ada"
    });
    (0, import_vitest.expect)(findAddress).toEqual(
      import_vitest.expect.objectContaining({
        id: "c92b51df-a450-43b4-b26a-b96245fc0ada"
      })
    );
  });
  (0, import_vitest.test)("Should not be able to find address is not exists ", async () => {
    await (0, import_vitest.expect)(
      () => stu.execute({
        id: "id-faker-user-2"
      })
    ).rejects.toEqual(new AppError("Endere\xE7o n\xE3o encontrado", 404));
  });
});
