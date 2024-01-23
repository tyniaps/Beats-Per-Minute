const express = require('express');
const db = require('../../models/dietPlan');

const router = express.Router();

// Get all diet plans
router.get('/diet-plans', async (req, res) => {
  try {
    const dietPlans = await db.Diet.findAll();
    res.json(dietPlans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific diet plan by ID
router.get('/diet-plans/:id', async (req, res) => {
  const dietPlanId = req.params.id;

  try {
    const dietPlan = await db.Diet.findByPk(dietPlanId);
    if (!dietPlan) {
      return res.status(404).json({ error: 'Diet plan not found' });
    }

    res.json(dietPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new diet plan
router.post('/diet-plans', async (req, res) => {
  const { name, description } = req.body;

  try {
    const newDietPlan = await db.Diet.create({
      name,
      description,
    });

    res.json(newDietPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a specific diet plan by ID
router.put('/diet-plans/:id', async (req, res) => {
  const dietPlanId = req.params.id;
  const { name, description } = req.body;

  try {
    const updatedDietPlan = await db.Diet.update(
      {
        name,
        description,
      },
      {
        where: {
          id: dietPlanId,
        },
      }
    );

    if (updatedDietPlan[0] === 0) {
      return res.status(404).json({ error: 'Diet plan not found' });
    }

    res.json({ message: 'Diet plan updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a specific diet plan by ID
router.delete('/diet-plans/:id', async (req, res) => {
  const dietPlanId = req.params.id;

  try {
    const deletedRows = await db.Diet.destroy({
      where: {
        id: dietPlanId,
      },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Diet plan not found' });
    }

    res.json({ message: 'Diet plan deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

