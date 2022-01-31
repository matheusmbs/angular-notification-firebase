importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDbd9mttAzUr2TyNDZM3WcN2NMJRgfJv10",
    authDomain: "signa-v2.firebaseapp.com",
    databaseURL: "https://signa-v2-default-rtdb.firebaseio.com",
    projectId: "signa-v2",
    storageBucket: "signa-v2.appspot.com",
    messagingSenderId: "995846966479",
    appId: "1:995846966479:web:eca671c73c81ab4475fbba",
    measurementId: "G-GZQ116MB3X",
});

const messaging = firebase.messaging();