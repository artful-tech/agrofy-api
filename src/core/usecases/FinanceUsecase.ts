import { ViewFinanceDto } from "../../shared/dtos/FinanceDto";
import { FinanceMapper } from "../models/FinanceModel";
import { FinanceRepository } from "../repositories/FinanceRepository";
import { IFinanceUsecase } from "./interfaces";

export class FinanceUsecase implements IFinanceUsecase {
    constructor(private financeRepository: FinanceRepository) {}

    public get = async (id: string): Promise<ViewFinanceDto | null> => {
        const finance = await this.financeRepository.watchFinance(id);

        if (!finance) {
            return null;
        }

        return FinanceMapper.toView(finance);
    }

    public getAll(): Promise<ViewFinanceDto[]> {
        throw new Error("Method not implemented.");
    }

    public getOne(id: string): Promise<ViewFinanceDto | null> {
        throw new Error("Method not implemented.");
    }

    public create(createDto: any): Promise<string> {
        throw new Error("Method not implemented.");
    }

    public update(updateDto: any): Promise<ViewFinanceDto> {
        throw new Error("Method not implemented.");
    }
    
    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}