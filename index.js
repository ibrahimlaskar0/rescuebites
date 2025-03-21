import { db } from "./firebaaseapp.js"
import { getDocs, query, where, collection} from "firebase/firestore/lite"

async function getAllData()
{
    const restaurantq = query(collection(db, "users"), where("user_type", "==", "restaurant"));
    const restaurantSnapshot = await getDocs(restaurantq)
    const restaurantSize = restaurantSnapshot.size

    let mealsDonated = 0

    restaurantSnapshot.forEach(doc =>
    {
        const data = doc.data()
        const donation = data.donations?.length || 0
        mealsDonated += donation
    })

    const ngoq = query(collection(db, "users"), where("user_type", "==", "ngo"));
    const ngoSnapshot = await getDocs(ngoq)
    const ngosize = ngoSnapshot.size

    document.getElementById("meals").innerText = `${mealsDonated}`
    document.getElementById("donor").innerText = `${restaurantSize}`
    document.getElementById("ngos").innerText = `${ngosize}`
}

getAllData()
