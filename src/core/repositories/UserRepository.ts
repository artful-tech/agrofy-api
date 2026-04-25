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
    
    public findOne = async (id: string): Promise<UserModel | null> => {
        return this.prisma.user.findUniqueOrThrow({ where: { id } })
    }

    public create = async (userModel: UserModelCreate): Promise<string | null> => {
        const userCreated = await this.prisma.user.create({
            data: userModel
        });
        const id = userCreated.id;
        return id;
    }

    public update = async (model: UserModelUpdate): Promise<UserModel | null> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (id: string): Promise<boolean> => {
        throw new Error("Method not implemented.");
    }
}