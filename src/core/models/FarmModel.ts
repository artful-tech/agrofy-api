import { Farm, Prisma } from "@prisma/client";
import { CreateFarmDto, UpdateFarmDto, ViewFarmDto } from "../../shared/dtos/FarmDto";


export type FarmModel = Farm;
export type FarmModelCreate = Prisma.FarmCreateInput;
export type FarmModelUpdate = Prisma.FarmUpdateInput;

export class FarmMapper {
    
    static toView(model: FarmModel): ViewFarmDto;
    static toView(models: FarmModel[]): ViewFarmDto[];

    /**
     * Transforma o modelo do Banco/Prisma para o que o Front-end precisa
     */
    static toView(model: FarmModel | FarmModel[]): ViewFarmDto | ViewFarmDto[] {
        if (Array.isArray(model)) {
            return model.map(item => this.mapToDto(item));
        }
        return this.mapToDto(model);
    }

    /**
     * Transforma o que vem do Front-end (View) Create para o Modelo de Domínio
     */
    static fromCreateDtoToInput(dto: CreateFarmDto): FarmModelCreate {
        return {
            name: dto.name,
            totalArea: dto.totalArea,
            unity: dto.unity,
            resume: dto.resume,
            photo: dto.photo,
            observation: dto.observation,
            address: {
                create: {
                    number: dto.address.number,
                    street: dto.address.street,
                    complement: dto.address.complement,
                    neighborhood: dto.address.neighborhood,
                    city: dto.address.city,
                    state: dto.address.state,
                    country: dto.address.country
                }
            }
        };
    }

    static fromUpdateDtoToInput(dto: UpdateFarmDto): FarmModelUpdate {
        let addressInput = undefined;

        if (dto.address) {
            addressInput = {
                number: dto.address?.number,
                street: dto.address?.street,
                complement: dto.address?.complement,
                neighborhood: dto.address?.neighborhood,
                city: dto.address?.city,
                state: dto.address?.state,
                country: dto.address?.country
            }
        }

        return {
            name: dto.name,
            totalArea: dto.totalArea,
            unity: dto.unity,
            resume: dto.resume,
            photo: dto.photo,
            observation: dto.observation,
            address: {
                update: addressInput
            }
        };
    }

    private static mapToDto(model: FarmModel): ViewFarmDto {
        return {
            name: model.name,
            id: model.id,
            totalArea: model.totalArea,
            unity: model.unity,
            resume: model.resume,
            photo: model.photo,
            addressId: model.addressId,
            observation: model.observation,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt
        };
    }
}