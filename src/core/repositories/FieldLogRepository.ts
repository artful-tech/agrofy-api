import { PrismaClient } from "@prisma/client";
import { IFieldLogRepository } from "./interfaces";
import { FieldLogModel, FieldLogModelCreate, FieldLogModelUpdate } from "../models/FieldLogModel";

export class FieldLogRepository implements IFieldLogRepository {
    constructor(private prisma: PrismaClient) {}

    public findAll = async () => {
        return await this.prisma.fieldLog.findMany();
    }

    public findOne = async (id: string): Promise<FieldLogModel> => {
        throw new Error("Method not implemented.");
    }

    public create = async (model: FieldLogModelCreate): Promise<string> => {
    const fieldLog = await this.prisma.fieldLog.create({
        data: model
    });

    return fieldLog.id;
}

    public update = async (id: string, model: FieldLogModelUpdate): Promise<FieldLogModel> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (id: string): Promise<void> => {
        throw new Error("Method not implemented.");
    }
}