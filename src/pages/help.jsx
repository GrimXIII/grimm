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
      <h1>How to use this site?</h1>
      <p1>I get that using this can be difficult, so until I make a good help page, this is where you can come for help</p1>
      
      <div className='helpDiv'>
        <h1 className='helpTit'>The bar on top</h1>
        <p1 className='helpTxt'>
          If you hover your mouse to the top of the site, you will see a bar appear with a few icons laying inside of it.<br/>
          The bar will look different depending on if you are logged in or not.
        </p1>
      </div>
      <br/>
      <p1 className='helpTxt'>
        If you are logged out...
      </p1>
      <div className='helpDiv'>
        <img className='helpImg' src='https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/menu.png?v=1655318018371'/>
        <h1 className='helpTit'>The menu button</h1>
        <p1 className='helpTxt'>
          The menu button can bring you to the "Games" page, or back to the homescreen
        </p1>
      </div>
      
      <div>
        <img className='helpImg' src=''/>
        <h1 className='helpTit'></h1>
        <p1 className='helpTxt'>
          This button brings you to the login page. You can sign in as a gues, create an account, and of course, login.
        </p1>
      </div>
      
      <br/>
      
      <div className='helpDiv'>
        <img className='helpImg' src=''/>
      </div>
    </>
  );
}
