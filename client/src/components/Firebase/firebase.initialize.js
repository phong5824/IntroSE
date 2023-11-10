import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from "./firebase.config";
// import  from "./firebase.config";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();

// // Get a list of cities from your database
// const db = getFirestore(app);
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
