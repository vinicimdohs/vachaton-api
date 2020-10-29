"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Vaca extends _sequelize.Model{
    static init(sequelize){
        super.init({
            identificacao:{
                type:_sequelize2.default.STRING,
                defaultValue:'',
                validade:{
                     len:{
                          args:[1,45],
                          msg:'identificação precisa ter no máximo 45 caracteres'
                     }
                }
           },
           ordem_lactacao:{
                type:_sequelize2.default.INTEGER,
                
           },
           producao_diaria:{
                 type:_sequelize2.default.FLOAT,
                 defaultValue:0,

                
           },
           producao_acumulada:{
                type:_sequelize2.default.FLOAT,
                defaultValue:0,
                
           },
           dias_lactacao:{
                type:_sequelize2.default.INTEGER,
                
           },
           epoca_coleta:{
                type:_sequelize2.default.STRING,
               
           },
           idade_vaca:{
                type:_sequelize2.default.INTEGER,
                
           },
           mastite:{
                type:_sequelize2.default.BOOLEAN,
           },
           id_produtor:{
            type: _sequelize2.default.INTEGER ,
            
           },
        },{
            sequelize,
        })

        this.addHook('beforeSave',async vaca =>{
             vaca.producao_acumulada += vaca.producao_diaria;
          })

        return this;
    }

    static associate(models){
         this.belongsTo(models.Produtores,{foreignKey:'id_produtor'})

    }
} exports.default = Vaca;