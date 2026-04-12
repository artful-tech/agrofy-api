import { PrismaClient } from "@prisma/client";
import { PlotRepository } from "../../core/repositories/PlotRepository";
import { PlotController } from "../http/controllers/PlotController";
import PlotRouter from "../http/routers/PlotRouter";
import { PlotUsecase } from "../../core/usecases/PlotUsecase";

export function makePlotRouter(prisma: PrismaClient): PlotRouter {
    const repository = new PlotRepository(prisma);
    const usecase = new PlotUsecase(repository);
    const controller = new PlotController(usecase);
    return new PlotRouter(controller);
}