import { Router, Request, Response, NextFunction } from 'express';
import userRouter from "./userRouter";

const routes = Router();

routes.use("/users", userRouter)

routes.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
});

export default routes;