import { User } from "@prisma/gen-client";

export interface IUserRepository {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    create(data: any): Promise<User>;
    update(id: number, data: any): Promise<User>;
    delete(id: number): Promise<User>;
}