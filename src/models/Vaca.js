import Sequelize,{Model} from 'sequelize';

export default class Vaca extends Model{
    static init(sequelize){
        super.init({
            identificacao:{
                type:Sequelize.STRING,
                
           },
           ordem_lactacao:{
                type:Sequelize.INTEGER,
                
           },
           producao_diaria:{
                 type:Sequelize.FLOAT,
                
           },
           producao_acumulada:{
                type:Sequelize.FLOAT,
                
           },
           dias_lactacao:{
                type:Sequelize.INTEGER,
                
           },
           epoca_coleta:{
                type:Sequelize.STRING,
               
           },
           idade_vaca:{
                type:Sequelize.INTEGER,
                
           },
           mastite:{
                type:Sequelize.BOOLEAN,
               
           },
           id_produtor:{
            type: Sequelize.INTEGER ,
            
           },
        },{
            sequelize,
        })
        return this;
    }
}