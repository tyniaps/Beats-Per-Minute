// This section of the code is the  Imports index.js
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const workoutPlanRoutes = require("./workoutPlanRoutes");
const dietPlanRoutes = require("./dietPlanRoutes");
// This section of my code is my Middleware
router.use("/users", userRoutes);
router.use("/workoutPlan", workoutPlanRoutes);
router.use("/dietPlan", dietPlanRoutes);
// Exports
module.exports = router;