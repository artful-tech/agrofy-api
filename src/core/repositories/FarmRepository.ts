import { PrismaClient } from "@prisma/client";
import { IFarmRepository } from "./interfaces";
import { FarmModel } from "../models/FarmModel";


export class FarmRepository implements IFarmRepository {
    constructor(private prisma: PrismaClient) {}

    findAll = async (): Promise<FarmModel[]> => {
        return this.prisma.farm.findMany();
    }
}