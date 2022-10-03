import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
//import "../styles/test.css";
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";
import account from "../../database.json";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore"; 
import { db } from '../app.jsx'


/*
https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0#web-version-9_6
https://console.firebase.google.com/u/0/project/grimmxiii-42de4/firestore/data/~2Fcities~2FSF
*/

export default function Home() {  
  
  function test() {
    const querySnapshot = getDocs(collection(db, "cities"));
      querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }
  
  
  
    async function create() {
    await setDoc(doc(db, "state", 'state'), {
      state: 'online',
    });
  }
  
  
  return (
    <>
      <button onClick={create}>Get Data</button>
    </>
  );
}
