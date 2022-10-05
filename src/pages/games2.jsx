import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";



export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  
  
  const [game, setGame] = useState()
  
  function Cracker() {
    setGame("https://cracker-clicker.glitch.me/")
  }
  
  return (
    <>
      <iframe 
        style={{ position:"relative", top:"28px" }}
        src={game}   
        height="710"
        width="1300">
      </iframe>
      
      
      <table className="items">
        <tr>
          <th><div className="spot1"></div></th>
          <th><div className="spot2"><br/>&nbsp;&nbsp;Games</div></th>
        </tr>
        <tr>
          <th>
            <div className="main">
              <table style={{ padding:"10px" }}>
                <tr>
                  <th><button onClick={Cracker}><img style={{ width:'100px' }} src='https://cdn.glitch.global/eac1cd41-b4dd-4d36-92fc-23d0ffb87309/ezgif-4-9cff0cae74.gif?v=1664814669618'/><br/>Cracker Clicker</button></th>
                </tr>
                <tr>

                </tr>              
                <tr>

                </tr>
                <tr>

                </tr>
              </table>
            </div>
          </th>
          <th><div className="corner"></div></th>
        </tr>
      </table>
      <RemoveScrollBar/>
    </>
  );
}
