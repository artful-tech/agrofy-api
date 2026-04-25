import { People, Prisma } from "@prisma/client";
import { PeopleDtoCreate, PeopleDtoUpdate, PeopleDtoView } from "../../shared/dtos/PeopleDto";

export type PeopleModel = People;
export type PeopleModelCreate = Prisma.PeopleCreateInput;
export type PeopleModelUpdate = Prisma.PeopleUpdateInput;

export class PeopleMapper {
    static toView(model: PeopleModel): PeopleDtoView;
    static toView(models: PeopleModel[]): PeopleDtoView[];

    /**
     * Transforma o modelo do Banco/Prisma para o que o Front-end precisa
     */
    static toView(model: PeopleModel | PeopleModel[]): PeopleDtoView | PeopleDtoView[] {
        if (Array.isArray(model)) {
            return model.map(item => this.mapToDto(item));
        }
        return this.mapToDto(model);
    }

    /**
     * Transforma o que vem do Front-end (View) Create para o Modelo de Domínio
     */
    static fromCreateDtoToInput(dto: PeopleDtoCreate): PeopleModelCreate {
        return {
            name: dto.name,
            cellphone: dto.cellphone,
            photo: dto.photo,
            user: {
                connect: { id: dto.userId }
            }
        };
    }

    static fromUpdateDtoToInput(dto: PeopleDtoUpdate): PeopleModelUpdate {
        return {
            id: dto.id,
            name: dto.name,
            cellphone: dto.cellphone,
            role: dto.role,
            photo: dto.photo,
            user: {
                connect: { id: dto.userId }
            }
        };
    }

    private static mapToDto(model: PeopleModel): PeopleDtoView {
        return {
            id: model.id,
            name: model.name,
            cellphone: model.cellphone,
            role: model.role,
            photo: model.photo,
            userId: model.userId,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt
        };
    }
}