import dotenv from 'dotenv';
dotenv.config();

import './database';

import express from 'express';

import homeRoutes from "./routes/homeRoutes";
import produtorRoutes from './routes/produtorRoutes';
import tokenRoutes from './routes/tokenRoutes';
import vacaRoutes from './routes/vacaRoutes'

class App {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/',homeRoutes);
        this.app.use('/produtor/',produtorRoutes);
        this.app.use('/tokens/',tokenRoutes);
        this.app.use('/vaca/',vacaRoutes);

    }
}

export default new App().app;