import { db } from "./firebaaseapp.js";
import { doc, setDoc, getDoc } from "firebase/firestore/lite";

const donationForm = document.getElementById("donatefood");
const foodInputsContainer = document.getElementById("foodInputs");
const addFoodButton = document.getElementById("addFood");

// Function to Add More Food Item Inputs
addFoodButton.addEventListener("click", () => {
    const foodItemInput = document.createElement("input");
    foodItemInput.type = "text";
    foodItemInput.placeholder = "Enter Another Food Item";
    foodItemInput.required = true;
    foodItemInput.setAttribute("class", "fooditem");

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.placeholder = "Quantity";
    quantityInput.required = true;
    quantityInput.setAttribute("class", "quantity");

    foodInputsContainer.appendChild(document.createElement("br"));
    foodInputsContainer.appendChild(foodItemInput);
    foodInputsContainer.appendChild(quantityInput);
});

// Handling Form Submission
donationForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const foodItems = document.getElementsByClassName("fooditem");
    const quantities = document.getElementsByClassName("quantity");
    const pincode = document.getElementById("pincode").value; // FIXED: Use .value
    const location = document.getElementById("location").value; // FIXED: Use .value

    const donations = [];
    for (let i = 0; i < foodItems.length; i++) {
        donations.push({
            foodItem: foodItems[i].value,  // FIXED: Corrected key name
            quantity: quantities[i].value,
            pincode: pincode,  
            location: location
        });
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.uid) {
        alert("User not logged in!");
        return;
    }

    const docRef = doc(db, "users", user.uid);

    try {
        const docSnap = await getDoc(docRef);
        const allDonations = docSnap.exists() ? docSnap.data().donations || [] : [];

        // Merge new donations with existing ones
        await setDoc(docRef, { donations: [...allDonations, ...donations] }, { merge: true });

        alert("Thanks for donating!");
    } catch (error) {
        console.error("Error adding donation:", error);
        alert("Something went wrong. Please try again.");
    }
});
