import { Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";


export class ValidationMiddleware {

    public static validate = (schema: ZodObject) => {
        return async (req: Request, res: Response, next: NextFunction) => {
            console.log(req.body)
            try {
                await schema.parseAsync(req.body);
                return next();

            } catch (error) {
                return next(error);
            }
        };
    };
}
