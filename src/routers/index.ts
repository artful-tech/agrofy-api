import { Router, Request, Response, NextFunction } from 'express';
import userRouter from "./userRouter";
import path from 'node:path';

const routes = Router();

routes.use("/users", userRouter)

routes.use("/", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(process.cwd(), 'public/welcome.html'));
});

routes.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
});

export default routes;