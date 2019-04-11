'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserRoles', [{
      role: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      role: 'Trainer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      role: 'Attendee',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('UserRoles', null, {});
  
  }
};
