import { PrismaClient } from "@prisma/client";
import { ICropRepository } from "./interfaces";
import { CropModel } from "../models/CropModel";


export class CropRepository implements ICropRepository {
    constructor(private prisma: PrismaClient) {}

    public findAll = async (): Promise<CropModel[]> => {
        return await this.prisma.crop.findMany();
    }

    public findOne(id: string): Promise<{ name: string; id: string; variety: string | null; photo: string | null; daysToHarvest: number; observation: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; } | null> {
        throw new Error("Method not implemented.");
    }

    public create(model: { name: string; id: string; variety: string | null; photo: string | null; daysToHarvest: number; observation: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; }): Promise<string | null> {
        throw new Error("Method not implemented.");
    }

    public update(model: { name: string; id: string; variety: string | null; photo: string | null; daysToHarvest: number; observation: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; }): Promise<{ name: string; id: string; variety: string | null; photo: string | null; daysToHarvest: number; observation: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; } | null> {
        throw new Error("Method not implemented.");
    }

    public delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
