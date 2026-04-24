import { PrismaClient } from "@prisma/client";
import { FieldLogRepository } from "../../core/repositories/FieldLogRepository";
import { FieldLogUsecase } from "../../core/usecases/FieldLogUsecase";
import { FieldLogController } from "../http/controllers/FieldLogController";
import FieldLogRouter from "../http/routers/FieldLogRouter";

export function makeFieldLogRouter(prisma: PrismaClient) {
    const repository = new FieldLogRepository(prisma);
    const usecase = new FieldLogUsecase(repository);
    const controller = new FieldLogController(usecase);

    return FieldLogRouter(controller);
}