import express from 'express';
import dotenv from 'dotenv';
import compresion from 'compression';
import helmet from 'helmet';
import cors from 'cors';

// routes
import rootRoute from './router/root';

// dotenv conf
dotenv.config();

// instances
const app = express();

// middlewares
app.use(compresion());
app.use(helmet());
app.use(cors());

// routes configuration
app.use('/', rootRoute);

// server starting
app.listen(process.env.PORT, () =>
  console.log('servidor corriendo en el puerto ' + process.env.PORT)
);
