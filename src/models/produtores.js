import Sequelize,{Model} from 'sequelize';
import bcryptjs from 'bcryptjs';
import { userInfo } from 'os';

export default class Produtores extends Model{
    static init(sequelize){
        super.init({
           email: {
               type:Sequelize.STRING,
               defaultValue:'',
               validadte:{
                    isEmail:{
                         msg: 'Email inválido'
                    }
               }
              },
           password_hash: {
               type:Sequelize.STRING,
               defaultValue:'',
              },
           password:{
               type:Sequelize.VIRTUAL,
               defaultValue:'',
               validadte:{
                    len:{
                         args:[6,50],
                         msg: 'A senha deve ter entre 6 e 50 caracteres'
                    }
               }
              },
           nome: {
                type:Sequelize.STRING,
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
                produtor.password_hash = await bcryptjs.hash(produtor.password,8);
             }
             

        })
        return this;
    }
}