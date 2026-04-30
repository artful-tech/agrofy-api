import { CropDtoCreate, CropDtoUpdate, CropDtoView } from "../../../shared/dtos/CropDto";
import { FarmDtoCreate, FarmDtoUpdate, FarmDtoView } from "../../../shared/dtos/FarmDto";
import { FinanceDtoView } from "../../../shared/dtos/FinanceDto";
import { PlotDtoCreate, PlotDtoUpdate, PlotDtoView } from "../../../shared/dtos/PlotDto";
import { UserDtoCreate, PasswordDtoUpdate, UserDtoView } from "../../../shared/dtos/UserDto";
import { FieldLogDtoView } from "../../../shared/dtos/FieldLogDto";
import { PeopleDtoCreate, PeopleDtoUpdate, PeopleDtoView } from "../../../shared/dtos/PeopleDto";
import { SeasonDtoCreate, SeasonDtoUpdate, SeasonDtoView } from "../../../shared/dtos/SeasonDto";

/**
 * Interface base para os casos de uso (Usecases) do Agrofy.
 * * @template V - DTO de Visualização (View DTO)
 * @template C - DTO de Criação (Create DTO)
 * @template U - DTO de Atualização (Update DTO)
 * @template D - Tipo do ID (ex: string ou number)
 * @template E - Tipo do identificador único para exclusão
 */
export interface IBaseUsecase<V, C, U, D, E> {
    getAll(): Promise<V[]>;
    getOne(id: string): Promise<V>;
    create(createDto: C): Promise<D>;
    update(updateDto: U): Promise<V>;
    delete(id: E): Promise<void>;
}

export interface ICropUsecase extends IBaseUsecase<CropDtoView, CropDtoCreate, CropDtoUpdate, string, string> {}

export interface IFarmUsecase extends IBaseUsecase<FarmDtoView, FarmDtoCreate, FarmDtoUpdate, string, string> {}

export interface IPlotUsecase extends IBaseUsecase<PlotDtoView, PlotDtoCreate, PlotDtoUpdate, string, string> {}

export interface IFieldLogUsecase extends IBaseUsecase<FieldLogDtoView, any, any, string, string> {}

export interface IFinanceUsecase extends IBaseUsecase<FinanceDtoView, any, any, string, string> { }

export interface IPeopleUsecase extends IBaseUsecase<PeopleDtoView, PeopleDtoCreate, PeopleDtoUpdate, string, string> { }

export interface ISeasonUsecase extends IBaseUsecase<SeasonDtoView, SeasonDtoCreate, SeasonDtoUpdate, string, string> { }

export interface IUserUsecase extends IBaseUsecase<UserDtoView, UserDtoCreate, PasswordDtoUpdate, string, string> {
    getByEmail(email: string): Promise<UserDtoView>;
}
