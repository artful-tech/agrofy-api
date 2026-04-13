import { Router, Request, Response, NextFunction } from "express";
import { AppError } from "../../../core/errors/AppError";
import { ZodError } from "zod/v4";

export class ErrorMiddleware {

    public static notFoundHandler(req: Request, res: Response) {
        res.status(404).json({
            status: "404 Error",
            message: `Endpoint ${req.originalUrl} não encontrado`
        });
    }

    public static errorHandler(
        error: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        // Se for um erro conhecido da nossa aplicação (AppError)
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({
                status: "error",
                message: error.message,
            });
        }

        if (error instanceof ZodError) {
            return res.status(400).json({
                status: "validation_error",
                message: "Dados inválidos",
                errors: error.issues
            });
        }

        // Erro de validação do Prisma (ex: campo único violado)
        if (error.name === 'PrismaClientKnownRequestError') {
            return res.status(409).json({
                status: "error",
                message: "Conflito de dados no banco (E-mail já existe?)"
            });
        }

        // Logar erro inesperado para o time debugar (Cloud Run Logs)
        console.error(`[Internal Error]: ${error.stack}`);

        return res.status(500).json({
            status: "error",
            message: "Erro interno do servidor",
        });
    }
}