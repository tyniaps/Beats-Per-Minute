const fs = require('fs');

const deleteMealPlan = (mealPlanName, mealName) => {
  try {
    // Read the existing Mealplandata.json
    const mealPlanData = JSON.parse(fs.readFileSync('Mealplandata.json', 'utf-8'));

    // Find the meal plan by name
    const mealPlanIndex = mealPlanData.findIndex(plan => plan.name === mealPlanName);

    if (mealPlanIndex !== -1) {
      // If a specific meal name is provided, delete that meal
      if (mealName) {
        const mealIndex = mealPlanData[mealPlanIndex].meals.findIndex(meal => meal.name === mealName);

        if (mealIndex !== -1) {
          mealPlanData[mealPlanIndex].meals.splice(mealIndex, 1);
          console.log(`Meal '${mealName}' deleted from meal plan '${mealPlanName}'.`);
        } else {
          console.log(`Meal '${mealName}' not found in meal plan '${mealPlanName}'.`);
        }
      } else {
        // Delete the entire meal plan if no specific meal name is provided
        mealPlanData.splice(mealPlanIndex, 1);
        console.log(`Meal plan '${mealPlanName}' deleted.`);
      }

      // Write the updated data back to Mealplandata.json
      fs.writeFileSync('Mealplandata.json', JSON.stringify(mealPlanData, null, 2));

      console.log('Meal plan data updated successfully.');
    } else {
      console.log(`Meal plan '${mealPlanName}' not found.`);
    }
  } catch (err) {
    console.error('Error deleting meal plan:', err);
  }
};

// Example usage:
// Specify the meal plan name and, if needed, the specific meal name to delete
const mealPlanToDelete = 'Lunch';
const specificMealToDelete = 'Quinoa and Vegetable Stir-Fry';
deleteMealPlan(mealPlanToDelete, specificMealToDelete);
