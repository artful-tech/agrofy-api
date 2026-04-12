import { PrismaClient } from "@prisma/client";
import FarmRouter from "../http/routers/farmRouter";
import { FarmRepository } from "../../core/repositories/FarmRepository";
import { FarmController } from "../http/controllers/FarmController";
import { FarmUsecase } from "../../core/usecases/FarmUsecase";

export function makeFarmRouter(prisma: PrismaClient): FarmRouter {
    const repository = new FarmRepository(prisma);
    const usecase = new FarmUsecase(repository);
    const controller = new FarmController(usecase);
    return new FarmRouter(controller);
}