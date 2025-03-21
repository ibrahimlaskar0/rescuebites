import { db } from "./firebaaseapp.js"
import { getDocs, collection, where, query } from "firebase/firestore/lite"

async function getAllRestaurants()
{
    const list = document.getElementById("list")

    const q = query(collection(db, "users"), where("user_type", "==", "restaurant"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data()
        const donations = data.donations
        let firsttime = true;

        donations?.forEach(donation => {
            let tdname = firsttime ? `<th rowspan=${donations.length}>${data.name}</th>` : ""

            list.innerHTML += `
            <tr>
                ${tdname}
                <th>${donation.foodItem}</th>
                <th>${donation.quantity}</th>
                <th>${donation.location}</th>
                <th>${donation.pincode}</th>
            </tr>
            `
            firsttime = false
        })
      });

    
      
}

getAllRestaurants()