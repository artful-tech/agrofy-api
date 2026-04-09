import { Router } from "express";
import { CropRepository } from "../repositories/CropRepository";
import { CropController } from "../controllers/CropController";
import { PrismaClient } from "@prisma/gen-client";

export default  class CropRouter {
    private cropRepository: CropRepository;
    private cropController: CropController;

    constructor(private prisma: PrismaClient) {
        this.cropRepository = new CropRepository(this.prisma);
        this.cropController = new CropController(this.cropRepository);
    }

    getRoutes = (): Router => {
        const cropRouter = Router();

        cropRouter.get('/', this.cropController.index);

        return cropRouter;
    }
}
