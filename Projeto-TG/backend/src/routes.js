import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ItemController from './app/controllers/ItemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware); /* Apartir desse Middlware todas as rotas necessitam do token */

routes.get('/user', UserController.index);
routes.put('/user', upload.single('file'), UserController.update);

routes.get('/item', ItemController.index);
routes.post('/item', ItemController.store);
routes.delete('/item/:id', ItemController.delete);

/*routes.post('/use', upload.single('file'), FileController.store);*/

export default routes;