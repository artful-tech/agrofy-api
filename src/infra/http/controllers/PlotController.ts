import { Request, Response } from "express";
import { IPlotUsecase } from "../../../core/usecases/interfaces";
import { IPlotController } from "./interfaces";
import { ViewPlotDto } from "../../../shared/dtos/PlotDto";


export class PlotController implements IPlotController {
    
    constructor(private plotUsecase: IPlotUsecase) { }

    public index = async (_req: Request, res: Response): Promise<Response>  => {
        const plots: ViewPlotDto[] = await this.plotUsecase.getAll();
        return res.json(plots);
    }

    public getOne(_req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    
    public create(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

    public update(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

    
}