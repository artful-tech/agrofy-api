import { PlotDtoCreate, PlotDtoUpdate, PlotDtoView } from "../../shared/dtos/PlotDto";
import { PlotMapper } from "../models/PlotModel";
import { IPlotRepository } from "../repositories/interfaces";
import { IPlotUsecase } from "./interfaces";

export class PlotUsecase implements IPlotUsecase {
    constructor(private plotRepository: IPlotRepository) {}
        
    public getAll = async (): Promise<PlotDtoView[]> => {
        const plots = await this.plotRepository.findAll();

        if (!plots) {
            return [];
        }

        return PlotMapper.toView(plots);
    }

    public getOne(id: string): Promise<PlotDtoView | null> {
        throw new Error("Method not implemented.");
    }

    public create(createDto: PlotDtoCreate): Promise<string> {
        throw new Error("Method not implemented.");
    }

    public update(updateDto: PlotDtoUpdate): Promise<PlotDtoView> {
        throw new Error("Method not implemented.");
    }

    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}