import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { doc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { firebaseConfig } from "./firebaseConfig.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// change collection id as your account at firebase
const portfolioRef = doc(db, "portfolio", "7V7gYNlWdHNN2r7jrBO5");
// Function to get document data
async function getPortfolioData() {

  try {
    const docSnap = await getDoc(portfolioRef);
    if (docSnap.exists()) {
      const data = docSnap.data()
      const article = document.getElementById("p")
      var result = Object.keys(data).map((key) => [key, data[key]]);
      console.log(result)
      result.map(element => {
        console.log(element)
        article.innerHTML += `
        <div class="card">
        <img src="${element[1].img}" alt="" />
        <div class="info-card">
          <h3>${element[1].title}</h3>
          <p>
          ${element[1].dis}
          </p>
        </div>
      </div>
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
getPortfolioData();