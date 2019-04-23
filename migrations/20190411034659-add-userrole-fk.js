'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.addColumn('users', 'userRoleId', { type: Sequelize.INTEGER ,
      references:{ 
        model: 'UserRoles',
        key: 'id',
      }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.removeColumn('users','UserRoleId');
    
  }
};
