"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProdutorController = require('../controllers/ProdutorController'); var _ProdutorController2 = _interopRequireDefault(_ProdutorController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new _express.Router;

//Não deveria existir
router.get('/',_ProdutorController2.default.index);
router.get('/:id',_ProdutorController2.default.show);

router.post('/',_ProdutorController2.default.store);
router.put('/',_loginRequired2.default,_ProdutorController2.default.update);
router.delete('/',_loginRequired2.default,_ProdutorController2.default.remove);
exports. default = router;