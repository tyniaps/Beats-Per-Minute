let editWorkoutPost = window.location.pathname.split("/");
// This is my function to allow users to edit blog posts from the individual blog post page
const editPost = async (event) => {
  event.preventDefault();
  console.log("clicked me");
  // get text and trim whitespace
  const comment_body = document.getElementById("SaveButton").value.trim();
  console.log(editWorkoutPost);
  document.location.assign(`/create/${editWorkoutPost[2]}`);
};
const editButton = document.querySelectorAll("#editBtn");
// Iterates over all buttons on the page allowing for edit functionality
for (let i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener("click", editPost);
}