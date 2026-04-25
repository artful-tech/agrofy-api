import { Request, Response } from "express";
import { IFieldLogUsecase } from "../../../core/usecases/interfaces";
import { IFieldLogController } from "./interfaces";
import { FieldLogDtoView } from "../../../shared/dtos/FieldLogDto";

export class FieldLogController implements IFieldLogController {
    constructor(private fieldLogUsecase: IFieldLogUsecase) {}

    public index = async (req: Request, res: Response) => {
        const data: FieldLogDtoView[] = await this.fieldLogUsecase.getAll();
        return res.json(data);
    };

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