import { ViewPlotDto } from "../../views/dto/PlotDto";
import { IPlotRepository } from "../repositories/interfaces";
import { IPlotUsecase } from "./interfaces";

export class PlotUsecase implements IPlotUsecase {
    constructor(private plotRepository: IPlotRepository) {}
        
    public getAll = async (): Promise<ViewPlotDto[]> => {
        const plots = await this.plotRepository.findAll();

        if (!plots) {
            return [];
        }

        return plots.map(plot => ({
            name: plot.name,
            id: plot.id
        }));
    }
}