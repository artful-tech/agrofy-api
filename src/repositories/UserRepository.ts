import { PrismaClient } from '@prisma/gen-client'
import { CreateUserDTO, UpdateUserDTO } from '../models/UserModel'

export class UserRepository {

    constructor(private prisma: PrismaClient) {}

    async findAll() {
        return this.prisma.user.findMany()
    }

    async findById(id: number) {
        return this.prisma.user.findUnique({ where: { id } })
    }

    async create(data: CreateUserDTO) {
        return this.prisma.user.create({ data })
    }

    async update(id: number, data: UpdateUserDTO) {
        return this.prisma.user.update({ where: { id }, data })
    }

    async delete(id: number) {
        return this.prisma.user.delete({ where: { id } })
    }
}