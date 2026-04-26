import { FarmDtoCreate, FarmDtoUpdate, FarmDtoView } from "../../shared/dtos/FarmDto";
import { FarmMapper } from "../models/FarmModel";
import { IFarmRepository } from "../repositories/interfaces";
import { IFarmUsecase } from "./interfaces";

export class FarmUsecase implements IFarmUsecase {
    constructor(private farmRepository: IFarmRepository) {}
    
    public getAll = async (): Promise<FarmDtoView[]> => {
        const farms = await this.farmRepository.findAll();

        if (!farms) {
            return [];
        }

        return FarmMapper.toView(farms);
    }

    public getOne = async (id: string): Promise<FarmDtoView> => {
        throw new Error("Method not implemented.");
    }

    public create = async (createDto: FarmDtoCreate): Promise<string> => {
        const model = FarmMapper.fromCreateDtoToInput(createDto);

        const farmId = await this.farmRepository.create(model);

        return farmId;
    }

    public update = async (updateDto: FarmDtoUpdate): Promise<FarmDtoView> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (): Promise<void> => {
        throw new Error("Method not implemented.");
    }
}