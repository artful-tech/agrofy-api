import { Request, Response } from "express";
import { ISeasonRepository } from "../../../core/repositories/interfaces/ISeasonRepository";

export class SeasonController {
    constructor(private seasonRepository: ISeasonRepository) { }

    index = async (req: Request, res: Response): Promise<void> => {
        const seasons = await this.seasonRepository.findAll();
        res.json(seasons);
    }
}