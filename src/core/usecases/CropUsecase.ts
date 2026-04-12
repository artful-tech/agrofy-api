import { ViewCropDto } from "../../views/dto/CropDto";
import { ICropRepository } from "../repositories/interfaces";
import { ICropUsecase } from "./interfaces";


export class CropUsecase implements ICropUsecase {
    
    constructor(private cropRepository: ICropRepository) {}

    public getAll = async (): Promise<ViewCropDto[]> => {
        const crops = await this.cropRepository.findAll();

        if (!crops) {
            return [];
        }

        return crops.map(crop => ({
            id: crop.id,
            name: crop.name,
            variety: crop.variety,
            daysToHarvest: crop.daysToHarvest,
            createdAt: crop.createdAt,
            updatedAt: crop.updatedAt
        }));
    }
}