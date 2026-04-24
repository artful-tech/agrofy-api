import { PrismaClient } from "@prisma/client";
import CropRouter from "../http/routers/CropRouter";
import { CropRepository } from "../../core/repositories/CropRepository";
import { CropController } from "../http/controllers/CropController";
import { CropUsecase } from "../../core/usecases/CropUsecase";
import { FarmRepository } from "../../core/repositories/FarmRepository";
import FarmRouter from "../http/routers/FarmRouter";
import { FarmUsecase } from "../../core/usecases/FarmUsecase";
import { FarmController } from "../http/controllers/FarmController";
import { FieldLogRouter } from "../http/routers/FieldLogRouter";
import { FieldLogRepository } from "../../core/repositories/FieldLogRepository";
import { FieldLogUsecase } from "../../core/usecases/FieldLogUsecase";
import { FieldLogController } from "../http/controllers/FieldLogController";
import FinanceRouter from "../http/routers/FinanceRouter";
import { FinanceRepository } from "../../core/repositories/FinanceRepository";
import { FinanceUsecase } from "../../core/usecases/FinanceUsecase";
import { FinanceController } from "../http/controllers/FinanceController";
import { PlotRepository } from "../../core/repositories/PlotRepository";
import PlotRouter from "../http/routers/PlotRouter";
import { PlotUsecase } from "../../core/usecases/PlotUsecase";
import { PlotController } from "../http/controllers/PlotController";
import UserRouter from "../http/routers/UserRouter";
import { UserRepository } from "../../core/repositories/UserRepository";
import { UserUsecase } from "../../core/usecases/UserUsecase";
import { UserController } from "../http/controllers/UserController";


export class Factories {
    constructor(private prisma: PrismaClient) { }

    makeCropRouter(): CropRouter {
        const repository = new CropRepository(this.prisma);
        const usecase = new CropUsecase(repository);
        const controller = new CropController(usecase);
        return new CropRouter(controller);
    }

    makeFarmRouter(): FarmRouter {
        const repository = new FarmRepository(this.prisma);
        const usecase = new FarmUsecase(repository);
        const controller = new FarmController(usecase);
        return new FarmRouter(controller);
    }

    makeFieldLogRouter(): FieldLogRouter {
        const repository = new FieldLogRepository(this.prisma);
        const usecase = new FieldLogUsecase(repository);
        const controller = new FieldLogController(usecase);
        return new FieldLogRouter(controller);
    }

    makeFinanceRouter(): FinanceRouter {
        const repository = new FinanceRepository(this.prisma);
        const usecase = new FinanceUsecase(repository);
        const controller = new FinanceController(usecase);
        return new FinanceRouter(controller);
    }

    makePlotRouter(): PlotRouter {
        const repository = new PlotRepository(this.prisma);
        const usecase = new PlotUsecase(repository);
        const controller = new PlotController(usecase);
        return new PlotRouter(controller);
    }

    makeUserRouter(): UserRouter {
        const repository = new UserRepository(this.prisma);
        const usecase = new UserUsecase(repository);
        const controller = new UserController(usecase);
        return new UserRouter(controller);
    }
}
