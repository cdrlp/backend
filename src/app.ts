import express from 'express';
import dotenv from 'dotenv';

// routes
import rootRoute from './router/root';

// dotenv conf
dotenv.config();

// instances
const app = express();

// routes configuration
app.use('/', rootRoute);

// server starting
app.listen(process.env.PORT, () =>
  console.log('servidor corriendo en el puerto ' + process.env.PORT)
);
