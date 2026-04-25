import { CropModel, CropModelCreate, CropModelUpdate } from "../../models/CropModel";
import { FarmModel, FarmModelCreate, FarmModelUpdate } from "../../models/FarmModel";
import { PlotModel, PlotModelCreate, PlotModelUpdate } from "../../models/PlotModel";
import { UserModel, UserModelCreate, UserModelUpdate } from "../../models/UserModel";
import { FieldLogModel, FieldLogModelCreate, FieldLogModelUpdate } from "../../models/FieldLogModel";
import { FinanceModel } from "../../models/FinanceModel";

export interface IBaseRepository<M, C, U> {
    findAll(): Promise<M[]>
    findOne(id: string): Promise<M | null>
    create(model: C): Promise<string | null>
    update(model: U): Promise<M | null>
    delete(id: string): Promise<boolean>
}

export interface ICropRepository extends IBaseRepository<CropModel, CropModelCreate, CropModelUpdate> { }

export interface IFarmRepository extends IBaseRepository<FarmModel, FarmModelCreate, FarmModelUpdate> { }

export interface IPlotRepository extends IBaseRepository<PlotModel, PlotModelCreate, PlotModelUpdate> { }

export interface IFieldLogRepository extends IBaseRepository<FieldLogModel, FieldLogModelCreate, FieldLogModelUpdate> { }

export interface IUserRepository extends IBaseRepository<UserModel, UserModelCreate, UserModelUpdate> {
    findByEmail(email: string): Promise<UserModel>
}

export interface IFinanceRepository {
    watchFinance(managerId: string): Promise<FinanceModel>;
    updateFinance(): Promise<FinanceModel>;
}
