import { CreateCropDto, ViewCropDto } from "../../shared/dtos/CropDto";
import { CropMapper, CropModelInput } from "../models/CropModel";
import { ICropRepository } from "../repositories/interfaces";
import { ICropUsecase } from "./interfaces";


export class CropUsecase implements ICropUsecase {

    constructor(private cropRepository: ICropRepository) { }

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

    public create = async (createDto: CreateCropDto): Promise<string> => {
        const cropCreateInput: CropModelInput = CropMapper.fromCreateDtoToInput(createDto);
        const crop = await this.cropRepository.create(cropCreateInput);
        return crop ?? '';
    }

    public update(updateDto: { id: string; name?: string | undefined; variety?: string | undefined; photo?: string | undefined; daysToHarvest?: number | undefined; observation?: string | undefined; }): Promise<ViewCropDto> {
        throw new Error("Method not implemented.");
    }

    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}