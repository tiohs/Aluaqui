import { Router } from 'express';

import UserController from './App/controllers/UserController';
import EmovelController from './App/controllers/EmovelController';

const router = new Router();

router.get('/user', UserController.index);
router.post('/user', UserController.store);
router.get('/imovel', EmovelController.store);
router.post('/imovel', EmovelController.index);

export default router;