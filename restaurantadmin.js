import { db } from "./firebaaseapp.js"
import { doc, setDoc, getDoc } from "firebase/firestore/lite"

const donationForm = document.getElementById("donatefood");
const foodInputsContainer = document.getElementById("foodInputs");
const addFoodButton = document.getElementById("addFood");

// Function to Add More Food Item Inputs
addFoodButton.addEventListener("click", () => {
    const foodItemInput = document.createElement("input");
    foodItemInput.type = "text";
    foodItemInput.placeholder = "Enter Another Food Item";
    foodItemInput.required = true;
    foodItemInput.setAttribute("class", "fooditem")

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.placeholder = "Quantity";
    quantityInput.required = true;
    quantityInput.setAttribute("class", "quantity")

    foodInputsContainer.appendChild(document.createElement("br"));
    foodInputsContainer.appendChild(foodItemInput);
    foodInputsContainer.appendChild(quantityInput);
});

// Handling Form Submission
donationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const foodItems = document.getElementsByClassName("fooditem")
    const quantity = document.getElementsByClassName("quantity")
    const pincode = document.getElementById("pincode")
    const location = document.getElementById("location")

    const donations = []
    for(let i = 0; i < foodItems.length; i++)
    {
        donations.push({foodItems: foodItems[i].value, quantity: quantity[i].value, pincode, location})
    }
    
    const user = JSON.parse(localStorage.getItem("user"))

    const docRef = doc(db, "users", user.uid)

    let allDonations = [];
    async function getData()
    {
        const docSnap = await getDoc(docRef)
        const data = docSnap.data()
        return data.donations || []
    }
    getData().then(val => {
        allDonations = val;
    })

    setDoc(docRef, {donations: [...allDonations, ...donations]}, {merge: true})

    alert("Thanks for donating!");
});
