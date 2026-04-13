import { Request, Response } from "express";
import { ICropUsecase } from "../../../core/usecases/interfaces";
import { ICropController } from "./interfaces";
import { ViewCropDto } from "../../../shared/dtos/CropDto";


export class CropController implements ICropController {
    
    constructor(private cropUsecase: ICropUsecase) {}

    public index = async (_req: Request, res: Response): Promise<Response> => {
        const crops: ViewCropDto[] = await this.cropUsecase.getAll();
        return res.json(crops);
    }

    public create = async (req: Request, res: Response): Promise<Response> => {
        return res.json({
            "message": "CHEGOU AQUI NO CONTROLLER"
        });
    }
}
