"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _produtores = require('../models/produtores'); var _produtores2 = _interopRequireDefault(_produtores);
var _Vaca = require('../models/Vaca'); var _Vaca2 = _interopRequireDefault(_Vaca);

class ProdutorController {
    async store(req,res){
        try{

            const novoProdutor = await _produtores2.default.create(req.body)
    
            return res.json(
                novoProdutor
            );
        }catch(e){
            return res.status(400).json(
                e.errors.map(err => err.message)
            );
        }
        
    }

    async index(req,res){
        try{
            const produtores = await _produtores2.default.findAll({
                order:[['id','DESC']],
                include:{
                    model:_Vaca2.default,
                }
            });
            return res.json(produtores);
        }catch(e){
            return res.json(null);
        }
    }

    async show(req,res){
        try{
            const{id} = req.params;

            const produtor = await _produtores2.default.findByPk(id,{
                include:{
                    model:_Vaca2.default,
                }
            });
            return res.json(produtor);
        }catch(e){
            return res.json(null);
        }
    }

    async update(req,res){
        try{
            const produtor = await _produtores2.default.findByPk(req.produtorId);

            if(!produtor){
                return res.status(400).json({
                    errors:['produtor não existe']
                })
            }

            const novoProdutor = await produtor.update(req.body);

            return res.json(novoProdutor);
        }catch(e){
            return res.status(400).json(
                e.errors.map(err => err.message)
            );
        }
    }

    async remove(req,res){
        try{
            const produtor = await _produtores2.default.findByPk(req.produtorId);

            if(!produtor){
                return res.status(400).json({
                    errors:['produtor não existe']
                })
            }

            await produtor.destroy();

            return res.json(produtor);
        }catch(e){
            return res.status(400).json(
                e.errors.map(err => err.message)
            );
        }
    }
}

exports. default = new ProdutorController();