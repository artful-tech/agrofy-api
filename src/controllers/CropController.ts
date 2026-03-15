import { Request, Response } from "express";
import { CropRepository } from "../repositories/CropRepository";

export class CropController {
    constructor(private cropRepository: CropRepository) {}

    public index = async (req: Request, res: Response) => {
        const crops = await this.cropRepository.findAll();
        res.json(crops);
    }
}