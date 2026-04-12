import { Prisma, PrismaClient, User } from "@prisma/client";
import { IUserRepository } from './interfaces'


export class UserRepository implements IUserRepository {

    constructor(private prisma: PrismaClient) {}

    findAll = async (): Promise<User[]> => {
        return this.prisma.user.findMany()
    }

    findById = async (id: string): Promise<User | null> => {
        return this.prisma.user.findUnique({ where: { id } })
    }

    create = async (data: Prisma.UserCreateInput) => {
        return this.prisma.user.create({ data })
    }

    update = async (id: string, data: Prisma.UserUpdateInput): Promise<User> => {
        return this.prisma.user.update({ where: { id }, data })
    }

    delete = async (id: string): Promise<User> => {
        return this.prisma.user.delete({ where: { id } })
    }
}