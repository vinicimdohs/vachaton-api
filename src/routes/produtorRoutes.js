import {Router} from 'express';
import produtorController from '../controllers/ProdutorController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router;

//Não deveria existir
router.get('/',produtorController.index);
router.get('/:id',produtorController.show);

router.post('/',produtorController.store);
router.put('/',loginRequired,produtorController.update);
router.delete('/',loginRequired,produtorController.remove);
export default router;