document.addEventListener('DOMContentLoaded', () => {
    // Get the delete button element by its ID
    const deleteButton = document.getElementById('wp1DeleteBttn','wp2DeleteBttn','wp2DeleteBttn');
    // Add a click event listener to the delete button
    deleteButton.addEventListener('click', async () => {
      // Get the workout plan ID from the URL
      const workoutPlanId = window.location.pathname.split('/').pop();
      try {
        // Make a DELETE request to delete the specified workout plan
        const response = await fetch(`/api/workout-plans/${workoutPlanId}`, {
          method: 'DELETE',
        });
        // Check if the request was successful
        if (response.ok) {
          // Handle success, e.g., redirect or display a success message
          console.log('Workout plan deleted successfully');
        } else {
          // Handle failure, log an error message
          console.error('Failed to delete workout plan');
        }
      } catch (error) {
        // Handle any errors that occurred during the fetch operation
        console.error('Error:', error);
      }
    });
  });