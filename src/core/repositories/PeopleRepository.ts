import { PrismaClient } from "@prisma/client";
import { IPeopleRepository } from "./interfaces";
import { PeopleModel, PeopleModelCreate, PeopleModelUpdate } from "../models/PeopleModel";
import { AppError } from "../errors/AppError";


export class PeopleRepository implements IPeopleRepository {
    constructor(private prisma: PrismaClient) { }

    public findAll = async (): Promise<PeopleModel[]> => {
        return await this.prisma.people.findMany({
            where: {
                deletedAt: null
            }
        });
    }

    public findOne = async (id: string): Promise<PeopleModel> => {
        return await this.prisma.people.findUniqueOrThrow({
            where: { 
                id: id,
                deletedAt: null
            }
        });
    }

    public create = async (model: PeopleModelCreate): Promise<string> => {
        const userExists = await this.prisma.user.findFirst({
            where: { 
                id: model.user.connect?.id,
                deletedAt: null
            }
        });

        if (!userExists) {
            throw new AppError('Não existe usuário com esse ID', 400)
        }

        const people = await this.prisma.people.create({
            data: model
        });

        return people.id;
    }

    public update = async (id: string, data: PeopleModelUpdate): Promise<PeopleModel> => {
        await this.prisma.people.findFirstOrThrow({
            where: { id }
        })

        return await this.prisma.people.update({
            where: { 
                id: id,
                deletedAt: null
            },
            data: data
        });
    }

    public delete = async (id: string): Promise<void> => {
        const person = await this.prisma.people.findUniqueOrThrow({
            where: { id }
        });

        await this.prisma.$transaction([
            
            this.prisma.people.update({
                where: { id },
                data: { deletedAt: new Date() }
            }),
            
            this.prisma.user.update({
                where: { id: person.userId },
                data: { deletedAt: new Date() }
            })
        ]);
    }
}
