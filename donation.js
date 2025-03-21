document.addEventListener("DOMContentLoaded", function () {
    const timeOptions = document.querySelectorAll(".time span");
    const moneyOptions = document.querySelectorAll(".money");
    const customAmountInput = document.getElementById("customAmount");
    const donateButton = document.querySelector("button");

    let selectedTime = "Monthly"; // Default selection
    let selectedAmount = null;

    // Handle time selection (Monthly or One-time)
    timeOptions.forEach(option => {
        option.addEventListener("click", function () {
            timeOptions.forEach(item => item.classList.remove("selected"));
            this.classList.add("selected");
            selectedTime = this.innerText.trim();
            console.log(`Selected Time: ${selectedTime}`);
        });
    });

    // Handle amount selection
    moneyOptions.forEach(option => {
        option.addEventListener("click", function () {
            moneyOptions.forEach(item => item.classList.remove("selected"));
            this.classList.add("selected");
            selectedAmount = this.innerText.trim();
            customAmountInput.value = ""; // Clear custom input when a preset amount is selected
            console.log(`Selected Amount: ${selectedAmount}`);
        });
    });

    // Handle custom amount input
    customAmountInput.addEventListener("input", function () {
        moneyOptions.forEach(item => item.classList.remove("selected")); // Deselect all preset amounts
        selectedAmount = this.value ? `₹${this.value}` : null;
        console.log(`Custom Amount: ${selectedAmount}`);
    });

    // Handle Donate button click
    donateButton.addEventListener("click", function () {
        const name = document.querySelector("input[placeholder='Enter your name']").value;
        if (!name) {
            alert("Please enter your name.");
            return;
        }

        if (!selectedAmount || selectedAmount === "₹") {
            alert("Please select or enter an amount to donate.");
            return;
        }

        // Redirect to thank you page with data passed as URL parameters
        window.location.href = `thankyou.html?name=${encodeURIComponent(name)}&amount=${encodeURIComponent(selectedAmount)}&time=${encodeURIComponent(selectedTime)}`;
    });
});
