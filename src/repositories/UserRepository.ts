import { PrismaClient, User } from '@prisma/gen-client'
import { CreateUserDTO, UpdateUserDTO } from '../models/UserModel'
import { IUserRepository } from './interfaces/IUserRepository'

export class UserRepository implements IUserRepository {

    constructor(private prisma: PrismaClient) {}

    findAll = async (): Promise<User[]> => {
        return this.prisma.user.findMany()
    }

    findById = async (id: number): Promise<User | null> => {
        return this.prisma.user.findUnique({ where: { id } })
    }

    create = async (data: CreateUserDTO) => {
        return this.prisma.user.create({ data })
    }

    update = async (id: number, data: UpdateUserDTO): Promise<User> => {
        return this.prisma.user.update({ where: { id }, data })
    }

    delete = async (id: number): Promise<User> => {
        return this.prisma.user.delete({ where: { id } })
    }
}