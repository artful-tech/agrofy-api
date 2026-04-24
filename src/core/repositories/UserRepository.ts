import { Prisma, PrismaClient } from "@prisma/client";
import { IUserRepository } from './interfaces'
import { UserModel } from "../models/UserModel";


export class UserRepository implements IUserRepository {
    constructor(private prisma: PrismaClient) {}

    public findAll = async (): Promise<UserModel[]> => {
        return await this.prisma.user.findMany()
    }

    public findByEmail = async (email: string): Promise<UserModel | null> => {
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { email: email }
        });
        return user;
    }
    
    public findOne(id: string): Promise<{ id: string; email: string; password: string; createdAt: Date; updatedAt: Date; deletedAt: Date | null; } | null> {
        return this.prisma.user.findUnique({ where: { id } })
    }

    public create(model: { id: string; email: string; password: string; createdAt: Date; updatedAt: Date; deletedAt: Date | null; }): Promise<string | null> {
        throw new Error("Method not implemented.");
    }

    public update(model: { id: string; email: string; password: string; createdAt: Date; updatedAt: Date; deletedAt: Date | null; }): Promise<{ id: string; email: string; password: string; createdAt: Date; updatedAt: Date; deletedAt: Date | null; } | null> {
        throw new Error("Method not implemented.");
    }

    public delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    
}