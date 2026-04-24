import {
    Crop,
    Farm,
    Finance,
    Plot,
    User,
    FieldLog
} from "@prisma/client";

export interface IBaseRepository<T> {
    findAll(): Promise<T[]>
    findOne(id: string): Promise<T | null>
    create(model: T): Promise<string | null>
    update(model: T): Promise<T | null>
    delete(id: string): Promise<boolean>
}

export interface ICropRepository extends IBaseRepository<Crop> { }

export interface IFarmRepository extends IBaseRepository<Farm> { }

export interface IPlotRepository extends IBaseRepository<Plot> { }

export interface IFinanceRepository {
    watchFinance(managerId: string): Promise<Finance>;
    updateFinance(): Promise<Finance>;
}

export interface IUserRepository extends IBaseRepository<User> {
    findByEmail(email: string): Promise<User>
}

export interface IFieldLogRepository extends IBaseRepository<FieldLog> { }

