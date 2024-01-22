// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the meal plan form element by its ID
    const mealPlanForm = document.getElementById('editMealPlanForm');
  
    // Add a submit event listener to the form
    mealPlanForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Extract the meal plan ID from the URL
      const mealPlanId = window.location.pathname.split('/').pop();
  
      // Get values from form input fields
      const name = document.getElementById('mealPlanName').value;
      const description = document.getElementById('mealPlanDescription').value;
      const calories = document.getElementById('mealPlanCalories').value;
      const protein = document.getElementById('mealPlanProtein').value;
      const carbs = document.getElementById('mealPlanCarbs').value;
      const fat = document.getElementById('mealPlanFat').value;
  
      try {
        // Make a PUT request to update the meal plan
        const response = await fetch(`/api/meal-plans/${mealPlanId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          // Send the updated meal plan data as JSON in the request body
          body: JSON.stringify({
            name,
            description,
            calories,
            protein,
            carbs,
            fat,
          }),
        });
  
        // Check if the request was successful
        if (response.ok) {
          // Handle success, e.g., redirect or display a success message
          console.log('Meal plan updated successfully');
        } else {
          // Handle failure, log an error message
          console.error('Failed to update meal plan');
        }
      } catch (error) {
        // Handle any errors that occurred during the fetch operation
        console.error('Error:', error);
      }
    });
  });
  
  