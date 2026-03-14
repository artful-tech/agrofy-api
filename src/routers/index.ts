import { Router, Request, Response, NextFunction } from 'express';
import userRouter from "./userRouter";
import path from 'node:path';
import farmRouter from './farmRouter';

const root = Router();
const apiRouter = Router();

apiRouter.use("/users", userRouter);
apiRouter.use("/farms", farmRouter)

root.use("/api", apiRouter);

root.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.resolve(__dirname, '../../public/front-end-example.html'));
});

// ERROS
root.use((req: Request, res: Response) => {
    res.status(404).send("<h1>ERRO 404: PÁGINA NÃO EXISTE</h1>");
});
root.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
});

export default root;