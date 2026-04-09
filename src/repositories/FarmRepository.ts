import { PrismaClient } from "@prisma/gen-client";

export class FarmRepository {
    constructor(private prisma: PrismaClient) {}

    findAll = async () => {
        return this.prisma.farm.findMany();
    }
}