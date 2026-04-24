import path from 'node:path';
import { PrismaClient } from "@prisma/client";
import { NextFunction, Router, Request, Response } from "express";
import { ErrorMiddleware } from '../middlewares/ErrorMiddleware';
import { Factories } from '../../factories';


export class Routers {
    private factory;

    constructor(private prisma: PrismaClient) {
        this.factory = new Factories(this.prisma);
    }

    private initApiRoutes = (): Router => {
        const apiRouter = Router();
        
        apiRouter.use("/users", this.factory.makeUserRouter().getRoutes());
        apiRouter.use("/crops", this.factory.makeCropRouter().getRoutes());
        apiRouter.use("/farms", this.factory.makeFarmRouter().getRoutes());
        apiRouter.use("/plots", this.factory.makePlotRouter().getRoutes());
        apiRouter.use("/field-logs", this.factory.makeFieldLogRouter().getRoutes());
        apiRouter.use("/finance", this.factory.makeFinanceRouter().getRoutes())

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