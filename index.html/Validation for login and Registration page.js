// Login Form Validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var valid = true;

    // Reset error messages
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    // Email validation
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        document.getElementById("emailError").innerText = "Please enter a valid email.";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
        valid = false;
    }

    if (valid) {
        alert("Login successful!");
    }
});

// Registration Form Validation
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var valid = true;

    // Reset error messages
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    // Email validation
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        document.getElementById("emailError").innerText = "Please enter a valid email.";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
        valid = false;
    }

    if (valid) {
        alert("Registration successful!");
    }
});