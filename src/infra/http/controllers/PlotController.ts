import { Request, Response } from "express";
import { IPlotUsecase } from "../../../core/usecases/interfaces";
import { IPlotController } from "./interfaces";
import { ViewPlotDto } from "../../../shared/dtos/PlotDto";


export class PlotController implements IPlotController {
    
    constructor(private plotUsecase: IPlotUsecase) { }

    index = async (_req: Request, res: Response): Promise<Response>  => {
        const plots: ViewPlotDto[] = await this.plotUsecase.getAll();
        return res.json(plots);
    }
}