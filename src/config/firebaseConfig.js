import firebase from 'firebase';

const fbConfig = {
    apiKey: "AIzaSyAwZ872n3d_UaO2EzeE0CMY4OmeOs3WaOs",
    authDomain: "shoutout-clone-web.firebaseapp.com",
    projectId: "shoutout-clone-web",
    storageBucket: "shoutout-clone-web.appspot.com",
    messagingSenderId: "714849595168",
    appId: "1:714849595168:web:0dcebfc28ba36a2d7f3145",
    measurementId: "G-0K4ZV85Q1R"
};

firebase.initializeApp(fbConfig);
firebase.analytics();
export const firestore = firebase.firestore();

export default firebase;
