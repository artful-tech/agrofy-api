import { Router } from "express";
import { FarmRepository } from "../repositories/FarmRepository";
import { FarmController } from "../controllers/FarmController";
import { prisma } from "../lib/prisma";

const farmRouter = Router();

const farmRepository = new FarmRepository(prisma);
const farmController = new FarmController(farmRepository);

farmRouter.get('/', farmController.index);

export default farmRouter;