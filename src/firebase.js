import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCnpoS9NvAx4Xdx5B8UhQDaPLd-zpgzoQo",
    authDomain: "svelte-practice-7a090.firebaseapp.com",
    databaseURL: "https://svelte-practice-7a090.firebaseio.com",
    projectId: "svelte-practice-7a090",
    storageBucket: "svelte-practice-7a090.appspot.com",
    messagingSenderId: "537685114196",
    appId: "1:537685114196:web:b56571c6f1ce963f261cc1",
    measurementId: "G-SWN157LPGV"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export function getUser(){
    auth.onAuthStateChanged( u => {
        return u;
    });
}