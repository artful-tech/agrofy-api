import { Router } from "express";
import { UserController } from "../controllers/UserController";


export default class UserRouter {

    constructor(private userController: UserController) {}

    getRoutes = (): Router => {
        const userRouter = Router();

        userRouter.get('/', this.userController.index)
        // userRouter.get('/:id', this.userController.show)
        // userRouter.post('/', this.userController.store)
        // userRouter.put('/:id', this.userController.update)
        // userRouter.delete('/:id', this.userController.destroy)
        
        return userRouter;
    }
}
