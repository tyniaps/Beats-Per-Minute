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
    calories: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    protein: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    carbs: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    fat: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    // Add other attributes as needed
  },
  {
    sequelize,
    modelName: 'dietplan',
  }
);

module.exports = DietPlan;

