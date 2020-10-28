import Vaca from '../models/Vaca'

class VacaController {
    async index(req,res){

        const vacas = await Vaca.findAll();
        res.json(
            vacas
        );
    }
}

export default new VacaController();