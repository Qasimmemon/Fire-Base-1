import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBwwuczW0LLhhP8A5f_4sliRkhq-E25AIQ",
  authDomain: "first-project-fe546.firebaseapp.com",
  projectId: "first-project-fe546",
  storageBucket: "first-project-fe546.appspot.com",
  messagingSenderId: "521320857220",
  appId: "1:521320857220:web:f2296527cedf7b68024cd1",
  measurementId: "G-GSCYXYFGX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
console.log("app-->", app);
console.log("auth-->", auth);
console.log("db", db);

const authentication = document.getElementById("authentication");
const signupemail = document.getElementById("signupemail");
const signuppassword = document.getElementById("signuppassword");
const signupBtn = document.getElementById("signupBtn");

// const = document.getElementById(").value;
const signinemail = document.getElementById("signinemail");
const signinpassword = document.getElementById("signinpassword");
const signinBtn = document.getElementById("signinBtn");

const content = document.getElementById("content");
const logoutUser = document.getElementById("logoutUser");
const showEmail = document.getElementById("showEmail");
const allusersdiv = document.getElementById("allusers");

signupBtn.addEventListener("click", signupUser);
logoutUser.addEventListener("click", logoutUsers);
signinBtn.addEventListener("click", signinUser);
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user id", uid);
    content.style.display = "block";
    authentication.style.display = "none";
    showEmail.innerHTML = `<p> welcome ${user.email} </p>`;
    getAllUsers();
  } else {
    console.log("user is not avalible");
    content.style.display = "none";
    authentication.style.display = "block";
  }
});
function signupUser() {
  const emailvalue = signupemail.value;
  const passwordvalue = signuppassword.value;
  createUserWithEmailAndPassword(auth, emailvalue, passwordvalue,)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user", user);
      addData(emailvalue, passwordvalue,);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage);
      // ..
    });
}
function signinUser() {
  signInWithEmailAndPassword(auth, signinemail.value, signinpassword.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("sign in error", errorMessage);
    });
}
function logoutUsers() {
    signOut(auth)
      .then(() => {
        alert("User signed out.");
        content.style.display = "none";
        authentication.style.display = "block";
      })
      .catch((error) => {
        console.error("Error signing out: ", error.message);
      });
  }
// alert.error(aa)
async function addData(email, pasword) {
  try {
    const userCollection = collection(db, "allusers");
    const userRef = await addDoc(userCollection, {
     
      email: email,
      pasword: pasword,
      created_at: new Date().getDate(),
    });
    console.log("Document written with ID: ", userRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
// 
const contentmy = document.getElementById('contentmy');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const btnmy = document.getElementById('btnmy');

btnmy.addEventListener('click', function() {
  let value1 = input1.value;
  let value2 = input2.value;
  let value3 = input3.value;
  
  // Validate input values
  if (!value1 || !value2 || !value3) { 
    alert('please fill out all fields!');
    return; // Exit if validation fails
  }

  let showResult = `
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4"  style="display: flex; ">
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
           
              <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${value3}" alt="blog">
              <div class="p-6">
               <p>Category:</p>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${value1}</h1>
                <p>Description</p>
                <p class="leading-relaxed mb-3">${value2}.</p>
                <div class="flex items-center flex-wrap">
                  <a class=" inline-flex items-center md:mb-2 lg:mb-0">Date:${new Date().toDateString()}
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  contentmy.innerHTML += showResult;
});


// function clear(){
//   value1 = ''
//   value2 =''
//   value3 = ''
// }






















































console.log('date',  new Date().toDateString())





let hsaa = document.getElementById('hsaa')
async function getAllUsers() {
  const userCollecton = collection(db, "allusers");
  const querySnapshot = await getDocs(userCollecton);
//   allusersdiv.innerHTML=''
  querySnapshot.forEach((user) => {
    // console.log(`${user.id} => ${user.data().email}`);
    var addusers = `<section class="text-gray-600 body-font" id=${user.id}>
  <div class="container px-5 py-24 mx-auto" id+"myDivide">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">User Email:${user.data().email}</h1>
         <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">User Password:${user.data().pasword}</h2>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>`;
// hsaa.innerHTML +=addusers
  });
}