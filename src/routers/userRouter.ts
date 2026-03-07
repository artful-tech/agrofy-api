import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserRepository } from "../repositories/UserRepository";
import { prisma } from "../lib/prisma";

const userRouter = Router();

const userRepository = new UserRepository(prisma);
const userController = new UserController(userRepository);

userRouter.get('/', userController.index)
userRouter.get('/:id', userController.show)
userRouter.post('/', userController.store)
userRouter.put('/:id', userController.update)
userRouter.delete('/:id', userController.destroy)

export default userRouter;