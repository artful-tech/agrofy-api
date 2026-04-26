import { Router } from "express";
import { FarmController } from "../controllers/FarmController";
import { ValidationMiddleware } from "../middlewares/ValidationMiddleware";
import { createFarmSchema } from "../../../shared/dtos/FarmDto";


export default class FarmRouter {

    constructor(private farmController: FarmController) {}

    getRoutes = (): Router => {
        const farmRouter = Router();

        farmRouter.get('/', this.farmController.index);
        farmRouter.post(
            '/',
            ValidationMiddleware.validate(createFarmSchema),
            this.farmController.create
        );

        return farmRouter;
    }
}
