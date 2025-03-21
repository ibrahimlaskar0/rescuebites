import { auth, db } from "./firebaaseapp.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore/lite";

const register_form = document.getElementById("register");

register_form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the default form submission

    let user_type = document.getElementById("type").value; // NGO or Restaurant
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let country = document.getElementById("country").value;
    let location = document.getElementById("location").value;

    console.log("Type:", user_type);
    console.log("Email:", email);
    console.log("Password:", password);

    // Sign up the user
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;

            console.log(user);

            // Store user details in Firestore
            await setDoc(doc(db, "users", user.uid), {
                user_type,  // Store NGO or Restaurant selection
                name,
                phone,
                country,
                location,
                email,
            });

            window.location.href = "/login.html";
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert("The account may already exist")
        });
});
