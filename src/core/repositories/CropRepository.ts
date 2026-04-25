import { PrismaClient } from "@prisma/client";
import { ICropRepository } from "./interfaces";
import { CropModelCreate, CropModel, CropModelUpdate } from "../models/CropModel";


export class CropRepository implements ICropRepository {
    constructor(private prisma: PrismaClient) {}

    public findAll = async (): Promise<CropModel[]> => {
        return await this.prisma.crop.findMany();
    }

    public findOne = async (id: string): Promise<CropModel> => {
        return await this.prisma.crop.findUniqueOrThrow({
            where: { id: id }
        });
    }

    public create = async (model: CropModelCreate): Promise<string> => {
        const crop = await this.prisma.crop.create({
            data: model
        });
        return crop.id;
    }

    public update = async (id: string, model: CropModelUpdate): Promise<CropModel> => {
        return await this.prisma.crop.update({
            where: { id: id },
            data: model
        });
    }

    public delete = async (id: string): Promise<void> => {
        await this.prisma.crop.delete({
            where: { id: id }
        });
    }
}
