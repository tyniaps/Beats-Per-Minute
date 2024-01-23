const express = require('express');
const db = require('../../models/workoutPlan');
const withAuth = require('../../utils/auth'); // Make sure to adjust the path as needed

const router = express.Router();

// Get all workout plans
router.get('/workout-plans', async (req, res) => {
  try {
    const workoutPlans = await db.WorkoutPlan.findAll();
    res.json(workoutPlans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific workout plan by ID
router.get('/workout-plans/:id', async (req, res) => {
  const workoutPlanId = req.params.id;

  try {
    const workoutPlan = await db.WorkoutPlan.findByPk(workoutPlanId);
    if (!workoutPlan) {
      return res.status(404).json({ error: 'Workout plan not found' });
    }

    res.json(workoutPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new workout plan
router.post('/workout-plans', withAuth, async (req, res) => {
  const { name, description } = req.body;

  try {
    const newWorkoutPlan = await db.WorkoutPlan.create({
      name,
      description,
    });

    res.json(newWorkoutPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a specific workout plan by ID
router.put('/workout-plans/:id', withAuth, async (req, res) => {
  const workoutPlanId = req.params.id;
  const { name, description } = req.body;

  try {
    const updatedWorkoutPlan = await db.WorkoutPlan.update(
      {
        name,
        description,
      },
      {
        where: {
          id: workoutPlanId,
        },
      }
    );

    if (updatedWorkoutPlan[0] === 0) {
      return res.status(404).json({ error: 'Workout plan not found' });
    }

    res.json({ message: 'Workout plan updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a specific workout plan by ID
router.delete('/workout-plans/:id', withAuth, async (req, res) => {
  const workoutPlanId = req.params.id;

  try {
    const deletedRows = await db.WorkoutPlan.destroy({
      where: {
        id: workoutPlanId,
      },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Workout plan not found' });
    }

    res.json({ message: 'Workout plan deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
