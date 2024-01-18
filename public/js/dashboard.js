const express = require('express');
const router = express.Router();

// Import your withAuth middleware and models (User, DietPlan, WorkoutPlan)
const withAuth = require('../middleware/withAuth');
const { User, DietPlan, WorkoutPlan } = require('../models');

// Route to render the user's fitness dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        { model: DietPlan },
        { model: WorkoutPlan },
      ],
    });
    const user = userData.get({ plain: true });
    res.render('fitness-dashboard', { user });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to render the edit diet plan page
router.get('/edit-diet/:id', withAuth, async (req, res) => {
  try {
    const dietPlanData = await DietPlan.findByPk(req.params.id);
    if (!dietPlanData) {
      res.status(404).json({ message: 'Diet plan not found' });
      return;
    }
    const dietPlan = dietPlanData.get({ plain: true });
    res.render('edit-diet-plan', { dietPlan });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to render the edit workout plan page
router.get('/edit-workout/:id', withAuth, async (req, res) => {
  try {
    const workoutPlanData = await WorkoutPlan.findByPk(req.params.id);
    if (!workoutPlanData) {
      res.status(404).json({ message: 'Workout plan not found' });
      return;
    }
    const workoutPlan = workoutPlanData.get({ plain: true });
    res.render('edit-workout-plan', { workoutPlan });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
