import { PrismaClient } from "@prisma/gen-client";

export class FarmRepository {
    constructor(private prisma: PrismaClient) {}

    async findAll() {
        return this.prisma.farm.findMany();
    }
}