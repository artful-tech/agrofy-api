import { Request, Response } from "express";
import { IFieldLogUsecase } from "../../../core/usecases/interfaces";
import { IFieldLogController } from "./interfaces";
import { FieldLogDtoView, createFieldLogSchema } from "../../../shared/dtos/FieldLogDto";

export class FieldLogController implements IFieldLogController {
    constructor(private fieldLogUsecase: IFieldLogUsecase) {}

    public index = async (_req: Request, res: Response): Promise<Response> => {
        const data: FieldLogDtoView[] = await this.fieldLogUsecase.getAll();
        return res.json(data);
    };

    public getOne = async (_req: Request, _res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }

    public create = async (req: Request, res: Response): Promise<Response> => {
        const data = createFieldLogSchema.parse(req.body);

        const fieldLog = await this.fieldLogUsecase.create(data);

        return res.status(201).json(fieldLog);
    }

    public update = async (_req: Request, _res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }

    public delete = async (_req: Request, _res: Response): Promise<Response> => {
        throw new Error("Method not implemented.");
    }
}