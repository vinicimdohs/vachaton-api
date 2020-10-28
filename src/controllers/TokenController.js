import Produtor from '../models/produtores'
import jwt from 'jsonwebtoken';

class TokenController {
    async store(req,res){
        const {email='',password = ''} = req.body;

        if(!email || !password){
            return res.status(401).json({
                errors:['Credenciais inválidas']
            })
        }

        const produtor = await Produtor.findOne({where:{
            email
        }})

        if(!produtor){
            return res.status(401).json({
                errors:['produtor não existe']
            })
        }

        if(!(await produtor.passwordIsValid(password))){
            return res.status(401).json({
                errors:['senha inválida']
            })
        }

        const {id} = produtor;
        const token = jwt.sign({id,email},process.env.TOKEN_SECRET,{
            expiresIn:process.env.TOKEN_EXPIRATION
        })
       
       return res.json(
            {token}
        );
    }
}

export default new TokenController();