import { Router } from 'express';

import UserController from './App/controllers/UserController';
import EmovelController from './App/controllers/EmovelController';
import SessionController from './App/controllers/SessionControllers';

const router = new Router();

router.post('/sessions', SessionController.store);

router.post('/user', UserController.store);
router.post('/imovel', EmovelController.store);
router.get('/imovel', EmovelController.index);

export default router;