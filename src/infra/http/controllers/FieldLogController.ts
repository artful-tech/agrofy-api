import { Request, Response } from "express";
import { IFieldLogUsecase } from "../../../core/usecases/interfaces";
import { IFieldLogController } from "./interfaces";

export class FieldLogController implements IFieldLogController {
    constructor(private fieldLogUsecase: IFieldLogUsecase) {}

    public index = async (req: Request, res: Response) => {
        const data = await this.fieldLogUsecase.getAll();
        return res.json(data);
    };

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