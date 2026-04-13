import { ViewPlotDto } from "../../shared/dtos/PlotDto";
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
}