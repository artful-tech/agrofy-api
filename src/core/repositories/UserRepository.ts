import { PrismaClient, User } from '@prisma/gen-client'
import { CreateUserDto, UpdateUserDto } from '../../views/dto/UserDto'
import { IUserRepository } from './interfaces'


export class UserRepository implements IUserRepository {

    constructor(private prisma: PrismaClient) {}

    findAll = async (): Promise<User[]> => {
        return this.prisma.user.findMany()
    }

    findById = async (id: number): Promise<User | null> => {
        return this.prisma.user.findUnique({ where: { id } })
    }

    create = async (data: CreateUserDto) => {
        return this.prisma.user.create({ data })
    }

    update = async (id: number, data: UpdateUserDto): Promise<User> => {
        return this.prisma.user.update({ where: { id }, data })
    }

    delete = async (id: number): Promise<User> => {
        return this.prisma.user.delete({ where: { id } })
    }
}