import { ViewFinanceDto } from "../../shared/dtos/FinanceDto";
import { FinanceMapper } from "../models/FinanceModel";
import { FinanceRepository } from "../repositories/FinanceRepository";
import { IFinanceUsecase } from "./interfaces";

export class FinanceUsecase implements IFinanceUsecase {
    constructor(private financeRepository: FinanceRepository) {}

    get = async (id: string): Promise<ViewFinanceDto | null> => {
        const finance = await this.financeRepository.watchFinance(id);

        if (!finance) {
            return null;
        }

        return FinanceMapper.toView(finance);
    }
    
}