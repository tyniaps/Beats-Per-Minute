// Import controllers
const dietPlanController = require('./dietplanroutes');
const workoutController = require('./workoutplanroutes');
const userController = require('./userroutes');
const dashboardController = require('./dashboardroutes');
const homeController = require('./homeroutes');

// Exports controllers as an object
module.exports = {
    dietPlanRoutes,
    workoutPlanRoutes,
    userRoutes,
    dashboardRoutes,
    homeRoutes,
  };


