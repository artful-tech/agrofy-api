import { Router } from "express";
import { FinanceController } from "../controllers/FinanceController";

export default class FinanceRouter {

    constructor(private financeController: FinanceController) {}

    getRoutes = (): Router => {
        const farmRouter = Router();

        farmRouter.get('/:userId', this.financeController.index);

        return farmRouter;
    }
}