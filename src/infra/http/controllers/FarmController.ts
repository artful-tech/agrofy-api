import { Request, Response } from "express";
import { IFarmUsecase } from "../../../core/usecases/interfaces";
import { IFarmController } from "./interfaces";
import { FarmDtoView, createFarmSchema } from "../../../shared/dtos/FarmDto";

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
        const data = createFarmSchema.parse(req.body);

        const farmId = await this.farmUsecase.create(data);

        return res.status(201).json({ id: farmId });
    }

    public update = async (req: Request, res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }
}