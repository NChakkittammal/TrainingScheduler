'use strict';
module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    eventLocation: DataTypes.STRING,
    eventDescription: DataTypes.STRING,
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    dateCompleted: DataTypes.DATE,
    orderId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },

  }, {});
},{};

  Events.associate = function(models) {
    // associations can be defined here
    models.Events.belongsTo(models.Users,
      {
        foreignkey: 'userId',
        sourcekey: 'id',
      });
  };
  return Events;
