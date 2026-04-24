import { CreateCropDto, UpdateCropDto, ViewCropDto } from "../../../shared/dtos/CropDto";
import { CreateFarmDto, UpdateFarmDto, ViewFarmDto } from "../../../shared/dtos/FarmDto";
import { ViewFinanceDto } from "../../../shared/dtos/FinanceDto";
import { CreatePlotDto, UpdatePlotDto, ViewPlotDto } from "../../../shared/dtos/PlotDto";
import { CreateUserDto, UpdatePasswordDto, ViewUserDto } from "../../../shared/dtos/UserDto";
import { ViewFieldLogDto } from "../../../shared/dtos/FieldLogDto";


export interface IBaseUsecase<V, C, U, D> {
    getAll(): Promise<V[]>
}

export interface ICropUsecase extends IBaseUsecase<ViewCropDto, CreateCropDto, UpdateCropDto, string> {}

export interface IFarmUsecase extends IBaseUsecase<ViewFarmDto, CreateFarmDto, UpdateFarmDto, string> {}

export interface IPlotUsecase extends IBaseUsecase<ViewPlotDto, CreatePlotDto, UpdatePlotDto, string> {}

export interface IUserUsecase extends IBaseUsecase<ViewUserDto, CreateUserDto, UpdatePasswordDto, string> {}

export interface IFieldLogUsecase extends IBaseUsecase<ViewFieldLogDto, any, any, string> {}

export interface IFinanceUsecase {
    get(id: string): Promise<ViewFinanceDto | null>;
}
