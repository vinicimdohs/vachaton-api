import {Router} from 'express';
import produtorController from '../controllers/ProdutorController'
const router = new Router;

router.post('/',produtorController.store);
router.get('/',produtorController.index);
router.get('/:id',produtorController.show);
router.put('/:id',produtorController.update);
router.delete('/:id',produtorController.remove);
export default router;