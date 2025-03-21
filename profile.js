import { doc, getDoc } from "firebase/firestore/lite"; 
import { db } from "./firebaaseapp.js";

const getData = async () => {
    let data;
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.uid) {
        console.error("No user found in localStorage.");
        return;
    }

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      data = docSnap.data();
      
      document.getElementById("name").innerText = data.name;  // Keep user's real name
      document.getElementById("type").innerText = data.user_type ? data.user_type.toUpperCase() : "N/A";  // Show NGO/Restaurant
      document.getElementById("email").innerText = user.email;
      document.getElementById("phone").innerText = data.phone;
      document.getElementById("location").innerText = data.location;
      document.getElementById("country").innerText = data.country;
    } else {
        console.log("No such document!");
        return;
    }
};


getData();
