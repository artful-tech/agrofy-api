import path from 'node:path';
import { PrismaClient } from "@prisma/client";
import { NextFunction, Router, Request, Response } from "express";
import { makeCropRouter } from '../../factories/makeCropRouter';
import { makePlotRouter } from '../../factories/makePlotRouter';
import { makeUserRouter } from '../../factories/makeUserRouter';
import { makeFarmRouter } from '../../factories/makeFarmRouter';
import { ErrorMiddleware } from '../middlewares/ErrorMiddleware';
import { makeFieldLogRouter } from '../../factories/makeFieldLogRouter';
import { makeFinanceRouter } from '../../factories/makeFinanceRouter';


export class Routers {
    constructor(private prisma: PrismaClient) {}

    private initApiRoutes = (): Router => {
        const apiRouter = Router();
        
        apiRouter.use("/users", makeUserRouter(this.prisma).getRoutes());
        apiRouter.use("/crops", makeCropRouter(this.prisma).getRoutes());
        apiRouter.use("/farms", makeFarmRouter(this.prisma).getRoutes());
        apiRouter.use("/plots", makePlotRouter(this.prisma).getRoutes());
        apiRouter.use("/field-logs", makeFieldLogRouter(this.prisma));
        apiRouter.use("/finance", makeFinanceRouter(this.prisma).getRoutes())

        return apiRouter;
    }

    public getRouter = (): Router => {
        const root = Router();
    
        root.use("/api", this.initApiRoutes());

        root.get("/", (req: Request, res: Response, next: NextFunction) => {
            res.sendFile(path.resolve(__dirname, '../../../views/pages/front-end-example.html'));
        });

        root.use(ErrorMiddleware.notFoundHandler);
        root.use(ErrorMiddleware.errorHandler);

        return root;
    }
}