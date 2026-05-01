import { Decimal } from "@prisma/client/runtime/client";

export type FinanceDtoView = {
    createdAt: Date;
    updatedAt: Date;
    balance: Decimal;
    currency: string;
}