import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { doc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const docRef = doc(db, "article", "CYQvwXQqPc5gP0P7MGEi");

import { firebaseConfig } from "./firebaseConfig.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const articleRef = doc(db, "article", "zaOskqpNOBc7GmReb67f");
// Function to get document data
async function getArticleData() {


  try {
    const docSnap = await getDoc(articleRef);
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
getArticleData();



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






