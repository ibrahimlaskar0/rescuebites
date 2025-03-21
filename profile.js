import { doc, getDoc } from "firebase/firestore/lite"; 
import { db } from "./firebaaseapp.js"

const getData = async() =>
{
    let data
    const user = JSON.parse(localStorage.getItem("user"))

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      data = docSnap.data();
      
      document.getElementById("name").innerText = data.name
      document.getElementById("email").innerText = user.email
      document.getElementById("phone").innerText = data.phone
      document.getElementById("location").innerText = data.location
      document.getElementById("country").innerText = data.country
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }


}

getData()