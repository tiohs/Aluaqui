import { Router } from 'express';

const router = new Router();

router.get('/', (req, res, next) => {
  res.json({
    "ok": "Hello World ! 😎"
  });
});

export default router;