import { Request, Response } from "express";
import { IFinanceController } from "./interfaces";
import { FinanceUsecase } from "../../../core/usecases/FinanceUsecase";

export class FinanceController implements IFinanceController {
    constructor(private financeUsecase: FinanceUsecase) {}

    index = async (req: Request<{userId: string}>, res: Response): Promise<Response> => {
        const { userId } = req.params;

        const finance = await this.financeUsecase.get(userId);

        return res.json(finance);
    }
}