import { PrismaClient } from "@prisma/gen-client";
import { SeasonRepository } from "../../core/repositories/SeasonRepository";
import { SeasonController } from "../http/controllers/SeasonController";
import SeasonRouter from "../http/routers/SeasonRouter";

export function makeSeasonRouter(prisma: PrismaClient) {
    const repository = new SeasonRepository(prisma);
    const controller = new SeasonController(repository);

    return new SeasonRouter(controller);
}