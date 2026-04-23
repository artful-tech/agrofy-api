import { Crop, Farm, Plot, User, InventoryItem } from "@prisma/client";

export interface IBaseRepository<T> {
    findAll(): Promise<T[]>
}

export interface ICropRepository extends IBaseRepository<Crop> {}

export interface IFarmRepository extends IBaseRepository<Farm> {}

export interface IPlotRepository extends IBaseRepository<Plot> {}

export interface IUserRepository extends IBaseRepository<User> {
    findById(id: string): Promise<User | null>;
    create(data: any): Promise<User>;
    update(id: string, data: any): Promise<User>;
    delete(id: string): Promise<User>;
}

export interface IInventoryRepository extends IBaseRepository<InventoryItem> {
    findById(id: string): Promise<InventoryItem | null>;
    create(data: any): Promise<InventoryItem>;
    update(id: string, data: any): Promise<InventoryItem>;
    delete(id: string): Promise<InventoryItem>;
}