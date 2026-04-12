import { Request, Response } from "express";
import { IFarmUsecase } from "../../../core/usecases/interfaces";


export class FarmController {
    constructor(private farmRepository: IFarmUsecase) {}

    public index = async (req: Request, res: Response) => {
        const farms = await this.farmRepository.getAll();
        res.json(farms);
    }
}