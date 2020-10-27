import Vaca from '../models/Vaca'

class HomeController {
    async index(req,res){
        const novaVaca = await Vaca.create({
            identificacao:'teste'  ,            
           ordem_lactacao:1,
           producao_diaria:1,
           producao_acumulada:1,
           dias_lactacao:2,
           epoca_coleta:'seca',
           idade_vaca:24,
           mastite: true,
           id_produtor:2
        })

        res.json(
            novaVaca
        );
    }
}

export default new HomeController();