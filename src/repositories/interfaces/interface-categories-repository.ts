import { Category, Prisma, TypeCategory } from "@prisma/client"

export interface ICategoriesRepository{
    create(data:Prisma.CategoryUncheckedCreateInput):Promise<Category>
    list():Promise<Category[]>
    listByType(type: TypeCategory):Promise<Category[]>
    findById(id:string):Promise<Category | null>
    updateById(data:Prisma.CategoryUncheckedUpdateInput):Promise<Category>
    deleteById(id:string):Promise<void>
}