document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("table");

    // Function to add a new donation row
    function addDonation(slNo, foodItem, quantity, location, pincode) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${slNo}</td>
            <td>${foodItem}</td>
            <td>${quantity}</td>
            <td>${location}</td>
            <td>${pincode}</td>
        `;
        table.appendChild(newRow);
    }

    // Dummy data for initial display (Can be fetched from a backend later)
    const donations = [
        { foodItem: "Pasta", quantity: "20 kg", location: "Chennai", pincode: "600001" },
        { foodItem: "Fruits", quantity: "15 kg", location: "Hyderabad", pincode: "500001" }
    ];

    // Adding predefined data to the table
    donations.forEach((donation, index) => {
        addDonation(index + 4, donation.foodItem, donation.quantity, donation.location, donation.pincode);
    });

    // Button to add new donation (for demonstration purposes)
    const addButton = document.createElement("button");
    addButton.textContent = "Add New Donation";
    addButton.style.backgroundColor = "green";
    addButton.style.color = "white";
    addButton.style.padding = "10px";
    addButton.style.marginTop = "20px";
    addButton.style.border = "none";
    addButton.style.borderRadius = "5px";
    addButton.style.cursor = "pointer";

    document.querySelector(".container").appendChild(addButton);

    addButton.addEventListener("click", function () {
        const foodItem = prompt("Enter food item:");
        const quantity = prompt("Enter quantity:");
        const location = prompt("Enter location:");
        const pincode = prompt("Enter pincode:");

        if (foodItem && quantity && location && pincode) {
            const rowCount = table.rows.length;
            addDonation(rowCount, foodItem, quantity, location, pincode);
        } else {
            alert("All fields are required!");
        }
    });
});