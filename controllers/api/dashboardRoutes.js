const router = require("express").Router();
const { DietPlan, WorkoutPlan, User } = require("../../models");
const withAuth = require("../../utils/auth");
// Route to render the user's fitness dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    // Fetch the user's diet plans and workout plans along with other necessary data
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        { model: DietPlan },
        { model: WorkoutPlan },
      ],
    });
    // Serialize the user's data to send to the handlebars template
    const user = userData.get({ plain: true });
    res.render("fitness-dashboard", { user }); // Adjust the template name as needed
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
// Route to render the edit diet plan page
router.get("/edit-diet/:id", withAuth, async (req, res) => {
  try {
    // Fetch the selected diet plan data
    const dietPlanData = await DietPlan.findByPk(req.params.id);
    if (!dietPlanData) {
      res.status(404).json({ message: "Diet plan not found" });
      return;
    }
    // Serialize the diet plan data to send to the handlebars template
    const dietPlan = dietPlanData.get({ plain: true });
    res.render("edit-diet-plan", { dietPlan }); // Adjust the template name as needed
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
// Route to update a diet plan
router.put("/update-diet/:id", withAuth, async (req, res) => {
  try {
    // Update the selected diet plan
    const updatedDietPlan = await DietPlan.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedDietPlan[0] === 0) {
      res.status(404).json({ message: "Diet plan not found" });
      return;
    }
    res.json({ message: "Diet plan updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
// Route to delete a diet plan
router.delete("/delete-diet/:id", withAuth, async (req, res) => {
  try {
    // Delete the selected diet plan
    const deletedDietPlanRows = await DietPlan.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedDietPlanRows === 0) {
      res.status(404).json({ message: "Diet plan not found" });
      return;
    }
    res.json({ message: "Diet plan deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
// Route to render the edit workout plan page
router.get("/edit-workout/:id", withAuth, async (req, res) => {
  try {
    // Fetch the selected workout plan data
    const workoutPlanData = await WorkoutPlan.findByPk(req.params.id);
    if (!workoutPlanData) {
      res.status(404).json({ message: "Workout plan not found" });
      return;
    }
    // Serialize the workout plan data to send to the handlebars template
    const workoutPlan = workoutPlanData.get({ plain: true });
    res.render("edit-workout-plan", { workoutPlan }); // Adjust the template name as needed
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
// Route to update a workout plan
router.put("/update-workout/:id", withAuth, async (req, res) => {
  try {
    // Update the selected workout plan
    const updatedWorkoutPlan = await WorkoutPlan.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedWorkoutPlan[0] === 0) {
      res.status(404).json({ message: "Workout plan not found" });
      return;
    }
    res.json({ message: "Workout plan updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
// Route to delete a workout plan
router.delete("/delete-workout/:id", withAuth, async (req, res) => {
  try {
    // Delete the selected workout plan
    const deletedWorkoutPlanRows = await WorkoutPlan.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedWorkoutPlanRows === 0) {
      res.status(404).json({ message: "Workout plan not found" });
      return;
    }
    res.json({ message: "Workout plan deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
module.exports = router;