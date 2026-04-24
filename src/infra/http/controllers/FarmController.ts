import { Request, Response } from "express";
import { IFarmUsecase } from "../../../core/usecases/interfaces";
import { IFarmController } from "./interfaces";
import { ViewFarmDto } from "../../../shared/dtos/FarmDto";


export class FarmController implements IFarmController {
    constructor(private farmUsecase: IFarmUsecase) {}

    public index = async (_req: Request, res: Response): Promise<Response> => {
        const farms: ViewFarmDto[] = await this.farmUsecase.getAll();
        return res.json(farms);
    }

    public getOne(_req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    
    public create(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

    public update(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

    
}