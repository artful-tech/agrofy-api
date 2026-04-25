import { Request, Response } from "express";
import { IFarmUsecase } from "../../../core/usecases/interfaces";
import { IFarmController } from "./interfaces";
import { FarmDtoView } from "../../../shared/dtos/FarmDto";


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
        throw new Error("Method not implemented.");
    }

    public update = async (req: Request, res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }

    
}