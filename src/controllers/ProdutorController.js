import Produtor from '../models/produtores'

class ProdutorController {
    async store(req,res){
        try{

            const novoProdutor = await Produtor.create(req.body)
    
            res.json(
                novoProdutor
            );
        }catch(e){
            res.status(400).json(
                e.errors.map(err => err.message)
            );
        }
        
    }
}

export default new ProdutorController();