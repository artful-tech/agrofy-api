import { IFinanceRepository } from "./interfaces";
import { FinanceModel } from "../models/FinanceModel";
import { PrismaClient } from "@prisma/client";

export class FinanceRepository implements IFinanceRepository {
    constructor(private prisma: PrismaClient) { }

    public watchFinance = async (managerId: string): Promise<FinanceModel> => {
        const finance = await this.prisma.finance.findUniqueOrThrow({
            where: { managerId: managerId }
        });

        return finance;
    }
    
    public updateFinance = async (): Promise<FinanceModel> => {
        throw new Error("");
    }
}