import { IFinanceRepository } from "./interfaces";
import { FinanceModel } from "../models/FinanceModel";
import { PrismaClient } from "@prisma/client";

export class FinanceRepository implements IFinanceRepository {
    constructor(private prisma: PrismaClient) { }

    watchFinance = async (managerId: string): Promise<FinanceModel | null> => {
        const finance = await this.prisma.finance.findUnique({
            where: { managerId: managerId }
        });

        return finance;
    }
    
    updateFinance = async (): Promise<FinanceModel> => {
        throw new Error("");
    }
}