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
import { db } from "../app.jsx";

export default function Home() {  

  const [input1, setInput1] = useState()
  const [inputpass, setInputPass] = useState()
  const [bruh, setBruh] = useState(" ")
    useEffect(() => {
    reset()
    
    }, [input1, inputpass]);
  
  

  const usersRef = collection(db, "users");
  const [button, setButton] = useState()  
  async function create() {
    var name = `${input1}`
    var pass = `${inputpass}`
    await setDoc(doc(db, "users", name), {
      name: name,
      pass: pass,
      uno: 0,
      status: 'default'
    });
    window.location.replace("/")
  }

  const [but, setBut] = useState(              
    <button onClick={getData}>
      Check Availability
    </button>
  )

  function reset() {
    setBut(
    <button onClick={getData} style={{ backgroundColor:'white', borderRadius:'10px', border:'2px solid black', color:'black' }}>
      Check Availability
    </button>
    )
  }
  
  async function getData() {
    var name = `${input1}`
    getDoc(doc(db, "users", name)).then(docSnap => {
      if (docSnap.exists()) {
        setBruh(<>This is not available<br/></>)
      } else {
        setBruh(<>This is available<br/></>)
        setBut(
          <button onClick={create} style={{ backgroundColor:'white', borderRadius:'10px', border:'2px solid black', color:'lime' }}>
            Create Account
          </button>
        )
      }
    })
  }

  
  
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
              <div style={{ height:"40px", textAlign:"center"}}>
                <b>Username</b>
              </div>
              <div>
                <input 
                  style={{ borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px", padding:"2px" }}
                  onChange={(e) => setInput1(e.target.value)}
                  /><br/>
              </div>
              <div style={{ width:"200px", height:"50px" }}></div>
              <div style={{ height:"40px", textAlign:"center"}}>
                <b>Password</b>
              </div>
              <div>
                <input 
                  style={{ borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px", padding:"2px" }}
                  onChange={(e) => setInputPass(e.target.value)}
                  /><br/>
              </div>
              {bruh}
              {but}
            </div>
          </th>
        </tr>
      </table>
    </>
  );
}
