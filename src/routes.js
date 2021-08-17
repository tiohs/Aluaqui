import { Router } from 'express';

// Middlewares
import authMiddleware from './App/middlewares/auth';
// Controllers 
import multerConfig from './config/multer';
import UserController from './App/controllers/UserController';
import ImovelController from './App/controllers/ImovelController';
import SessionController from './App/controllers/SessionControllers';

const router = new Router();

router.post('/sessions', SessionController.store);
router.post('/user', UserController.store);
router.use(authMiddleware);
router.post('/file', upload.single('file'), FileController.store);
router.post('/imovel', ImovelController.store);
router.get('/imovel', ImovelController.index);

export default router;