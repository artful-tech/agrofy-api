import { Request, Response } from "express";
import { IFieldLogUsecase } from "../../../core/usecases/interfaces";

export class FieldLogController {
    constructor(private fieldLogUsecase: IFieldLogUsecase) {}

    public getAll = async (req: Request, res: Response) => {
        const data = await this.fieldLogUsecase.getAll();
        return res.json(data);
    };
}