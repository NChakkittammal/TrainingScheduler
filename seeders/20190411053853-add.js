'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Events', [{eventName: 'Web Development Training'
      , eventLocation:'A St,EastBrunswick,NJ', eventDate: '2019-01-04'
      ,eventDescription: 'Angular and Node'
      }], {});
      return queryInterface.bulkInsert('Events', [{eventName: 'Database Training'
      , eventLocation:'B St,EastBrunswick,NJ', eventDate: '2019-01-06'
      ,eventDescription: 'SQL'
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
