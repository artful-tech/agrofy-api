import { ViewFarmDto } from "../../shared/dtos/FarmDto";
import { FarmMapper } from "../models/FarmModel";
import { IFarmRepository } from "../repositories/interfaces";
import { IFarmUsecase } from "./interfaces";

export class FarmUsecase implements IFarmUsecase {
    constructor(private farmRepository: IFarmRepository) {}
    
    public getAll = async (): Promise<ViewFarmDto[]> => {
        const farms = await this.farmRepository.findAll();

        if (!farms) {
            return [];
        }

        return FarmMapper.toView(farms);
    }
}