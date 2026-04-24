import { CreatePlotDto, UpdatePlotDto, ViewPlotDto } from "../../shared/dtos/PlotDto";
import { PlotMapper } from "../models/PlotModel";
import { IPlotRepository } from "../repositories/interfaces";
import { IPlotUsecase } from "./interfaces";

export class PlotUsecase implements IPlotUsecase {
    constructor(private plotRepository: IPlotRepository) {}
        
    public getAll = async (): Promise<ViewPlotDto[]> => {
        const plots = await this.plotRepository.findAll();

        if (!plots) {
            return [];
        }

        return PlotMapper.toView(plots);
    }

    public getOne(id: string): Promise<ViewPlotDto | null> {
        throw new Error("Method not implemented.");
    }

    public create(createDto: CreatePlotDto): Promise<string> {
        throw new Error("Method not implemented.");
    }

    public update(updateDto: UpdatePlotDto): Promise<ViewPlotDto> {
        throw new Error("Method not implemented.");
    }

    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}