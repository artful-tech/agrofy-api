import { PrismaClient } from "@prisma/client";
import CropRouter from "../http/routers/cropRouter";
import { CropRepository } from "../../core/repositories/CropRepository";
import { CropController } from "../http/controllers/CropController";
import { CropUsecase } from "../../core/usecases/CropUsecase";

export function makeCropRouter(prisma: PrismaClient): CropRouter {
    const repository = new CropRepository(prisma);
    const usecase = new CropUsecase(repository);
    const controller = new CropController(usecase);
    return new CropRouter(controller);
}