'use strict';
module.exports = (sequelize, DataTypes) => {
  var macaddress = sequelize.define('MacAddress', {
    macaddr: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    underscored: true,
  });
  macaddress.associate = function(models) {
    // associations can be defined here
  };
  return macaddress
};
