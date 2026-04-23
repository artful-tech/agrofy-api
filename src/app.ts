import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { prisma } from './infra/database/prisma';
import { Routers } from './infra/http/routers';
import inventoryRoutes from "./infra/http/routers/inventory.routes";

const app = express();

app.use(morgan('tiny'));
app.use(cors());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "script-src": [
          "'self'",
          "https://cdn.tailwindcss.com",
          "https://cdn.jsdelivr.net",
          "'unsafe-inline'"
        ],
        "style-src": [
          "'self'",
          "https://cdn.jsdelivr.net",
          "'unsafe-inline'"
        ],
        "connect-src": [
          "'self'",
          "https://cdn.jsdelivr.net"
        ],
        "img-src": [
          "'self'",
          "data:",
          "blob:"
        ],
      },
    },
  })
);

app.use(express.json());

// ROTAS DA APLICAÇÃO
const routers = new Routers(prisma);
app.use(routers.getRouter());

// ROTA INVENTORY
app.use("/inventory", inventoryRoutes);

export default app;