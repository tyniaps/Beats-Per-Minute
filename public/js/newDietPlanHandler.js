// This section of my code is my function so users can create new diet plans (newDietPlanHandler.js)
async function newDietPlanHandler(event) {
  try {
    // Prevent the default form submission
    event.preventDefault();

    // Gather input values
    const title = document.querySelector("#titleInput").value.trim();
    const description = document.querySelector("#bodyInput").value.trim();

    // Input validation
    if (!title || !description) {
      alert("Please provide both title and description.");
      return;
    }

    // Make a fetch request to create a new meal plan
    const response = await fetch(`/api/dietPlan`, {
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
      // Redirect to the dashboard on successful meal plan creation
      document.location.replace("/dashboard");
    } else {
      // Handle failed response
      const errorMessage = await response.text();
      alert(`Failed to create a new diet plan: ${errorMessage}`);
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("An unexpected error occurred:", error);
    alert("An unexpected error occurred. Please try again.");
  }
}

// Event Listener
document
  .querySelector(".createDietPlan")
  .addEventListener("submit", newDietPlanHandler);

