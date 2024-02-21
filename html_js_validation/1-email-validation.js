function validateEmail() {
    var email = document.getElementById("email").value;
    var errorElement = document.getElementById("error");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        return false; // Prevent form submission
    } else {
        errorElement.textContent = "";
        return true; // Allow form submission
    }
}