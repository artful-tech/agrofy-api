import path from 'node:path';
import { PrismaClient } from "@prisma/client";
import { NextFunction, Router, Request, Response } from "express";
import { makeCropRouter } from '../../factories/makeCropRouter';
import { makePlotRouter } from '../../factories/makePlotRouter';
import { makeUserRouter } from '../../factories/makeUserRouter';
import { makeFarmRouter } from '../../factories/makeFarmRouter';
import { errorMiddlewares } from '../middlewares/error.middleware';


export class Routers {
    constructor(private prisma: PrismaClient) {}

    private initApiRoutes = (): Router => {
        const apiRouter = Router();
        
        apiRouter.use("/users", makeUserRouter(this.prisma).getRoutes());
        apiRouter.use("/crops", makeCropRouter(this.prisma).getRoutes());
        apiRouter.use("/farms", makeFarmRouter(this.prisma).getRoutes());
        apiRouter.use("/plots", makePlotRouter(this.prisma).getRoutes());

        return apiRouter;
    }

    public getRouter = (): Router => {
        const root = Router();
    
        root.use("/api", this.initApiRoutes());

        root.get("/", (req: Request, res: Response, next: NextFunction) => {
            res.sendFile(path.resolve(__dirname, '../../../views/pages/front-end-example.html'));
        });

        root.use(errorMiddlewares);

        return root;
    }
}