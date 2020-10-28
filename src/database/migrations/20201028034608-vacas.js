'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.createTable('vacas',{ 
        id: {
            type: Sequelize.INTEGER ,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
       },
       identificacao:{
            type:Sequelize.STRING,
            allowNull:false
       },
       ordem_lactacao:{
            type:Sequelize.INTEGER,
            allowNull:false
       },
       producao_diaria:{
             type:Sequelize.FLOAT,
             allowNull:false
       },
       producao_acumulada:{
            type:Sequelize.FLOAT,
            allowNull:false
       },
       dias_lactacao:{
            type:Sequelize.INTEGER,
            allowNull:false
       },
       epoca_coleta:{
            type:Sequelize.STRING,
            allowNull:false
       },
       idade_vaca:{
            type:Sequelize.INTEGER,
            allowNull:false
       },
       mastite:{
            type:Sequelize.BOOLEAN,
            allowNull:false
       },
       id_produtor:{
        type: Sequelize.INTEGER ,
        allowNull:false,
        references:{
          model:'produtores',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
       },
       created_at:{
        type:Sequelize.DATE,
        allowNull:false,
       },
     updated_at:{
        type:Sequelize.DATE,
        allowNull:false,
     },
        
      });
    
  },

  down: async (queryInterface) => {
   
      await queryInterface.dropTable('vacas');
    
  }
};

