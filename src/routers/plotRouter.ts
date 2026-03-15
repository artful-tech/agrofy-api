import { Router } from "express";
import { PlotRepository } from "../repositories/PlotRepository";
import { PlotController } from "../controllers/PlotController";
import {prisma} from "../lib/prisma";

const plotRouter = Router();

const plotRepository  = new PlotRepository(prisma);
const plotController = new PlotController(plotRepository);

plotRouter.get('/', plotController.index);

export default plotRouter;