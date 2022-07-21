'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:*/
     await queryInterface.createTable('Colors', { id: Sequelize.INTEGER, primaryKey: true, name: Sequelize.STRING });
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:*/
     await queryInterface.dropTable('Colors');
     
  }
};
