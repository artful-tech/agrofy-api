import { PrismaClient } from "@prisma/client";
import { IFarmRepository } from "./interfaces";
import { FarmModel } from "../models/FarmModel";


export class FarmRepository implements IFarmRepository {
    constructor(private prisma: PrismaClient) {}

    public findAll = async (): Promise<FarmModel[]> => {
        return await this.prisma.farm.findMany();
    }

    public findOne(id: string): Promise<{ name: string; id: string; photo: string | null; observation: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; totalArea: number; unity: string; resume: string | null; addressId: string; } | null> {
        throw new Error("Method not implemented.");
    }

    public create(model: { name: string; id: string; photo: string | null; observation: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; totalArea: number; unity: string; resume: string | null; addressId: string; }): Promise<string | null> {
        throw new Error("Method not implemented.");
    }

    public update(model: { name: string; id: string; photo: string | null; observation: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; totalArea: number; unity: string; resume: string | null; addressId: string; }): Promise<{ name: string; id: string; photo: string | null; observation: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; totalArea: number; unity: string; resume: string | null; addressId: string; } | null> {
        throw new Error("Method not implemented.");
    }

    public delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    
}