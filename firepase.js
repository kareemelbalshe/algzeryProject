import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { collection, doc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const docRef = doc(db, "article", "zaOskqpNOBc7GmReb67f");

// Function to get document data
async function getDocumentData() {

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data()
      const article = document.getElementById("a")
      var result = Object.keys(data).map((key) => [key, data[key]]);
      console.log(result)
      result.map(element => {
        console.log(element)
        article.innerHTML += `
    <article>
            <img src="${element[1].img}" alt="" />
    
            <div class="info">
              <h3>${element[1].title}</h3>
              <p>
                ${element[1].dis}
              </p>
            </div>
          </article>
    `
      });
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
}

// Call the function to get document data
getDocumentData();

//      var docRef = db.collection("article").doc("zaOskqpNOBc7GmReb67f");

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });
