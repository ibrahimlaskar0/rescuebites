import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebaaseapp.js"

const login_form = document.getElementById("login")

login_form.addEventListener("submit", event => {
    event.preventDefault(); // Prevents the default form submission

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("Email:", email);
    console.log("Password:", password);

    // log in
    signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
        const user = userCredential.user;

        console.log(user)

        localStorage.setItem("user", JSON.stringify(user))
        
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef)
        const data = docSnap.data();

        localStorage.setItem("data", JSON.stringify(data))

        if(data.user_type === "restaurant")
        {
            window.location.href = "/restaurantadminpanel.html"
        } else 
        {
            window.location.href = "/loggedhome.html"
        }
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        // window.location.href = "/loggedhome.html"
        alert("Please check your email id or password")
        });

    // You can now send these values to a server or process them as needed
});