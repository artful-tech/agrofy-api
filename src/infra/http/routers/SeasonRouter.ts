import { Router } from "express";
import { ISeasonController } from "../controllers/interfaces/ISeasonController";

export default class SeasonRouter {
    constructor(private seasonController: ISeasonController) {}

    getRoutes = (): Router => {
        const router = Router();

        router.get('/', this.seasonController.index);

        return router;
    }
}