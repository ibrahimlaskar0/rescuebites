import { db } from "./firebaaseapp.js"
import { getDocs, query, where, collection} from "firebase/firestore/lite"

async function getAllData()
{
    const mealsq = query(collection(db, "users"), where("user_type", "==", "restaurant"));
    const mealsSnapshot = await getDocs(mealsq);
    // mealsSnapshot.reduce(() => ,)
}
