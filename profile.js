import { collection, addDoc } from "firebase/firestore/lite"; 
import { db } from "./index.html"


const profile_form = document.getElementById("profile")

profile_form.addEventListener("submit", async (e) => {

    e.preventDefault()
    console.log("success")
    try {
    // const docRef = await addDoc(collection(db, "users"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    // });
    // console.log("Document written with ID: ", docRef.id);
        window.location.href = "/login.html"
    } catch (e) {
    console.error("Error adding document: ", e);
    }
})