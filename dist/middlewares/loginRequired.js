"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _produtores = require('../models/produtores'); var _produtores2 = _interopRequireDefault(_produtores);

exports. default = async (req,res,next) =>{
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({
            errors: ['Login required']
        })
    }

    const [,token] = authorization.split(' ');

    try{
        const dados = _jsonwebtoken2.default.verify(token,process.env.TOKEN_SECRET);
        const {id,email} = dados;

        const produtor = await _produtores2.default.findOne({
            where:{
                id,
                email
            }
        })

        if(!produtor){
            return res.status(401).json({
                errors:['Usuário inválido'],
            });
        }
        
        req.produtorId = id;
        req.produtorEmail = email;

        return next();
    }catch(e){
        return res.status(401).json({
            errors: ['Token expirado ou inválido']
        })
    }
}