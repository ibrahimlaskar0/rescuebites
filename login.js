import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./index.js"

const login_form = document.getElementById("login")

login_form.addEventListener("submit", event => {
    event.preventDefault(); // Prevents the default form submission

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("Email:", email);
    console.log("Password:", password);

    // log in
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        });

    // You can now send these values to a server or process them as needed
});