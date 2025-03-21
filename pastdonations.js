import { db } from "./firebaaseapp.js"
import { doc, getDoc } from "firebase/firestore/lite"



async function getDonations()
{
    const history = document.getElementById("history")

    
    const user = JSON.parse(localStorage.getItem("user"))
    const docRef = doc(db, "users", user.uid)
    const docSnap = await getDoc(docRef);
    const data = docSnap.data()
    
    const allDonations = data.donations || []

    allDonations.forEach(donation => {

        history.innerHTML += `
        <tr>
                <td>${donation.foodItem}</td>
                <td>${donation.quantity}</td>
                <td>${donation.location}</td>
                <td>${donation.pincode}</td>
        </tr>
        `

    })
}

getDonations()
