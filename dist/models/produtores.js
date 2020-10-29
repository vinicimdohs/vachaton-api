"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _os = require('os');

 class Produtores extends _sequelize.Model{
    static init(sequelize){
        super.init({
           email: {
               type:_sequelize2.default.STRING,
               defaultValue:'',
               validadte:{
                    isEmail:{
                         msg: 'Email inválido'
                    }
               }
              },
           password_hash: {
               type:_sequelize2.default.STRING,
               defaultValue:'',
              },
           password:{
               type:_sequelize2.default.VIRTUAL,
               defaultValue:'',
               validadte:{
                    len:{
                         args:[6,50],
                         msg: 'A senha deve ter entre 6 e 50 caracteres'
                    }
               }
              },
           nome: {
                type:_sequelize2.default.STRING,
                defaultValue:'',
                validadte:{
                     len:{
                          args:[3,25],
                          msg: 'Campo deve ter entre 3 e 25 caracteres'
                     }
                }
               }
        },{
            sequelize,
        })

        this.addHook('beforeSave',async produtor =>{
             if(produtor.password){
                produtor.password_hash = await _bcryptjs2.default.hash(produtor.password,8);
             }
             

        })
        return this;
    }

    passwordIsValid(password){
         return _bcryptjs2.default.compare(password,this.password_hash)
    }

    static associate(models){
     this.hasMany(models.Vaca,{foreignKey:'id_produtor'})

}
} exports.default = Produtores;