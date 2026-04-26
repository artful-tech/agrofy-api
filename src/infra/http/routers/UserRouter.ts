import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ValidationMiddleware } from "../middlewares/ValidationMiddleware";
import { CreateUserSchema } from "../../../shared/dtos/UserDto";


export default class UserRouter {

    constructor(private userController: UserController) {}

    getRoutes = (): Router => {
        const userRouter = Router();

        userRouter.get('/', this.userController.index)
        userRouter.post('/', this.userController.getByEmail)
        userRouter.post(
            '/signup', 
            ValidationMiddleware.validate(CreateUserSchema),
            this.userController.create
        )
        // userRouter.post('/', this.userController.store)
        // userRouter.put('/:id', this.userController.update)
        // userRouter.delete('/:id', this.userController.destroy)
        
        return userRouter;
    }
}
