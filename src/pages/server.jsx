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

  
  
  
async function check() {
  if (t === false) {
    setA("Connecting...")
    getDoc(doc(db, "state", `state`)).then(docSnap => {
      if (docSnap.exists()) {
        setColor('lime')
        setA("The server is online!")
      } else {
        setColor('red')
        setA("There was an error when attempting to connect!")
      }
    })    
  setT(true)
  }
}
  
  const [a, setA] = useState(" ")
  const [t, setT] = useState(false)
  const [color, setColor] = useState('yellow')
  const [t1, setT1] = useState()
  const [t2, setT2] = useState()
  
  
  return (
    <>
      <div style={{ width:'500px', height:'300px', backgroundColor:'#ff6700', borderRadius:'25px' }}>
        <img src='https://cdn.glitch.global/eac1cd41-b4dd-4d36-92fc-23d0ffb87309/Untitled.png?v=1664385485970' style={{padding:'10px'}}/>
        <h1 style={{ color:'black', fontSize:'25px', padding:'10px' }}>Server Status</h1>
        <div style={{ padding:'10px' }}>
          <div style={{ backgroundColor:color, width:'35px', height:'35px', borderRadius:'35px', padding:'10px'}} />
        </div>
        <div style={{ height:'10px', padding:'10px'}}>
          {a}
        </div>
        <div style={{ padding:'10px' }}>
          <br/><button onClick={check} style={{ backgroundColor:'#ff6700', border:'1px solid black', borderRadius:'10px' }}>Check Server Status</button>
        </div>
      
      </div>
      
      
      
      
      
    </>
  );
}
