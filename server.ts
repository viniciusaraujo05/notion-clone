import { app } from './src/app';
import 'dotenv/config';
import { connectDatabase } from './src/config/database';

const PORT = process.env.PORT || 3000;

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});