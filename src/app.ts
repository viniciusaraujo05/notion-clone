import express from 'express';
import { documentRouter } from './routes/documentRoutes';

const app = express();

// Middlewares
app.use(express.json());
app.use(require('cors')());

// Rotas
app.use(documentRouter);

export { app };