// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: "aideation-yt.firebaseapp.com",
//   projectId: "aideation-yt",
//   storageBucket: "aideation-yt.appspot.com",
//   messagingSenderId: "962348384448",
//   appId: "1:962348384448:web:e02758407aba3258d5ad25",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);

// export async function uploadFileToFirebase(image_url: string, name: string) {
//   try {
//     const response = await fetch(image_url);
//     const buffer = await response.arrayBuffer();
//     const file_name = name.replace(" ", "") + Date.now + ".jpeg";
//     const storageRef = ref(storage, file_name);
//     await uploadBytes(storageRef, buffer, {
//       contentType: "image/jpeg",
//     });
//     const firebase_url = await getDownloadURL(storageRef);
//     return firebase_url;
//   } catch (error) {
//     console.error(error);
//   }
// }




// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 // apiKey: "AIzaSyC2gahramkVOorFC1X85leYyAxqoEm8YVs",
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "notionai-49a5b.firebaseapp.com",
  projectId: "notionai-49a5b",
  storageBucket: "notionai-49a5b.appspot.com",
  messagingSenderId: "378349056696",
  appId: "1:378349056696:web:cf13887f509c6e31597a4d",
  measurementId: "G-902Y8QWJ4R"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFileToFirebase(image_url: string, name: string) {
  try {
    const response = await fetch(image_url);
    const buffer = await response.arrayBuffer();
    const file_name = name.replace(" ", "") + Date.now + ".jpeg";
    const storageRef = ref(storage, file_name);
    await uploadBytes(storageRef, buffer, {
      contentType: "image/jpeg",
    });
    const firebase_url = await getDownloadURL(storageRef);
    return firebase_url;
  } catch (error) {
    console.error(error);
  }
}
