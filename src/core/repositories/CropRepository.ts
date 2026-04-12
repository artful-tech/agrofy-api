import { Crop, PrismaClient } from "@prisma/gen-client";
import { ICropRepository } from "./interfaces";


export class CropRepository implements ICropRepository {
    constructor(private prisma: PrismaClient) {}

    findAll = async (): Promise<Crop[]> => {
        return this.prisma.crop.findMany();
    }
}
