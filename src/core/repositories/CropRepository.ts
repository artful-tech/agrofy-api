import { PrismaClient } from "@prisma/gen-client";
import { ICropRepository } from "./interfaces";
import { CropModel } from "../models/CropModel";


export class CropRepository implements ICropRepository {
    constructor(private prisma: PrismaClient) {}

    findAll = async (): Promise<CropModel[]> => {
        return this.prisma.crop.findMany();
    }
}
