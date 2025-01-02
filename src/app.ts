import express from 'express';
import { router } from './routes/api';

const app = express();

// Middlewares
app.use(express.json());
app.use(require('cors')());

// Rotas
app.use('/', (req, res) => {
    res.json({ message: 'API is working' });
});


export { app };