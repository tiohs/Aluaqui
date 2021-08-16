import { Router } from 'express';

// Middlewares
import auth from './App/middlewares/auth';
// Controllers 
import UserController from './App/controllers/UserController';
import ImovelController from './App/controllers/ImovelController';
import SessionController from './App/controllers/SessionControllers';

const router = new Router();

router.post('/sessions', SessionController.store);
router.post('/user', UserController.store);
router.use(auth);
router.post('/imovel', ImovelController.store);
router.get('/imovel', ImovelController.index);

export default router;