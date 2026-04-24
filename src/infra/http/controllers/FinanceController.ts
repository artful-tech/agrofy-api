import { Request, Response } from "express";
import { IFinanceController } from "./interfaces";
import { FinanceUsecase } from "../../../core/usecases/FinanceUsecase";

export class FinanceController implements IFinanceController {
    constructor(private financeUsecase: FinanceUsecase) {}

    public index = async (req: Request<{userId: string}>, res: Response): Promise<Response> => {
        const { userId } = req.params;

        const finance = await this.financeUsecase.get(userId);

        return res.json(finance);
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