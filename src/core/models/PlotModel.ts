import { Plot, Prisma } from "@prisma/client";
import { PlotDtoCreate, PlotDtoUpdate, PlotDtoView} from "../../shared/dtos/PlotDto";


export type PlotModel = Plot;
export type PlotModelCreate = Prisma.PlotCreateInput;
export type PlotModelUpdate = Prisma.PlotUpdateInput;

export class PlotMapper {
    
    static toView(model: PlotModel): PlotDtoView;
    static toView(models: PlotModel[]): PlotDtoView[];

    /**
     * Transforma o modelo do Banco/Prisma para o que o Front-end precisa
     */
    static toView(model: PlotModel | PlotModel[]): PlotDtoView | PlotDtoView[] {
        if (Array.isArray(model)) {
            return model.map(item => this.mapToDto(item));
        }
        return this.mapToDto(model);
    }

    /**
     * Transforma o que vem do Front-end (View) Create para o Modelo de Domínio
     */
    static fromCreateDtoToInput(dto: PlotDtoCreate): PlotModelCreate {
        return {
            name: dto.name,
            area: dto.area,
            unity: dto.unity,
            soilType: dto.soilType,
            farm: {
                connect: { id: dto.farmId }
            },
            photo: dto.photo,
            observation: dto.observation
        };
    }

    static fromUpdateDtoToInput(dto: PlotDtoUpdate): PlotModelUpdate {
        return {
            id: dto.id,
            name: dto.name,
            area: dto.area,
            unity: dto.unity,
            soilType: dto.soilType,
            photo: dto.photo,
            observation: dto.observation
        };
    }

    private static mapToDto(model: PlotModel): PlotDtoView {
        return {
            name: model.name,
            id: model.id,
            area: model.area,
            unity: model.unity,
            soilType: model.soilType,
            farmId: model.farmId,
            photo: model.photo,
            observation: model.observation,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt
        };
    }
}