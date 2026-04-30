import { Router } from "express";
import { FieldLogController } from "../controllers/FieldLogController";
import { RouteDisplay } from "../../utils/RouteDisplay";


export class FieldLogRouter {
    constructor(private fielLogController: FieldLogController) { }

    getRoutes = (): Router => {
        const router = Router();

        router.get("/", this.fielLogController.index);

        RouteDisplay.scan(router, "/api/field-log");

        return router;
    }
}
