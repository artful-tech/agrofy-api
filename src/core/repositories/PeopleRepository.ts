import { PrismaClient } from "@prisma/client";
import { IPeopleRepository } from "./interfaces";
import { PeopleModel, PeopleModelCreate, PeopleModelUpdate } from "../models/PeopleModel";


export class PeopleRepository implements IPeopleRepository {
    constructor(private prisma: PrismaClient) { }

    public findAll = async (): Promise<PeopleModel[]> => {
        return await this.prisma.people.findMany();
    }

    public findOne = async (id: string): Promise<PeopleModel> => {
        return await this.prisma.people.findUniqueOrThrow({
            where: { id: id }
        });
    }

    public create = async (model: PeopleModelCreate): Promise<string> => {
        const people = await this.prisma.people.create({
            data: model
        });

        return people.id;
    }

    public update = async (id: string, data: PeopleModelUpdate): Promise<PeopleModel> => {
        return await this.prisma.people.update({
            where: { id: id },
            data: data
        });
    }

    public delete = async (id: string): Promise<void> => {
        await this.prisma.people.delete({
            where: { id: id }
        });
    }
}
