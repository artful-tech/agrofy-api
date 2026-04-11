import { Router } from "express";
import { PlotController } from "../controllers/PlotController";

export default  class PlotRouter {

    constructor(private plotController: PlotController) {}

    getRoutes = (): Router => {
        const router = Router();

        router.get('/', this.plotController.index);

        return router;
    }
}