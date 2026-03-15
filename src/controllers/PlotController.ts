import { Request, Response  } from "express";

import { PlotRepository } from "../repositories/PlotRepository";

export class PlotController {
    constructor (private plotRepository: PlotRepository) {}

    index = async (req: Request, res: Response) => {
            const plots = await this.plotRepository.findAll();
            res.json(plots);
        
    }
}
    