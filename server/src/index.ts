import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { app } from './app';

dotenv.config();

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/budget-ts', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to mongodb');
  } catch (error) {}

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();
