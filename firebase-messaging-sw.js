importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


  const firebaseConfig = {
  apiKey: "AIzaSyBa9UCDK9MZCrL9421K2-fyzDdN5yF6dmE",
  authDomain: "webnotificationsample-74039.firebaseapp.com",
  projectId: "webnotificationsample-74039",
  storageBucket: "webnotificationsample-74039.appspot.com",
  messagingSenderId: "322367760621",
  appId: "1:322367760621:web:eecdb8dbfaaeaeb122c4e4",
  measurementId: "G-29N392DR0G"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Optional: Add additional messaging handling here if needed

self.addEventListener('notificationclick', (event) => {
  console.log("clicked");
});
