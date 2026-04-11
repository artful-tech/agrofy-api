import { PrismaClient } from "@prisma/gen-client";
import { PlotRepository } from "../../core/repositories/PlotRepository";
import { PlotController } from "../http/controllers/PlotController";
import PlotRouter from "../http/routers/PlotRouter";

export function makePlotRouter(prisma: PrismaClient): PlotRouter {
    const repository = new PlotRepository(prisma);
    const controller = new PlotController(repository);
    return new PlotRouter(controller);
}