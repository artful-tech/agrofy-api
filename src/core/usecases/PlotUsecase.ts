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

    public getOne = async (id: string): Promise<PlotDtoView> => {
        throw new Error("Method not implemented.");
    }

    public create = async (createDto: PlotDtoCreate): Promise<string> => {
        throw new Error("Method not implemented.");
    }

    public update = async (updateDto: PlotDtoUpdate): Promise<PlotDtoView> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (): Promise<void> => {
        throw new Error("Method not implemented.");
    }
}