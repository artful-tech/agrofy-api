import { PrismaClient } from "@prisma/client";
import { IUserRepository } from './interfaces'
import { UserModel, UserModelCreate, UserModelUpdate } from "../models/UserModel";


export class UserRepository implements IUserRepository {
    constructor(private prisma: PrismaClient) {}

    public findAll = async (): Promise<UserModel[]> => {
        return await this.prisma.user.findMany();
    }

    public findByEmail = async (email: string): Promise<UserModel> => {
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { email: email }
        });
        return user;
    }
    
    public findOne = async (id: string): Promise<UserModel> => {
        return this.prisma.user.findUniqueOrThrow({ where: { id } })
    }

    public create = async (userModel: UserModelCreate): Promise<string> => {
        const userCreated = await this.prisma.user.create({
            data: userModel
        });
        return userCreated.id;
    }

    public update = async (id: string, model: UserModelUpdate): Promise<UserModel> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (id: string): Promise<void> => {
        throw new Error("Method not implemented.");
    }
}