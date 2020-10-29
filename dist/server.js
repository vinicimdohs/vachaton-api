"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
//import {url} from './config/appConfig';


const port = process.env.APP_PORT;

_app2.default.listen(port);
