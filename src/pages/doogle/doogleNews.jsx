import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";


export default function Home() {
  
  
  const [art, setArt] = useState(
      <> 
      <button onClick={news1} className="news">
        <h1 className="newsTitle">among us</h1>
        <p1 className="newsText">So what is the deal with the airline peanuts I mean when you think about it</p1>
      </button>
    </>
  )
  
  const [stuff, setStuff] = useState (art)

  
  function back() {
    setStuff(art)
  }
  
  
  function news1() {
    setStuff(
      <>
        <button onClick={back} style={{ backgroundColor:"orange", border:"3px solid black", borderRadius:"2px", padding:"5px", fontSize:"25px"}}>Back</button>
        <h1 className="artTitle">dude</h1>
        <p1 className="artText">this shit is so dope</p1>
        
      </>
    )
  }
  
  
  
  
  return (
    <> 
      {stuff}
    </>
  );
}
