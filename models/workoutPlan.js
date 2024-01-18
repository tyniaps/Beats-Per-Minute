const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WorkoutPlan extends Model {}

// Define the WorkoutPlan model
WorkoutPlan.init(
  {
    // Define model attributes (fields)
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // Add other attributes as needed in the future 
  },
  {
    // Define model options
    sequelize,
    timestamps: false, // Disable timestamps for simplicity
    freezeTableName: true, // Use singular table name
    underscored: true, // Use snake_case for column names
    modelName: 'workout_plan', // Set model name in singular form
  }
);

module.exports = WorkoutPlan;