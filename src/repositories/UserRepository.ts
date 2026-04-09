import { PrismaClient } from '../../prisma/generated/prisma/client'
import { CreateUserDTO, UpdateUserDTO } from '../models/UserModel'

export class UserRepository {

    constructor(private prisma: PrismaClient) {}

    findAll = async () => {
        return this.prisma.user.findMany()
    }

    findById = async (id: number) => {
        return this.prisma.user.findUnique({ where: { id } })
    }

    create = async (data: CreateUserDTO) => {
        return this.prisma.user.create({ data })
    }

    update = async (id: number, data: UpdateUserDTO) => {
        return this.prisma.user.update({ where: { id }, data })
    }

    delete = async (id: number) => {
        return this.prisma.user.delete({ where: { id } })
    }
}