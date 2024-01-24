// Imports
const router = require("express").Router();
const { DietPlan, WorkoutPlan, User, Comment } = require("../models");
const withAuth = require("../utils/auth");
// Route to get all DietPlans and WorkoutPlans
router.get("/", async (req, res) => {
  try {
    const planData = await DietPlan.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const plans = planData.map((plan) => plan.get({ plain: true }));
    res.render("homepage", {
      plans,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Route to get details of a specific DietPlan
router.get("/dietPlan/:id", withAuth, async (req, res) => {
  try {
    const dietPlanData = await DietPlan.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    const dietPlan = dietPlanData.get({ plain: true });
    res.render("dietPlan", {
      ...dietPlan,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    res.redirect("/login");
  }
});
// Route to allow logged-in user access to the dashboard page
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: DietPlan,
          include: [User],
        },
        {
          model: WorkoutPlan,
        },
        {
          model: Comment,
        },
      ],
    });
    const user = userData.get({ plain: true });
    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Other routes...
// Export
module.exports = router;