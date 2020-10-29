"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _produtores = require('../models/produtores'); var _produtores2 = _interopRequireDefault(_produtores);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController {
    async store(req,res){
        const {email='',password = ''} = req.body;

        if(!email || !password){
            return res.status(401).json({
                errors:['Credenciais inválidas']
            })
        }

        const produtor = await _produtores2.default.findOne({where:{
            email
        }})

        if(!produtor){
            return res.status(401).json({
                errors:['produtor não existe']
            })
        }

        if(!(await produtor.passwordIsValid(password))){
            return res.status(401).json({
                errors:['senha inválida']
            })
        }

        const {id} = produtor;
        const token = _jsonwebtoken2.default.sign({id,email},process.env.TOKEN_SECRET,{
            expiresIn:process.env.TOKEN_EXPIRATION
        })
       
       return res.json(
            {token}
        );
    }
}

exports. default = new TokenController();