import {Router} from 'express';
import vacaController from '../controllers/VacaController'
const router = new Router;

router.get('/',vacaController.index);

export default router;