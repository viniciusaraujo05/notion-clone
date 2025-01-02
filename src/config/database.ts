import mongoose  from 'mongoose';

export async function connectDatabase() {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        throw new Error('MONGO_URI environment variable is not defined');
    }

    try {
        await mongoose.connect(mongoUri);
        console.log("MongoDB conectado com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar no MongoDB:", error);
        process.exit(1);
    }
}