const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

// Define the WorkoutPlan model
Comment.init(
  {
    // Define model attributes (fields)
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CommentUser:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    ,user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    ,comment_body:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    // Add other attributes as needed in the future 
  },
  {
    // Define model options
    sequelize,
    timestamps: false, // Disable timestamps for simplicity
    freezeTableName: true, // Use singular table name
    underscored: true, // Use snake_case for column names
    modelName: 'comment', // Set model name in singular form
  }
);

module.exports = Comment;