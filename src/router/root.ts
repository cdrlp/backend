import express from 'express';

const router = express.Router();

router.get('/', (_, res) =>
  res.json({
    ok: true,
    message: 'ok'
  })
);

export default router;
