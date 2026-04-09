import { Request, Response } from "express";
import { IFarmRepository } from "../repositories/interfaces/IFarmRepository";

export class FarmController {
    constructor(private farmRepository: IFarmRepository) {}

    public index = async (req: Request, res: Response) => {
        const farms = await this.farmRepository.findAll();
        res.json(farms);
    }
}