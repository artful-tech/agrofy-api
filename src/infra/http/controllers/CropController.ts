import { Request, Response } from "express";
import { ICropUsecase } from "../../../core/usecases/interfaces";
import { ICropController } from "./interfaces";
import { CreateCropDto, ViewCropDto } from "../../../shared/dtos/CropDto";


export class CropController implements ICropController {
    constructor(private cropUsecase: ICropUsecase) { }

    public index = async (_req: Request, res: Response): Promise<Response> => {
        const crops: ViewCropDto[] = await this.cropUsecase.getAll();
        return res.json(crops);
    }

    public getOne(_req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

    public create = async (req: Request, res: Response): Promise<Response> => {
        const cropDto: CreateCropDto = req.body;
        const id = await this.cropUsecase.create(cropDto);
        res.setHeader('x-resource-id', id);
        res.setHeader('Location', `/api/crops/${id}`);
        return res.status(201).send();
    }

    public update(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }
}
