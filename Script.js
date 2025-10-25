function login() {
  // Get input values
  const id = document.getElementById("studentID").value;
  const pass = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Dummy credentials (for testing)
  const correctID = "25P-0048";
  const correctPass = "alishan2468";

  // Check credentials
  if (id === correctID && pass === correctPass) {
    message.style.color = "green";
    message.textContent = "✅ Login successful! Redirecting...";
    
    // Simulate redirect (after 2 seconds)
    setTimeout(() => {
      window.location.href = "home.html"; // Redirect to homepage
    }, 2000);
  } else {
    message.style.color = "red";
    message.textContent = "❌ Invalid Student ID or Password!";
  }
  return false;
}
