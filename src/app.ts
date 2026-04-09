import express, { Router } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { Routers } from './routers';
import { prisma } from './lib/prisma';

const app = express();
 
app.use(morgan('tiny'));
app.use(cors());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "script-src": ["'self'", "https://cdn.tailwindcss.com", "https://cdn.jsdelivr.net", "'unsafe-inline'"],
        "style-src": ["'self'", "https://cdn.jsdelivr.net", "'unsafe-inline'"],
        "connect-src": ["'self'", "https://cdn.jsdelivr.net"],
        "img-src": ["'self'", "data:", "blob:"],
      },
    },
  })
);
app.use(express.json());

const routers = new Routers(prisma);

// ROTAS DA APLICAÇÃO
app.use(routers.getRouter());
 
export default app;
 