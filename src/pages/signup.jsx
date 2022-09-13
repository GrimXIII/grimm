/*

*/

import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";
import account from "../../database.json";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 

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
  
  const [input1, setInput1] = useState()
  const [input2, setInput2] = useState()
  const [bruh, setBruh] = useState(" ")
  

  
  async function setStuff() {

  }


  const usersRef = collection(db, "users");

  const [button, setButton] = useState()  
  async function create() {
    var name = input1
    var pass = input2
    await setDoc(doc(usersRef, input1), {
      name: 'name',
      pass: 'pass',
      status: "China"
      
    });
    
    
    window.location.replace("/")
  }
  
  async function retry() {
    setButton()
    setShit(
      <>
        <div style={{ height:"40px", textAlign:"center"}}>
          <b>Username</b>
        </div>
        <div>
          <input 
            style={{ borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px", padding:"2px" }}
            onChange={(e) => setInput1(e.target.value)}
            /><br/>
        </div>
      </>
    )
  }

  async function getData() {
    getDoc(doc(db, "users", input1)).then(docSnap => {
      if (docSnap.exists()) {
        setBruh("This is not available")
        setButton()
      } else {
        setBruh("This is available")
        setShit()
        setButton(
          <>
            <button onClick={retry} style={{ animation:button, borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px" }}>
              Retry?
            </button>
            <button onClick={password} style={{ animation:button, borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px" }}>
              Ready to type your password?
            </button>
          </>
        )
      }
    })
  }
  
  async function password() {
    setShit()
    setBruh()
    setButton(
      <>
        <div style={{ height:"40px", textAlign:"center"}}>
          <b>Password</b>
        </div>
        <div>
          <input 
            style={{ borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px", padding:"2px" }}
            onChange={(e) => setInput2(e.target.value)}
            /><br/>
        </div>
        <button onClick={create} style={{ animation:button, borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px" }}>
          Create account!
        </button>
      </>
    
    )
  }
  const [shit, setShit] = useState(
    <>
      <div style={{ height:"40px", textAlign:"center"}}>
        <b>Username</b>
      </div>
      <div>
        <input 
          style={{ borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px", padding:"2px" }}
          onChange={(e) => setInput1(e.target.value)}
          /><br/>
      </div>
    </>
  )
  
  
  
  return (
    <>
      <br/><br/><br/><br/><br/>    
      <table>
        <tr>
          <th>
            <div className="loginBox">
              <div style={{textAlign:"center"}}>
                <hed>
                  Sign Up
                </hed>
              </div>  
              <div style={{ width:"200px", height:"50px" }}></div>
                {shit}
              <div style={{ height:"40px"}}>
                <button onClick={getData} style={{ borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px" }}>
                  Check Availablity
                </button>
              </div>
              <p1 style={{}}>
                {bruh}
              </p1>
              <div style={{ height:"40px"}}>
                {button}
              </div>
            </div>
          </th>
        </tr>
      </table>
      {'' + input1 + ''}
      {input2}
    </>
  );
}
