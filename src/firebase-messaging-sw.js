importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyAlLutZzoUcVl2pPvSIaqP_Fq6m6uJMG8I",
    authDomain: "demomessage-85ce8.firebaseapp.com",
    projectId: "demomessage-85ce8",
    storageBucket: "demomessage-85ce8.appspot.com",
    messagingSenderId: "248537514274",
    appId: "1:248537514274:web:966aeb7da5e644f755257b",
    measurementId: "G-BDJW4D1FLP"
});
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(self.clients.openWindow(event.notification.data.url));
});
const messaging = firebase.messaging();