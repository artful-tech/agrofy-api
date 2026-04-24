
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

    public getOne(id: string): Promise<ViewCropDto | null> {
        throw new Error("Method not implemented.");
    }

    public create(createDto: { name: string; daysToHarvest: number; variety?: string | undefined; photo?: string | undefined; observation?: string | undefined; }): Promise<string> {
        throw new Error("Method not implemented.");
    }

    public update(updateDto: { id: string; name?: string | undefined; variety?: string | undefined; photo?: string | undefined; daysToHarvest?: number | undefined; observation?: string | undefined; }): Promise<ViewCropDto> {
        throw new Error("Method not implemented.");
    }

    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}