import { Router } from "express";
import { ICropController } from "../controllers/interfaces";
import { ValidationMiddleware } from "../middlewares/ValidationMiddleware";
import { createCropSchema } from "../../../shared/dtos/CropDto";


export default class CropRouter {

    constructor(private cropController: ICropController) { }

    getRoutes = (): Router => {
        const cropRouter = Router();

        cropRouter.get(
            '/',
            this.cropController.index
        );

        cropRouter.post(
            '/',
            ValidationMiddleware.validate(createCropSchema),
            this.cropController.create
        );

        return cropRouter;
    }
}
