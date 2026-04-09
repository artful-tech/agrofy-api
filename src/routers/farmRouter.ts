import { Router } from "express";
import { FarmRepository } from "../repositories/FarmRepository";
import { FarmController } from "../controllers/FarmController";
import { prisma } from "../lib/prisma";
import { PrismaClient } from "@prisma/gen-client";

export default class FarmRouter {
    private farmRepository: FarmRepository;
    private farmController: FarmController;

    constructor(private prisma: PrismaClient) {
        this.farmRepository = new FarmRepository(this.prisma);
        this.farmController = new FarmController(this.farmRepository);
    }

    getRoutes = (): Router => {
        const farmRouter = Router();

        farmRouter.get('/', this.farmController.index);

        return farmRouter;
    }
}
