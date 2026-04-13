
import { ViewCropDto } from "../../shared/dtos/CropDto";
import { CropMapper } from "../models/CropModel";
import { ICropRepository } from "../repositories/interfaces";
import { ICropUsecase } from "./interfaces";


export class CropUsecase implements ICropUsecase {
    
    constructor(private cropRepository: ICropRepository) {}

    public getAll = async (): Promise<ViewCropDto[]> => {
        const crops = await this.cropRepository.findAll();

        if (!crops) {
            return [];
        }

        return CropMapper.toView(crops);
    }
}