import { auth } from "./index.js"
import { createUserWithEmailAndPassword } from "firebase/auth";

const register_form = document.getElementById("register")

register_form.addEventListener("submit", event => {
    event.preventDefault(); // Prevents the default form submission

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("Email:", email);
    console.log("Password:", password);

    // sign in
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)

        window.location.href = "/profile.html"

        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        });
});