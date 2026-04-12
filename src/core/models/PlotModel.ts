import { Plot, Prisma } from "@prisma/client";
import { CreatePlotDto, UpdatePlotDto, ViewPlotDto } from "../../views/dto/PlotDto";

export type PlotModel = Plot;

export class PlotMapper {
    static toView(model: PlotModel): ViewPlotDto;
    static toView(models: PlotModel[]): ViewPlotDto[];

    /**
     * Transforma o modelo do Banco/Prisma para o que o Front-end precisa
     */
    static toView(model: PlotModel | PlotModel[]): ViewPlotDto | ViewPlotDto[] {
        if (Array.isArray(model)) {
            return model.map(item => this.mapToDto(item));
        }
        return this.mapToDto(model);
    }

    /**
     * Transforma o que vem do Front-end (View) Create para o Modelo de Domínio
     */
    static fromCreateDtoToInput(dto: CreatePlotDto): Prisma.PlotCreateInput {
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

    static fromUpdateDtoToInput(dto: UpdatePlotDto): Prisma.PlotUpdateInput {
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

    private static mapToDto(model: PlotModel): ViewPlotDto {
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