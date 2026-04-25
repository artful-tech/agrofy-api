import { Router } from "express";
import { PeopleController } from "../controllers/PeopleController";
import { ValidationMiddleware } from "../middlewares/ValidationMiddleware";
import { createPeopleSchema, updatePeopleSchema } from "../../../shared/dtos/PeopleDto";


export default class PeopleRouter {

    constructor(private peopleController: PeopleController) {}

    getRoutes = (): Router => {
        const peopleRouter = Router();

        peopleRouter.get('/', this.peopleController.index);
        peopleRouter.get('/:peopleId', this.peopleController.getOne);
        peopleRouter.post(
            '/', 
            ValidationMiddleware.validate(createPeopleSchema),
            this.peopleController.create
        );
        peopleRouter.patch(
            '/', 
            ValidationMiddleware.validate(updatePeopleSchema),
            this.peopleController.update
        );
        peopleRouter.delete('/', this.peopleController.delete);

        return peopleRouter;
    }
}