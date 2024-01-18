const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DietPlan extends Model {}

DietPlan.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // Add other attributes as needed as our project grows if necessary
  },
  {
    sequelize,
    modelName: 'dietplan',
  }
);

module.exports = DietPlan;