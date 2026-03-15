import { Router } from "express";
import { CropRepository } from "../repositories/CropRepository";
import { prisma } from "../lib/prisma";
import { CropController } from "../controllers/CropController";

const cropRouter = Router();

const cropRepository = new CropRepository(prisma);
const cropController = new CropController(cropRepository);

cropRouter.get('/', cropController.index);

export default cropRouter;