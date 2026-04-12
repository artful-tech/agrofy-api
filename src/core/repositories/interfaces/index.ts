import { Crop, Farm, Plot, User } from "@prisma/gen-client";

export interface IBaseRepository<T> {
    findAll(): Promise<T[]>
}

export interface ICropRepository extends IBaseRepository<Crop> {}

export interface IFarmRepository extends IBaseRepository<Farm> {}

export interface IPlotRepository extends IBaseRepository<Plot> {}

export interface IUserRepository extends IBaseRepository<User> {
    findById(id: number): Promise<User | null>;
    create(data: any): Promise<User>;
    update(id: number, data: any): Promise<User>;
    delete(id: number): Promise<User>;
}