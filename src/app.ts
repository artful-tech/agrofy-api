import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from './routers';

const app = express();
 
app.use(morgan('tiny'));
app.use(cors());
// app.use(helmet());
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

// ROTAS DA APLICAÇÃO
app.use(routes);
 
export default app;
 