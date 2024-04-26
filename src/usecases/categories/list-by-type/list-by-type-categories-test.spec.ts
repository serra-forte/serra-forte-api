import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryCategoriesRepository } from "@/repositories/in-memory/in-memory-categories-repository";
import { ListCategoryByTypeUseCase } from "./list-by-type-categories-usecase";

let categoriesRepositoryInMemory: InMemoryCategoriesRepository
let stu: ListCategoryByTypeUseCase;

describe("List categories by type (unit)", () => {
    beforeEach(async() => {
        categoriesRepositoryInMemory = new InMemoryCategoriesRepository()
        stu = new ListCategoryByTypeUseCase(
            categoriesRepositoryInMemory
        )
    });

    test("Should be able to list Category by type", async () => {
        for(let i = 0; i < 10; i++){
            await categoriesRepositoryInMemory.create({
                name: `categoria ${i}`,
                description: 'criando mais de uma categoria',
                type: "ATTRACTION"
            })
        }

        const categories = await stu.execute({
            type: "ATTRACTION"
        })

        expect(categories).toHaveLength(10)
    });
});