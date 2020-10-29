"use strict";'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.createTable('produtores', { 
        id: {
          type: Sequelize.INTEGER ,
          allowNull:false,
          autoIncrement:true,
          primaryKey:true,
     },
     email:{
        type: Sequelize.STRING ,
        allowNull:false,
        unique:true,
     },
     password_hash:{
        type: Sequelize.STRING ,
        allowNull:false,
     },
     nome:{
      type: Sequelize.STRING ,
      allowNull:false,
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

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.dropTable('produtores');
     
  }
};
