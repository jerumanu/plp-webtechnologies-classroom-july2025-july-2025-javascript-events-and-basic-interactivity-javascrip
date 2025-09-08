// =========================
// Part 1: Event Handling
// =========================

// Example: Show message when button is clicked
document.getElementById("greetBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "Hello! You clicked the button 🎉";
});

// =========================
// Part 2: Interactive Elements
// =========================

// Light/Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});

// =========================
// Part 3: Form Validation
// =========================

// Signup Form Validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Grab inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Grab error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMsg = document.getElementById("formSuccess");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  let isValid = true;

  // Validate name
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Validate email with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  }

  // Validate password (min 6 chars, at least one number)
  const passwordRegex = /^(?=.*[0-9]).{6,}$/;
  if (!passwordRegex.test(password)) {
    passwordError.textContent = "Password must be 6+ chars and include a number.";
    isValid = false;
  }

  // If valid, show success
  if (isValid) {
    successMsg.textContent = "🎉 Form submitted successfully!";
    this.reset();
  }
});

