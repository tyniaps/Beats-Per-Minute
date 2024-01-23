//The function below allows users to create a new Workout Plan entry.
async function newWorkoutPlanHandler(event) {
    try {
      // Prevent the default form submission
      event.preventDefault();
      // Gather input values
      const title = document.querySelector("#InputWorkoutName1").value.trim();
      const description = document.querySelector("#InputWorkoutDescription1").value.trim();
      // Input validation
      if (!title || !description) {
        alert("Please provide a title and description.");
        return;
      }
      // Make a fetch request to create a new Workout Plan entry
      const response = await fetch(`/api/workoutPlan`, {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Handle the response
      if (response.ok) {
        // Redirect to the Workout Plan page on successful creation
        document.location.replace("workout-plans");
      } else {
        // Handle failed response
        const errorMessage = await response.text();
        alert(`Failed to create a new workout entry: ${errorMessage}`);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("An unexpected error occurred:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  }
  // Event Listener
  document
    .querySelector("#wpSaveButton")
    .addEventListener("submit", newWorkoutHandler);