import { Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";


export class ValidationMiddleware {
    /**
     * Interface base para os casos de uso (Usecases) do Agrofy.
     * * Opções disponíveis de target: body, params ou query
     */
    static validate = (schema: ZodObject, target: 'body' | 'params' | 'query' = 'body') => 
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                // Valida o alvo específico (body, params ou query, tendo como padrão o body)
                await schema.parseAsync(req[target]);
                return next();
            } catch (error) {
                return next(error);
            }
        };
}

