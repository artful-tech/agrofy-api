import { ViewFarmDto } from "../../views/dto/FarmDto";
import { IFarmRepository } from "../repositories/interfaces";
import { IFarmUsecase } from "./interfaces";

export class FarmUsecase implements IFarmUsecase {
    constructor(private farmRepository: IFarmRepository) {}
    
    public getAll = async (): Promise<ViewFarmDto[]> => {
        const farms = await this.farmRepository.findAll();

        if (!farms) {
            return [];
        }

        return farms.map(farm => ({
            name: farm.name,
            id: farm.id,
            ownerName: farm.ownerName,
            totalArea: farm.totalArea,
            location: farm.location,
            address: farm.address,
            createdAt: farm.createdAt,
            updatedAt: farm.updatedAt
        }));
    }
}