import { PrismaClient } from "@prisma/gen-client";
import UserRouter from "../http/routers/userRouter";
import { UserRepository } from "../../core/repositories/UserRepository";
import { UserController } from "../http/controllers/UserController";

export function makeUserRouter(prisma: PrismaClient): UserRouter {
    const repository = new UserRepository(prisma);
    const controller = new UserController(repository);
    return new UserRouter(controller);
}