import { Farm, PrismaClient } from "@prisma/gen-client";
import { IFarmRepository } from "./interfaces/IFarmRepository";


export class FarmRepository implements IFarmRepository {
    constructor(private prisma: PrismaClient) {}

    findAll = async (): Promise<Farm[]> => {
        return this.prisma.farm.findMany();
    }
}