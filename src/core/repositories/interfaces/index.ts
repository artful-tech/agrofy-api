import { CropModel, CropModelInput, CropModelUpdate } from "../../models/CropModel";
import { FarmModel } from "../../models/FarmModel";
import { PlotModel } from "../../models/PlotModel";
import { UserModel } from "../../models/UserModel";
import { FieldLogModel } from "../../models/FieldLogModel";
import { FinanceModel } from "../../models/FinanceModel";

export interface IBaseRepository<M, C, U> {
    findAll(): Promise<M[]>
    findOne(id: string): Promise<M | null>
    create(model: C): Promise<string | null>
    update(model: U): Promise<M | null>
    delete(id: string): Promise<boolean>
}

export interface ICropRepository extends IBaseRepository<CropModel, CropModelInput, CropModelUpdate> { }

export interface IFarmRepository extends IBaseRepository<FarmModel, any, any> { }

export interface IPlotRepository extends IBaseRepository<PlotModel, any, any> { }

export interface IFinanceRepository {
    watchFinance(managerId: string): Promise<FinanceModel>;
    updateFinance(): Promise<FinanceModel>;
}

export interface IUserRepository extends IBaseRepository<UserModel, any, any> {
    findByEmail(email: string): Promise<UserModel>
}

export interface IFieldLogRepository extends IBaseRepository<FieldLogModel, any, any> { }

