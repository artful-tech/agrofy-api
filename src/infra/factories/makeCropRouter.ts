import { PrismaClient } from "@prisma/gen-client";
import CropRouter from "../http/routers/cropRouter";
import { CropRepository } from "../../core/repositories/CropRepository";
import { CropController } from "../http/controllers/CropController";

export function makeCropRouter(prisma: PrismaClient): CropRouter {
    const repository = new CropRepository(prisma);
    const controller = new CropController(repository);
    return new CropRouter(controller);
}