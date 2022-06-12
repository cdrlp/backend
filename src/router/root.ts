import express from 'express';

// libs
import { StatusCodes } from 'http-status-codes';

// utils
import Logger from '../utils/logger';
import { ok } from '../utils/httpUtils';

const router = express.Router();

router.get('/health', (_, res) => {
  Logger.info('health check ok');

  res.status(StatusCodes.OK).json(ok('health check ok'));
});

export default router;
