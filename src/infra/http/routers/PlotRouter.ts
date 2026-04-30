import { Router } from "express";
import { PlotController } from "../controllers/PlotController";
import { RouteDisplay } from "../../utils/RouteDisplay";


export default  class PlotRouter {

    constructor(private plotController: PlotController) {}

    getRoutes = (): Router => {
        const router = Router();

        router.get('/', this.plotController.index);

        RouteDisplay.scan(router, "/api/plot");

        return router;
    }
}