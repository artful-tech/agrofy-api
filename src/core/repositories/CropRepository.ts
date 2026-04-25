import { PrismaClient } from "@prisma/client";
import { ICropRepository } from "./interfaces";
import { CropModelCreate, CropModel, CropModelUpdate } from "../models/CropModel";


export class CropRepository implements ICropRepository {
    constructor(private prisma: PrismaClient) {}

    public findAll = async (): Promise<CropModel[]> => {
        return await this.prisma.crop.findMany();
    }

    public findOne = async (id: string): Promise<CropModel> => {
        throw new Error("Method not implemented.");
    }

    public create = async (model: CropModelCreate): Promise<string | null> => {
        const crop = await this.prisma.crop.create({
            data: model
        });
        return crop.id;
    }

    public update = async (model: CropModelUpdate): Promise<CropModel | null> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (id: string): Promise<boolean> => {
        throw new Error("Method not implemented.");
    }
}
