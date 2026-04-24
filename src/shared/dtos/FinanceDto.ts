import { Decimal } from "@prisma/client/runtime/client";

export type ViewFinanceDto = {
    createdAt: Date;
    updatedAt: Date;
    balance: Decimal;
    currency: string;
}