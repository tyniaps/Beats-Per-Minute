const sequelize = require('../config/connection');
const { WorkoutPlan, DietPlan } = require('../models');

const workoutPlanData = require('./workoutPlanData.json');
const dietPlanData = require('./dietPlanData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const workoutPlans = await WorkoutPlan.bulkCreate(workoutPlanData, {
      individualHooks: true,
      returning: true,
    });

    for (const dietPlan of dietPlanData) {
      await DietPlan.create({
        ...dietPlan,
        workout_plan_id: workoutPlans[Math.floor(Math.random() * workoutPlans.length)].id,
      });
    }

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
