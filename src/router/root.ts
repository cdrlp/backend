import express from 'express';
import Logger from '../utils/logger';

const router = express.Router();

router.get('/health', (_, res) => {
  Logger.info('health check ok');

  res.status(200).json({
    ok: true,
    message: 'ok'
  });
});

export default router;
