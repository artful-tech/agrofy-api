import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from './routers';

const app = express();
 
app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());
app.use(express.json());

// ROTAS DA APLICAÇÃO
app.use(routes);
 
export default app;
 