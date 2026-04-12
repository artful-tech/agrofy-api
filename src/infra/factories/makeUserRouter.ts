import { PrismaClient } from "@prisma/client";
import UserRouter from "../http/routers/userRouter";
import { UserRepository } from "../../core/repositories/UserRepository";
import { UserController } from "../http/controllers/UserController";
import { UserUsecase } from "../../core/usecases/UserUsecase";

export function makeUserRouter(prisma: PrismaClient): UserRouter {
    const repository = new UserRepository(prisma);
    const usecase = new UserUsecase(repository);
    const controller = new UserController(usecase);
    return new UserRouter(controller);
}