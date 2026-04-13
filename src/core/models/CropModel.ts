import { Crop, Prisma } from "@prisma/client";
import { CreateCropDto, UpdateCropDto, ViewCropDto } from "../../shared/dtos/CropDto";


export type CropModel  = Crop;

export class CropMapper {

    static toView(model: CropModel): ViewCropDto;
    static toView(models: CropModel[]): ViewCropDto[];

    /**
     * Transforma o modelo do Banco/Prisma para o que o Front-end precisa
     */
    static toView(model: CropModel | CropModel[]): ViewCropDto | ViewCropDto[] {
        if (Array.isArray(model)) {
            return model.map(item => this.mapToDto(item));
        }
        return this.mapToDto(model);
    }

    /**
     * Transforma o que vem do Front-end (View) Create para o Modelo de Domínio
     */
    static fromCreateDtoToInput(dto: CreateCropDto): Prisma.CropCreateInput {
        return {
            name: dto.name,
            variety: dto.variety,
            photo: dto.photo,
            daysToHarvest: dto.daysToHarvest,
            observation: dto.observation
        };
    }

    static fromUpdateDtoToInput(dto: UpdateCropDto): Prisma.CropUpdateInput {
        return {
            id: dto.id,
            name: dto.name,
            variety: dto.variety,
            photo: dto.photo,
            daysToHarvest: dto.daysToHarvest,
            observation: dto.observation
        };
    }

    private static mapToDto(model: CropModel): ViewCropDto {
        return {
            id: model.id,
            name: model.name,
            variety: model.variety,
            photo: model.photo,
            daysToHarvest: model.daysToHarvest,
            observation: model.observation,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt,
        };
    }
}
