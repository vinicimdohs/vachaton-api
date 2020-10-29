"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _VacaController = require('../controllers/VacaController'); var _VacaController2 = _interopRequireDefault(_VacaController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new _express.Router;

router.get('/',_loginRequired2.default,_VacaController2.default.index);
router.get('/:id',_loginRequired2.default,_VacaController2.default.show);
router.post('/',_loginRequired2.default,_VacaController2.default.store);
router.put('/:id',_loginRequired2.default,_VacaController2.default.update);
router.delete('/:id',_loginRequired2.default,_VacaController2.default.remove);

exports. default = router;