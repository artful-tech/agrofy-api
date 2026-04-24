import { CreateFarmDto, UpdateFarmDto, ViewFarmDto } from "../../shared/dtos/FarmDto";
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

    public getOne(id: string): Promise<ViewFarmDto | null> {
        throw new Error("Method not implemented.");
    }

    public create(createDto: CreateFarmDto): Promise<string> {
        throw new Error("Method not implemented.");
    }

    public update(updateDto: UpdateFarmDto): Promise<ViewFarmDto> {
        throw new Error("Method not implemented.");
    }

    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}