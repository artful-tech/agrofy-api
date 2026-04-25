import { PrismaClient } from "@prisma/client";
import { IFarmRepository } from "./interfaces";
import { FarmModel, FarmModelCreate, FarmModelUpdate } from "../models/FarmModel";


export class FarmRepository implements IFarmRepository {
    constructor(private prisma: PrismaClient) {}
    

    public findAll = async (): Promise<FarmModel[]> => {
        return await this.prisma.farm.findMany();
    }

    public findOne = async (id: string): Promise<FarmModel> => {
        throw new Error("Method not implemented.");
    }

    public create = async (model: FarmModelCreate): Promise<string | null> => {
        throw new Error("Method not implemented.");
    }

    public update = async (model: FarmModelUpdate): Promise<FarmModel | null> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (id: string): Promise<boolean> => {
        throw new Error("Method not implemented.");
    }

    
}