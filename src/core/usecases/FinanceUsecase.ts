import { FinanceDtoView } from "../../shared/dtos/FinanceDto";
import { FinanceMapper } from "../models/FinanceModel";
import { FinanceRepository } from "../repositories/FinanceRepository";
import { IFinanceUsecase } from "./interfaces";

export class FinanceUsecase implements IFinanceUsecase {
    constructor(private financeRepository: FinanceRepository) {}

    public get = async (id: string): Promise<FinanceDtoView> => {
        const finance = await this.financeRepository.watchFinance(id);
        return FinanceMapper.toView(finance);
    }

    public getAll(): Promise<FinanceDtoView[]> {
        throw new Error("Method not implemented.");
    }

    public getOne(id: string): Promise<FinanceDtoView | null> {
        throw new Error("Method not implemented.");
    }

    public create(createDto: any): Promise<string> {
        throw new Error("Method not implemented.");
    }

    public update(updateDto: any): Promise<FinanceDtoView> {
        throw new Error("Method not implemented.");
    }
    
    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}