import express from 'express';
import dotenv from 'dotenv';
import compresion from 'compression';
import helmet from 'helmet';
import cors from 'cors';

// config
import morganMiddleware from './config/morganMiddleware';

// logger
import Logger from './utils/logger';

// routes
import rootRoute from './router/root';

// dotenv conf
dotenv.config();

// instances
const app = express();

// middlewares
app.use(express.json());
app.use(compresion());
app.use(helmet());
app.use(cors());
app.use(morganMiddleware);

// routes configuration
app.use('/', rootRoute);

// server starting
app.listen(process.env.PORT, () =>
  Logger.info('servidor corriendo en el puerto ' + process.env.PORT)
);
