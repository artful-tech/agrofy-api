import { PrismaClient } from "@prisma/client";
import { IPeopleRepository } from "./interfaces";
import { PeopleModel, PeopleModelCreate, PeopleModelUpdate } from "../models/PeopleModel";

export class PeopleRepository implements IPeopleRepository {
    constructor(private prisma: PrismaClient) { }

    public findAll = (): Promise<PeopleModel[]> => {
        throw new Error("Method not implemented.");
    }

    public findOne = (id: string): Promise<PeopleModel> => {
        throw new Error("Method not implemented.");
    }

    public create = (model: PeopleModelCreate): Promise<string | null> => {
        throw new Error("Method not implemented.");
    }

    public update = async (model: PeopleModelUpdate): Promise<PeopleModel | null> => {
        throw new Error("Method not implemented.");
    }

    public delete = (id: string): Promise<boolean> => {
        throw new Error("Method not implemented.");
    }
}