import {Router} from 'express';
import produtorController from '../controllers/ProdutorController'
const router = new Router;

router.post('/',produtorController.store);

export default router;