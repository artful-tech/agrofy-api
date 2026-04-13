import { Request, Response } from "express";


export interface IBaseController {
    index(_req: Request, res: Response): Promise<Response>
}

export interface ICropController extends IBaseController {
    create(req: Request, res: Response): Promise<Response>
}

export interface IFarmController extends IBaseController {}

export interface IPlotController extends IBaseController {}

export interface IUserController extends IBaseController {}
