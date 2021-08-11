import { Router } from 'express';

import UserController from './App/controllers/UserController';

const router = new Router();

router.get('/', UserController.index);

export default router;