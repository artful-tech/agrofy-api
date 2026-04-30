import { Request, Response } from "express";
import { SeasonUsecase } from "../../../core/usecases/SeasonUsecase";
import { SeasonDtoCreate, SeasonDtoUpdate, SeasonDtoView } from "../../../shared/dtos/SeasonDto";
import { ISeasonController } from "./interfaces";

export class SeasonController implements ISeasonController {
    constructor(private seasonUsecase: SeasonUsecase) {}

    public index = async (_req: Request, res: Response): Promise<Response> => {
            const seasons = await this.seasonUsecase.getAll();
            return res.json(seasons);
        }
    
        public getOne = async (req: Request<{id: string}>, res: Response): Promise<Response> => {
            const { id } = req.params;
            const season = await this.seasonUsecase.getOne(id);
            return res.json(season);
        }
    
        public create = async (req: Request, res: Response): Promise<Response> => {
            const seasonDto: SeasonDtoCreate = req.body;
            const id: string = await this.seasonUsecase.create(seasonDto);
            res.setHeader('x-resource-id', id);
            res.setHeader('Location', `/api/season/${id}`);
            return res.status(201).send();
        }
    
        public update = async (req: Request, res: Response): Promise<Response> => {
            const seasonDto: SeasonDtoUpdate = req.body;
            const season: SeasonDtoView = await this.seasonUsecase.update(seasonDto);
            return res.status(200).json(season);
        }
    
        public delete = async (req: Request<{ id: string }>, res: Response): Promise<Response> => {
            const { id } = req.params;
            await this.seasonUsecase.delete(id);
            return res.status(204).send();
        }
}