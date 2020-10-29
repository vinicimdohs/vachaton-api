"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Vaca = require('../models/Vaca'); var _Vaca2 = _interopRequireDefault(_Vaca);
var _produtores = require('../models/produtores'); var _produtores2 = _interopRequireDefault(_produtores);

const models = [_Vaca2.default,_produtores2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));