import { Router } from "express";
import { FarmController } from "../controllers/FarmController";


export default class FarmRouter {

    constructor(private farmController: FarmController) {}

    getRoutes = (): Router => {
        const farmRouter = Router();

        farmRouter.get('/', this.farmController.index);
        farmRouter.post('/', this.farmController.create);

        return farmRouter;
    }
}
