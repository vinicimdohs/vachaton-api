import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Vaca from '../models/Vaca';
import Produtor from '../models/produtores'

const models = [Vaca,Produtor];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));