import { Request, Response } from "express";
import { IFarmUsecase } from "../../../core/usecases/interfaces";
import { IFarmController } from "./interfaces";
import { ViewFarmDto } from "../../../views/dto/FarmDto";


export class FarmController implements IFarmController {

    constructor(private farmUsecase: IFarmUsecase) {}

    public index = async (_req: Request, res: Response): Promise<Response> => {
        const farms: ViewFarmDto[] = await this.farmUsecase.getAll();
        return res.json(farms);
    }
}