import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
//import "../styles/test.css";
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";
import account from "../../database.json";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 



/*
https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0#web-version-9_6
https://console.firebase.google.com/u/0/project/grimmxiii-42de4/firestore/data/~2Fcities~2FSF
*/

export default function Home() {  
  const firebaseConfig = {
    apiKey: "AIzaSyCC_OX02mExz5aNaj4roF83f0sa5gUCA2c",
    authDomain: "grimmxiii-42de4.firebaseapp.com",
    projectId: "grimmxiii-42de4",
    storageBucket: "grimmxiii-42de4.appspot.com",
    messagingSenderId: "464467948445",
    appId: "1:464467948445:web:aceb7ffe11e52ca38cf574",
    measurementId: "G-DSMBMQG2JX"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  
  
  const [bruh, setBruh] = useState("test text")
  
  async function getData() {
    getDoc(doc(db, "cities", "DC")).then(docSnap => {
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        var data = docSnap.data();
        var state = data.state;
        var capital = data.capital;
        setBruh(state + " - " + capital)
      } else {
        console.log("No such document!");
        setBruh("This does not exist")
      }
    })
  }
  
  return (
    <>
      Sample Text
      <button onClick={getData}>Get Data</button>
      {bruh}
    </>
  );
}
