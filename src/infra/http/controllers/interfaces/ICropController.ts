import { Request, Response } from "express";

export interface ICropController {
    index(req: Request, res: Response): Promise<any>
}