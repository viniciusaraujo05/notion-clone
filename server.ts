// Importando express e dotenv
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './src/config/database';
import { app } from './src/app';

dotenv.config();

app.use(express.json());
app.use(require('cors')());

// Connect to MongoDB
connectDatabase();

// Define port
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
