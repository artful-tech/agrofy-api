import { Request, Response } from "express";
import { IPlotUsecase } from "../../../core/usecases/interfaces";
import { IPlotController } from "./interfaces";
import { PlotDtoView } from "../../../shared/dtos/PlotDto";


export class PlotController implements IPlotController {
    
    constructor(private plotUsecase: IPlotUsecase) { }

    public index = async (_req: Request, res: Response): Promise<Response>  => {
        const plots: PlotDtoView[] = await this.plotUsecase.getAll();
        return res.json(plots);
    }

    public getOne = async (_req: Request, res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }
    
    public create = async (req: Request, res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }

    public update = async (req: Request, res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }

    
}