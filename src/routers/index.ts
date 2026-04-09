import { Router, Request, Response, NextFunction } from 'express';

import path from 'node:path';
import farmRouter from './farmRouter';
import cropRouter from './cropRouter';
import { PrismaClient } from '@prisma/gen-client';
import { UserRouter } from './userRouter';

export class Routers {
    private userRouters: UserRouter;

    constructor(private prisma: PrismaClient) {
        this.userRouters = new UserRouter(this.prisma);
    }

    private initApiRoutes = (): Router => {
        const apiRouter = Router();
        
        apiRouter.use("/users", this.userRouters.getUserRoutes());
        apiRouter.use("/farms", farmRouter);
        apiRouter.use("/crops", cropRouter);

        return apiRouter;
    }

    private initApiErrors = (): Router => {
        const apiErrors = Router();

        apiErrors.use((req: Request, res: Response) => {
            res.status(404).json({
                status: "error",
                message: "Endpoint não encontrado"
            });
        });

        apiErrors.use((error: Error, req: Request, res: Response, next: NextFunction) => {
            res.status(500).json({
                status: "error",
                message: error.message || "Erro interno do servidor"
            });
        });

        return apiErrors;
    }

    public getRouter = (): Router => {
        const root = Router();
    
        root.use("/api", this.initApiRoutes());

        root.get("/", (req: Request, res: Response, next: NextFunction) => {
            res.sendFile(path.resolve(__dirname, '../../public/front-end-example.html'));
        });

        root.use(this.initApiErrors());

        return root;
    }
}
