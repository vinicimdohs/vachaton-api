import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Vaca from '../models/Vaca';

const models = [Vaca];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));