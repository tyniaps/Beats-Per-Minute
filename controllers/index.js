// Import controllers
const router = require('express').Router();
const dietPlanController = require('./api/dietPlanRoutes');
const workoutController = require('./api/workoutPlanRoutes');
const userController = require('./api/userRoutes');
const dashboardController = require('./api/dashboardRoutes');
const homeController = require('./homeRoutes');

// Exports controllers as an object
module.exports = {
    dietPlanRoutes,
    workoutPlanRoutes,
    userRoutes,
    dashboardRoutes,
    homeRoutes,
  };

