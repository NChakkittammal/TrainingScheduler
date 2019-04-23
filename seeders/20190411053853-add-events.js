'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      queryInterface.bulkInsert('Events', [{eventName: 'Web Development Training'
      , eventLocation:'A St,EastBrunswick,NJ', eventDate: '2019-01-04', createdAt: '2019-04-04',
      updatedAt: '2019-04-05' ,eventDescription: 'Angular and Node'
      }], {});

      return queryInterface.bulkInsert('Events', [{eventName: 'Database Training'
      , eventLocation:'B St,EastBrunswick,NJ', eventDate: '2019-01-06', createdAt: '2019-04-04',
      updatedAt: '2019-04-05' ,eventDescription: 'SQL'
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Events', null, {});
    
  }
};
