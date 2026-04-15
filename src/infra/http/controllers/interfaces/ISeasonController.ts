import { Request, Response } from "express";

export interface ISeasonController {
    index(req: Request, res: Response): Promise<any>;
}