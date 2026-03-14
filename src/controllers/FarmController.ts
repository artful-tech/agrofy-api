import { Request, Response } from "express";
import { FarmRepository } from "../repositories/FarmRepository";

export class FarmController {
    constructor(private farmRepository: FarmRepository) {}

    public index = async (req: Request, res: Response) => {
        const farms = await this.farmRepository.findAll();
        res.json(farms);
    }
}