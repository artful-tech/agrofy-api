import { Router } from "express";
import { PeopleController } from "../controllers/PeopleController";


export default class PeopleRouter {

    constructor(private peopleController: PeopleController) {}

    getRoutes = (): Router => {
        const peopleRouter = Router();

        peopleRouter.get('/', this.peopleController.index);
        peopleRouter.get('/:peopleId', this.peopleController.getOne);
        peopleRouter.post('/', this.peopleController.create);
        peopleRouter.patch('/', this.peopleController.update);
        peopleRouter.delete('/', this.peopleController.delete);

        return peopleRouter;
    }
}