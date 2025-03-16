document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (email === "admin@example.com" && password === "password123") {
        message.textContent = "Login successful!";
        message.className = "text-success";
    } else {
        message.textContent = "Invalid email or password!";
        message.className = "text-danger";
    }
});
