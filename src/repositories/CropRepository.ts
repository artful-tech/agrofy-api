import { PrismaClient } from "@prisma/gen-client";

export class CropRepository {
    constructor(private prisma: PrismaClient) {}

    findAll = async () => {
        return this.prisma.crop.findMany();
    }
}