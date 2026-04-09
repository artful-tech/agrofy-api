import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserRepository } from "../repositories/UserRepository";
import { PrismaClient } from "@prisma/gen-client";

export default class UserRouter {
    private userRepository: UserRepository;
    private userController: UserController;

    constructor(private prisma: PrismaClient) {
        this.userRepository = new UserRepository(this.prisma);
        this.userController = new UserController(this.userRepository);
    }

    getRoutes = (): Router => {
        const userRouter = Router();

        userRouter.get('/', this.userController.index)
        userRouter.get('/:id', this.userController.show)
        userRouter.post('/', this.userController.store)
        userRouter.put('/:id', this.userController.update)
        userRouter.delete('/:id', this.userController.destroy)
        
        return userRouter;
    }
}
