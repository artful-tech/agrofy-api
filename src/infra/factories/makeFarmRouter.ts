import { PrismaClient } from "@prisma/gen-client";
import FarmRouter from "../http/routers/farmRouter";
import { FarmRepository } from "../../core/repositories/FarmRepository";
import { FarmController } from "../http/controllers/FarmController";

export function makeFarmRouter(prisma: PrismaClient): FarmRouter {
    const repository = new FarmRepository(prisma);
    const controller = new FarmController(repository);
    return new FarmRouter(controller);
}