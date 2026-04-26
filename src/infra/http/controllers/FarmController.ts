import { Request, Response } from "express";
import { IFarmUsecase } from "../../../core/usecases/interfaces";
import { IFarmController } from "./interfaces";
import { FarmDtoCreate, FarmDtoView } from "../../../shared/dtos/FarmDto";

export class FarmController implements IFarmController {
    constructor(private farmUsecase: IFarmUsecase) {}

    public index = async (_req: Request, res: Response): Promise<Response> => {
        const farms: FarmDtoView[] = await this.farmUsecase.getAll();
        return res.json(farms);
    }

    public getOne = async (_req: Request, res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }
    
    public create = async (req: Request, res: Response): Promise<Response> => {
        const farmDto: FarmDtoCreate = req.body;
        const id = await this.farmUsecase.create(farmDto);
        res.setHeader('x-resource-id', id);
        res.setHeader('Location', `/api/people/${id}`);
        return res.status(201).send();
    }

    public update = async (req: Request, res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }
}