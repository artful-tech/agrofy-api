import { Request, Response } from "express";
import { InventoryUsecase } from "../../../usecases/InventoryUsecase";

export class InventoryController {
  constructor(private usecase: InventoryUsecase) {}

  findAll = async (_req: Request, res: Response) => {
    const result = await this.usecase.findAll();
    return res.json(result);
  };

  findById = async (req: Request, res: Response) => {
    const result = await this.usecase.findById(req.params.id);
    return res.json(result);
  };

  create = async (req: Request, res: Response) => {
    const result = await this.usecase.create(req.body);
    return res.status(201).json(result);
  };

  update = async (req: Request, res: Response) => {
    const result = await this.usecase.update(req.params.id, req.body);
    return res.json(result);
  };

  delete = async (req: Request, res: Response) => {
    await this.usecase.delete(req.params.id);
    return res.status(204).send();
  };
}