document.getElementById("myForm").addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var errorElement = document.getElementById("error");

    if (nameInput === "" || emailInput === "") {
        errorElement.textContent = "Please fill in all required fields.";
    } else {
        // Reset error message if fields are filled
        errorElement.textContent = "";
        // Here you can perform additional validation if needed
        
        // Display success message
        alert("Form submitted successfully!");
        // Optionally, you can submit the form programmatically
        // event.target.submit();
    }
}