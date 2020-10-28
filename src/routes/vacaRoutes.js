import {Router} from 'express';
import vacaController from '../controllers/VacaController'
import loginRequired from '../middlewares/loginRequired';

const router = new Router;

router.get('/',loginRequired,vacaController.index);
router.get('/:id',loginRequired,vacaController.show);
router.post('/',loginRequired,vacaController.store);
router.put('/:id',loginRequired,vacaController.update);
router.delete('/:id',loginRequired,vacaController.remove);

export default router;