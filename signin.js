import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./index.js"

const signin_form = document.getElementById("signin")

signin_form.addEventListener("submit", event => {
    event.preventDefault(); // Prevents the default form submission

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("Email:", email);
    console.log("Password:", password);

    // sign in
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
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