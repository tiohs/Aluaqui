import { Router } from 'express';
import UserController from './App/controllers/UserController';

const router = new Router();

router.post('/user', UserController.store);

export default router;