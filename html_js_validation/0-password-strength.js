function validatePassword() {
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if (!passwordRegex.test(password)) {
        errorElement.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character (!@#$%^&*).";
        return false; // Prevent form submission
    } else {
        errorElement.textContent = "";
        return true; // Allow form submission
    }
}