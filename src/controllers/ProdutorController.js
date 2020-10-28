import Produtor from '../models/produtores'

class ProdutorController {
    async store(req,res){
        try{

            const novoProdutor = await Produtor.create(req.body)
    
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
            const produtores = await Produtor.findAll();
            return res.json(produtores);
        }catch(e){
            return res.json(null);
        }
    }

    async show(req,res){
        try{
            const{id} = req.params;

            const produtor = await Produtor.findByPk(id);
            return res.json(produtor);
        }catch(e){
            return res.json(null);
        }
    }

    async update(req,res){
        try{
            const produtor = await Produtor.findByPk(req.produtorId);

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
            const produtor = await Produtor.findByPk(req.produtorId);

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

export default new ProdutorController();