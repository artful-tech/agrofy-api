import { Finance, Prisma } from "@prisma/client";
import { FinanceDtoView } from "../../shared/dtos/FinanceDto";


export type FinanceModel = Finance;
export type FinanceModelCreate = Prisma.FinanceCreateInput;
export type FinanceModelUpdate = Prisma.FinanceUpdateInput;

export class FinanceMapper {
    
    static toView(model: FinanceModel): FinanceDtoView;

    /**
     * Transforma o modelo do Banco/Prisma para o que o Front-end precisa
     */
    static toView(model: FinanceModel): FinanceDtoView {
        return this.mapToDto(model);
    }

    private static mapToDto(model: FinanceModel): FinanceDtoView {
        return {
            createdAt: model.createdAt,
            updatedAt: model.updatedAt,
            balance: model.balance,
            currency: model.currency,
        };
    }
}