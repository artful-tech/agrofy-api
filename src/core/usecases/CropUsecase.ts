import { CropDtoCreate, CropDtoUpdate, CropDtoView } from "../../shared/dtos/CropDto";
import { CropMapper, CropModelCreate } from "../models/CropModel";
import { ICropRepository } from "../repositories/interfaces";
import { ICropUsecase } from "./interfaces";


export class CropUsecase implements ICropUsecase {

    constructor(private cropRepository: ICropRepository) { }

    public getAll = async (): Promise<CropDtoView[]> => {
        const crops = await this.cropRepository.findAll();

        if (!crops) {
            return [];
        }

        return CropMapper.toView(crops);
    }

    public getOne = async (id: string): Promise<CropDtoView> => {
        throw new Error("Method not implemented.");
    }

    public create = async (createDto: CropDtoCreate): Promise<string> => {
        const cropCreateInput: CropModelCreate = CropMapper.fromCreateDtoToInput(createDto);
        const crop = await this.cropRepository.create(cropCreateInput);
        return crop ?? '';
    }

    public update = async (updateDto: CropDtoUpdate): Promise<CropDtoView> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (): Promise<void> => {
        throw new Error("Method not implemented.");
    }
}