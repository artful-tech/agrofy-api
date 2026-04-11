import { Request, Response } from "express";
import { ICropRepository } from "../../../core/repositories/interfaces/ICropRepository";
import { ICropController } from "./interfaces/ICropController";


export class CropController implements ICropController {
    constructor(private cropRepository: ICropRepository) {}

    public index = async (req: Request, res: Response): Promise<any> => {
        const crops = await this.cropRepository.findAll();
        res.json(crops);
    }
}