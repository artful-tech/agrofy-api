import { Router } from "express";
import { ICropController } from "../controllers/interfaces/ICropController";


export default  class CropRouter {

    constructor(private cropController: ICropController) {}

    getRoutes = (): Router => {
        const cropRouter = Router();

        cropRouter.get('/', this.cropController.index);

        return cropRouter;
    }
}
