import { Crop, Farm, Finance, Plot, User } from "@prisma/client";

export interface IBaseRepository<T> {
    findAll(): Promise<T[]>
}

export interface ICropRepository extends IBaseRepository<Crop> {}

export interface IFarmRepository extends IBaseRepository<Farm> {}

export interface IPlotRepository extends IBaseRepository<Plot> {}

export interface IFinanceRepository {
    watchFinance(managerId: string): Promise<Finance | null>;
    updateFinance(): Promise<Finance>;
}

export interface IUserRepository extends IBaseRepository<User> {
    findById(id: string): Promise<User | null>;
    create(data: any): Promise<User>;
    update(id: string, data: any): Promise<User>;
    delete(id: string): Promise<User>;
}