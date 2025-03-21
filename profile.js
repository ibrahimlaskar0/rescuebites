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
<<<<<<< HEAD
      data = docSnap.data();
      
      document.getElementById("name").innerText = data.name
      document.getElementById("email").innerText = user.email
      document.getElementById("phone").innerText = data.phone
      document.getElementById("location").innerText = data.location
      document.getElementById("country").innerText = data.country
=======
        data = docSnap.data();
>>>>>>> bd8882f (ok ji)
    } else {
        console.log("No such document!");
        return;
    }

<<<<<<< HEAD
=======
    // Keep original name, only change the type
    document.getElementById("name").innerText = data.name;  // Keep user's real name
    document.getElementById("type").innerText = data.type ? data.type.toUpperCase() : "N/A";  // Show NGO/Restaurant
    document.getElementById("email").innerText = user.email;
    document.getElementById("phone").innerText = data.phone;
    document.getElementById("location").innerText = data.location;
    document.getElementById("country").innerText = data.country;
};
>>>>>>> bd8882f (ok ji)

getData();
