const User = require('./User');
const DietPlan = require('./dietPlan');
const WorkoutPlan = require('./workoutPlan');


// Specifies a one-to-many relationship where a user can have multiple diet plans. The foreign key 'user_id' in the DietPlan model establishes this relationship.
User.hasMany(DietPlan, {
  foreignKey: 'user_id',
});

//Specifies the inverse of the previous association, indicating that each diet plan belongs to a single user using the foreign key 'user_id'.
DietPlan.belongsTo(User, {
  foreignKey: 'user_id',
});
//Similar to the diet plans, this establishes a one-to-many relationship between users and workout plans.
User.hasMany(WorkoutPlan, {
  foreignKey: 'user_id',
});

WorkoutPlan.belongsTo(User, {
  foreignKey: 'user_id',
});

DietPlan.hasMany(Comment, {
  foreignKey: 'dietplan_id',
});

// We can add other associations as needed

module.exports = {
  User,
  DietPlan,
  WorkoutPlan,
};