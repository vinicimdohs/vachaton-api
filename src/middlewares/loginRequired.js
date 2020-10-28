import jwt from 'jsonwebtoken';
import Produtor from '../models/produtores'

export default async (req,res,next) =>{
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({
            errors: ['Login required']
        })
    }

    const [,token] = authorization.split(' ');

    try{
        const dados = jwt.verify(token,process.env.TOKEN_SECRET);
        const {id,email} = dados;

        const produtor = await Produtor.findOne({
            where:{
                id,
                email
            }
        })

        if(!produtor){
            return res.status(401).json({
                errors:['Usuário inválido'],
            });
        }
        
        req.produtorId = id;
        req.produtorEmail = email;

        return next();
    }catch(e){
        return res.status(401).json({
            errors: ['Token expirado ou inválido']
        })
    }
}