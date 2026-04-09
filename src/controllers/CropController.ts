import { Request, Response } from "express";
import { ICropRepository } from "../repositories/interfaces/ICropRepository";

export class CropController {
    constructor(private cropRepository: ICropRepository) {}

    public index = async (req: Request, res: Response) => {
        const crops = await this.cropRepository.findAll();
        res.json(crops);
    }
}