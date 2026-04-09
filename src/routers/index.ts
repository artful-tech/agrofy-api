import { Router, Request, Response, NextFunction } from 'express';

import path from 'node:path';
import FarmRouter from './farmRouter';
import { PrismaClient } from '@prisma/gen-client';
import UserRouter from './userRouter';
import CropRouter from './cropRouter';

export class Routers {
    private userRouters: UserRouter;
    private cropRouters: CropRouter;
    private farmRouters: FarmRouter;

    constructor(private prisma: PrismaClient) {
        this.userRouters = new UserRouter(this.prisma);
        this.cropRouters = new CropRouter(this.prisma);
        this.farmRouters = new FarmRouter(this.prisma);
    }

    private initApiRoutes = (): Router => {
        const apiRouter = Router();
        
        apiRouter.use("/users", this.userRouters.getRoutes());
        apiRouter.use("/crops", this.cropRouters.getRoutes());
        apiRouter.use("/farms", this.farmRouters.getRoutes());

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
