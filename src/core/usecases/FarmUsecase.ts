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

    public getOne(id: string): Promise<FarmDtoView | null> {
        throw new Error("Method not implemented.");
    }

    public create(createDto: FarmDtoCreate): Promise<string> {
        throw new Error("Method not implemented.");
    }

    public update(updateDto: FarmDtoUpdate): Promise<FarmDtoView> {
        throw new Error("Method not implemented.");
    }

    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}