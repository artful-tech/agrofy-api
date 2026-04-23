import { InventoryItem, Prisma } from "@prisma/client";
import {
  CreateInventoryDto,
  UpdateInventoryDto,
  ViewInventoryDto
} from "../../shared/dtos/InventoryDto";

export type InventoryModel = InventoryItem;

export class InventoryMapper {

    static toView(model: InventoryModel): ViewInventoryDto;
    static toView(models: InventoryModel[]): ViewInventoryDto[];

    /**
     * Transforma o modelo do Banco/Prisma para o que o Front-end precisa
     */
    static toView(
        model: InventoryModel | InventoryModel[]
    ): ViewInventoryDto | ViewInventoryDto[] {
        if (Array.isArray(model)) {
            return model.map(item => this.mapToDto(item));
        }

        return this.mapToDto(model);
    }

    /**
     * Transforma o que vem do Front-end (Create) para o Prisma Input
     */
    static fromCreateDtoToInput(
        dto: CreateInventoryDto
    ): Prisma.InventoryItemCreateInput {
        return {
            name: dto.name,
            category: dto.category,
            quantity: dto.quantity,
            unit: dto.unit,
            minStock: dto.minStock,
            farm: {
                connect: {
                    id: dto.farmId
                }
            }
        };
    }

    /**
     * Transforma Update DTO para Prisma UpdateInput
     */
    static fromUpdateDtoToInput(
        dto: UpdateInventoryDto
    ): Prisma.InventoryItemUpdateInput {
        return {
            id: dto.id,
            name: dto.name,
            category: dto.category,
            quantity: dto.quantity,
            unit: dto.unit,
            minStock: dto.minStock
        };
    }

    private static mapToDto(
        model: InventoryModel
    ): ViewInventoryDto {
        return {
            id: model.id,
            name: model.name,
            category: model.category,
            quantity: model.quantity,
            unit: model.unit,
            minStock: model.minStock,
            farmId: model.farmId,
            createdAt: model.createdAt,
            updatedAt: model.updatedAt
        };
    }
}