// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("donations");

// Form & Table Reference
const donationForm = document.getElementById("donatefood");
const table = document.querySelector("table");

// Store data temporarily
let donations = [];

// Function to Add Data to Table
function addToTable(foodItem, quantity, location, pincode) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${foodItem}</td>
        <td>${quantity}</td>
        <td>${location}</td>
        <td>${pincode}</td>
    `;
    table.appendChild(newRow);
}

// Handle Form Submission
donationForm.addEventListener("submit", e => {
    e.preventDefault();

    // Get Input Values
    const foodItem = document.getElementById("fooditem").value;
    const quantity = document.getElementById("quantity").value;
    const location = document.getElementById("location").value;
    const pincode = document.getElementById("pincode").value;

    if (foodItem && quantity && location && pincode) {
        // Add Data to Local Array
        donations.push({ foodItem, quantity, location, pincode });

        // Display Data in Table
        addToTable(foodItem, quantity, location, pincode);

        // Clear Input Fields
        donationForm.reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Handle Donate Button Click (Store in Firebase)
document.querySelector("button").addEventListener("click", () => {
    if (donations.length === 0) {
        alert("No items to donate!");
        return;
    }

    // Store Data in Firebase
    donations.forEach(donation => {
        db.push(donation);
    });

    alert("Thanks for donating! Your data is saved.");

    // Clear Table (except headers)
    table.innerHTML = `
        <tr>
            <th>Food Item</th>
            <th>Quantity</th>
            <th>Location</th>
            <th>Pincode</th>
        </tr>
    `;

    // Clear Local Data
    donations = [];
});
