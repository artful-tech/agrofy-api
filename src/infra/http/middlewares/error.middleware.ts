import { Router, Request, Response, NextFunction } from "express";

export function errorMiddlewares() {
    const errorRouter = Router();

    errorRouter.use((req: Request, res: Response) => {
        res.status(404).json({
            status: "error",
            message: "Endpoint não encontrado"
        });
    });

    errorRouter.use((error: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({
            status: "error",
            message: error.message || "Erro interno do servidor"
        });
    });

    return errorRouter;
}
