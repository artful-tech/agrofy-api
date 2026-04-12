import { CreateCropDto, UpdateCropDto, ViewCropDto } from "../../../views/dto/CropDto";
import { CreateFarmDto, UpdateFarmDto, ViewFarmDto } from "../../../views/dto/FarmDto";
import { CreatePlotDto, UpdatePlotDto, ViewPlotDto } from "../../../views/dto/PlotDto";
import { CreateUserDto, UpdatePasswordDto, ViewUserDto } from "../../../views/dto/UserDto";

export interface IBaseUsecase<V, C, U, D> {
    getAll(): Promise<V[]>
}

export interface ICropUsecase extends IBaseUsecase<ViewCropDto, CreateCropDto, UpdateCropDto, string> {}

export interface IFarmUsecase extends IBaseUsecase<ViewFarmDto, CreateFarmDto, UpdateFarmDto, string> {}

export interface IPlotUsecase extends IBaseUsecase<ViewPlotDto, CreatePlotDto, UpdatePlotDto, string> {}

export interface IUserUsecase extends IBaseUsecase<ViewUserDto, CreateUserDto, UpdatePasswordDto, string> {}