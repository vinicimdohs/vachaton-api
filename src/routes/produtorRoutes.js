import {Router} from 'express';
import produtorController from '../controllers/ProdutorController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router;

router.post('/',produtorController.store);
router.get('/',loginRequired,produtorController.index);
router.get('/:id',produtorController.show);
router.put('/:id',produtorController.update);
router.delete('/:id',produtorController.remove);
export default router;