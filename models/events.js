'use strict';
module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    eventLocation: DataTypes.STRING,
    eventDescription: DataTypes.STRING
  },{}); 

  Events.associate = function(models) {
    // associations can be defined here
    models.Events.belongsTo(models.Users,
      {
        foreignkey: 'userId',
        sourcekey: 'id',
      });
  };
  return Events;
};