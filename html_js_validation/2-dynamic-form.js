function generateInputFields() {
    var selectValue = parseInt(document.getElementById("selectDropdown").value);
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear previous input fields

    for (var i = 1; i <= selectValue; i++) {
        var inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputContainer.appendChild(inputField);
    }
}

function validateForm() {
    var inputFields = document.querySelectorAll("#inputContainer input");
    var errorElement = document.getElementById("error");

    for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value === "") {
            errorElement.textContent = "Please fill in all fields";
            return false; // Prevent form submission
        }
    }

    errorElement.textContent = ""; // Clear error message if all fields are filled
    return true; // Allow form submission
}