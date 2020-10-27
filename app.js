import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from "./src/routes/homeRoutes";
import produtorRoutes from './src/routes/produtorRoutes';
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
    }
}

export default new App().app;