import Vaca from '../models/Vaca'

class VacaController {
    async index(req,res){

        const vacas = await Vaca.findAll();
        res.json(
            vacas
        );
    }

    async store(req,res){
        try{
           const {
            identificacao,
            ordem_lactacao,
            producao_diaria,
            producao_acumulada,
            dias_lactacao,
            epoca_coleta,
            idade_vaca,
            mastite=false,
           } = req.body;
           
           //id_produtor via token
           const id_produtor = req.produtorId;
           
           const vaca = await Vaca.create({
            identificacao,
            ordem_lactacao,
            producao_diaria,
            producao_acumulada,
            dias_lactacao,
            epoca_coleta,
            idade_vaca,
            mastite,
            id_produtor
           });

           return res.json(vaca);
        }catch(e){
            return res.status(400).json({
                errors: e.errors.map(err=>err.message)
            })
        }   
    }

    async show(req,res){
        try{
            const {id}= req.params;

            if(!id){
                return res.status(400).json({
                    errors:['Faltando ID']
                });
            }

            const vaca = await Vaca.findByPk(id)

            if(!vaca){
                return res.status(400).json({
                    errors:['Vaca não existe']
                });
            }

            return res.json(vaca);

        }catch(e){
            return res.status(400).json({
                errors: e.errors.map(err=>err.message)
            })
        }   
    }

    async update(req,res){
        try{
            const {id}= req.params;

            if(!id){
                return res.status(400).json({
                    errors:['Faltando ID']
                });
            }

            const vaca = await Vaca.findByPk(id)

            if(!vaca){
                return res.status(400).json({
                    errors:['Vaca não existe']
                });
            }

            //const {producao_diaria,ordem_lactacao,dias_lactacao} = req.body;

            //mastite = true/false será descoberto via rede neural

            const novaVaca = await vaca.update(req.body);

            return res.json(novaVaca);

        }catch(e){
            return res.status(400).json({
                errors: e.errors.map(err=>err.message)
            })
        }
        
    }

    async remove(req,res){

        try{
            const {id}= req.params;

            if(!id){
                return res.status(400).json({
                    errors:['Faltando ID']
                });
            }

            const vaca = await Vaca.findByPk(id)

            if(!vaca){
                return res.status(400).json({
                    errors:['Vaca não existe']
                });
            }

            await vaca.destroy();

            return res.json({
                apagado:true
            });
        }catch(e){
            return res.status(400).json({
                errors: e.errors.map(err=>err.message)
            })
        }
       
    }
}

export default new VacaController();