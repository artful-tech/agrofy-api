import { PrismaClient } from "@prisma/gen-client";

export class CropRepository {
    constructor(private prisma: PrismaClient) {}

    async findAll() {
        return this.prisma.crop.findMany();
    }
}