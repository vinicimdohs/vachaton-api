"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _produtorRoutes = require('./routes/produtorRoutes'); var _produtorRoutes2 = _interopRequireDefault(_produtorRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _vacaRoutes = require('./routes/vacaRoutes'); var _vacaRoutes2 = _interopRequireDefault(_vacaRoutes);

class App {
    constructor(){
        this.app = _express2.default.call(void 0, );
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(_express2.default.urlencoded({extended:true}));
        this.app.use(_express2.default.json());
    }

    routes(){
        this.app.use('/',_homeRoutes2.default);
        this.app.use('/produtor/',_produtorRoutes2.default);
        this.app.use('/tokens/',_tokenRoutes2.default);
        this.app.use('/vaca/',_vacaRoutes2.default);

    }
}

exports. default = new App().app;