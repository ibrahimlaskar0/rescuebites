import { auth, db } from "./firebaaseapp.js"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore/lite";

const register_form = document.getElementById("register")

register_form.addEventListener("submit", event => {
    event.preventDefault(); // Prevents the default form submission

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value
    let country = document.getElementById("country").value
    let location = document.getElementById("location").value

    console.log("Email:", email);
    console.log("Password:", password);

    // sign in
    createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
        // Signed up 
        const user = userCredential.user;
        
        console.log(user)
        await setDoc(doc(db, "users", user.uid), {
            name,
            phone,
            country,
            location
        })

        window.location.href = "/login.html"

        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert("something went wrong, please try again")
        });
});