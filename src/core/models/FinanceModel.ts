import { Finance } from "@prisma/client";
import { ViewFinanceDto } from "../../shared/dtos/FinanceDto";


export type FinanceModel = Finance;

export class FinanceMapper {
    
    static toView(model: FinanceModel): ViewFinanceDto;

    /**
     * Transforma o modelo do Banco/Prisma para o que o Front-end precisa
     */
    static toView(model: FinanceModel): ViewFinanceDto {
        return this.mapToDto(model);
    }

    private static mapToDto(model: FinanceModel): ViewFinanceDto {
        return {
            createdAt: model.createdAt,
            updatedAt: model.updatedAt,
            balance: model.balance,
            currency: model.currency,
        };
    }
}