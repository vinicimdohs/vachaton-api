import Sequelize,{Model} from 'sequelize';

export default class Vaca extends Model{
    static init(sequelize){
        super.init({
            identificacao:{
                type:Sequelize.STRING,
                defaultValue:'',
                validade:{
                     len:{
                          args:[1,45],
                          msg:'identificação precisa ter no máximo 45 caracteres'
                     }
                }
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

        this.addHook('beforeSave',async vaca =>{
             vaca.producao_acumulada += vaca.producao_diaria;
          })

        return this;
    }
}