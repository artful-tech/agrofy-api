import { PrismaClient } from "@prisma/client";
import { FinanceRepository } from "../../core/repositories/FinanceRepository";
import { FinanceUsecase } from "../../core/usecases/FinanceUsecase";
import { FinanceController } from "../http/controllers/FinanceController";
import FinanceRouter from "../http/routers/FinanceRouter";

export function makeFinanceRouter(prisma: PrismaClient): FinanceRouter {
    const repository = new FinanceRepository(prisma);
    const usecase = new FinanceUsecase(repository);
    const controller = new FinanceController(usecase);
    return new FinanceRouter(controller);
}