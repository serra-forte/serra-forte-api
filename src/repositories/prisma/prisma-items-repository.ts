import { IItemsRepository } from "../interfaces/interface-items-repository";
import { prisma } from "@/lib/prisma";

export class PrismaItemsRepository implements IItemsRepository{
    async findById(id: string){
        const item = await prisma.item.findUnique({
            where: {
                id
            }
        })

        return item
    }
}