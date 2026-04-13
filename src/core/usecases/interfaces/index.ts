import { CreateCropDto, UpdateCropDto, ViewCropDto } from "../../../shared/dtos/CropDto";
import { CreateFarmDto, UpdateFarmDto, ViewFarmDto } from "../../../shared/dtos/FarmDto";
import { CreatePlotDto, UpdatePlotDto, ViewPlotDto } from "../../../shared/dtos/PlotDto";
import { CreateUserDto, UpdatePasswordDto, ViewUserDto } from "../../../shared/dtos/UserDto";


export interface IBaseUsecase<V, C, U, D> {
    getAll(): Promise<V[]>
}

export interface ICropUsecase extends IBaseUsecase<ViewCropDto, CreateCropDto, UpdateCropDto, string> {}

export interface IFarmUsecase extends IBaseUsecase<ViewFarmDto, CreateFarmDto, UpdateFarmDto, string> {}

export interface IPlotUsecase extends IBaseUsecase<ViewPlotDto, CreatePlotDto, UpdatePlotDto, string> {}

export interface IUserUsecase extends IBaseUsecase<ViewUserDto, CreateUserDto, UpdatePasswordDto, string> {}