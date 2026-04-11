import { Request, Response } from "express";
import { IPlotRepository } from "../../../core/repositories/interfaces/IPlotRepository";


export class PlotController {
    constructor(private plotRepository: IPlotRepository) { }

    index = async (req: Request, res: Response) => {
        const plots = await this.plotRepository.findAll();
        res.json(plots);
    }
}