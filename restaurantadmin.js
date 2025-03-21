const donationForm = document.getElementById("donatefood");
const foodInputsContainer = document.getElementById("foodInputs");
const addFoodButton = document.getElementById("addFood");

// Function to Add More Food Item Inputs
addFoodButton.addEventListener("click", () => {
    const foodItemInput = document.createElement("input");
    foodItemInput.type = "text";
    foodItemInput.placeholder = "Enter Another Food Item";
    foodItemInput.required = true;

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.placeholder = "Quantity";
    quantityInput.required = true;

    foodInputsContainer.appendChild(document.createElement("br"));
    foodInputsContainer.appendChild(foodItemInput);
    foodInputsContainer.appendChild(quantityInput);
});

// Handling Form Submission
donationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thanks for donating!");
});
