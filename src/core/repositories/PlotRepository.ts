import { PrismaClient } from "@prisma/client";
import { IPlotRepository } from "./interfaces";
import { PlotModel } from "../models/PlotModel";


export class PlotRepository implements IPlotRepository {
    constructor(private prisma: PrismaClient) { }

    public findAll = async (): Promise<PlotModel[]> => {
        return await this.prisma.plot.findMany();
    }

    public findOne(id: string): Promise<{ name: string; id: string; area: number; unity: string; soilType: string | null; farmId: string; photo: string | null; observation: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; } | null> {
        throw new Error("Method not implemented.");
    }

    public create(model: { name: string; id: string; area: number; unity: string; soilType: string | null; farmId: string; photo: string | null; observation: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; }): Promise<string | null> {
        throw new Error("Method not implemented.");
    }

    public update(model: { name: string; id: string; area: number; unity: string; soilType: string | null; farmId: string; photo: string | null; observation: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; }): Promise<{ name: string; id: string; area: number; unity: string; soilType: string | null; farmId: string; photo: string | null; observation: string | null; createdAt: Date; updatedAt: Date; deletedAt: Date | null; } | null> {
        throw new Error("Method not implemented.");
    }

    public delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    
}