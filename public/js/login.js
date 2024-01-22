//The code below handles user login and signup functionality

// Already registered user handler
const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const regUserEmail = document.querySelector("#loginFormEmail").value.trim();
    const regUserPassword = document.querySelector("#loginFormPassword").value.trim();
    if (regUserEmail && regUserPassword) {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ regUserEmail, regUserPassword }),
        headers: { "Content-Type": "application/json" },
      });
      
      if (response.ok) {
        // If successful, redirect the browser to the home page
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  };
  // New user handler (sign up)
  const signupFormHandler = async (event) => {
    event.preventDefault();
    const newUserName = document.querySelector("#signUpName").value.trim();
    const newUserEmail = document.querySelector("#signUpFormEmail").value.trim();
    const newUserPassword = document.querySelector("#signUpFormPassword").value.trim();
    if (newUserName && newUserEmail && newUserPassword) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ newUserName, newUserEmail, newUserPassword }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  };

  // Event Listeners
  document
    .querySelector("#loginForm")
    .addEventListener("#loginButton", loginFormHandler);
  document
    .querySelector("#SignUpForm")
    .addEventListener("#singUpBtn", signupFormHandler);