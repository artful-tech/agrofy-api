import { Router } from "express";
import { FieldLogController } from "../controllers/FieldLogController";


export class FieldLogRouter {
    constructor(private fielLogController: FieldLogController) { }

    getRoutes = (): Router => {
        const router = Router();

        router.get("/", this.fielLogController.index);

        return router;
    }
}
