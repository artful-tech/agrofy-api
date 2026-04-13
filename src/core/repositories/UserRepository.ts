import { Prisma, PrismaClient } from "@prisma/client";
import { IUserRepository } from './interfaces'
import { UserModel } from "../models/UserModel";


export class UserRepository implements IUserRepository {

    constructor(private prisma: PrismaClient) {}

    findAll = async (): Promise<UserModel[]> => {
        return this.prisma.user.findMany()
    }

    findById = async (id: string): Promise<UserModel | null> => {
        return this.prisma.user.findUnique({ where: { id } })
    }

    create = async (data: Prisma.UserCreateInput) => {
        return this.prisma.user.create({ data })
    }

    update = async (id: string, data: Prisma.UserUpdateInput): Promise<UserModel> => {
        return this.prisma.user.update({ where: { id }, data })
    }

    delete = async (id: string): Promise<UserModel> => {
        return this.prisma.user.delete({ where: { id } })
    }
}