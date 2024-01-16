const Sequelize = require('sequelize');

// Load environment variables from the .env file
require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  // If JAWSDB_URL is available (used in Heroku deployment)
  ? new Sequelize(process.env.JAWSDB_URL)
  // If JAWSDB_URL is not available, use local database configuration
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',    // Database host
      dialect: 'mysql',      // Database dialect (e.g., mysql, postgres)
      port: 3306             // Port on which the database is running
    });

module.exports = sequelize;
