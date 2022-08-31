import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
//import "../styles/test.css";
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";
import account from "../../database.json";

export default function Home() {
  
function redirect() {
  window.location.replace('mailto:diepiomaster3@gmail.com')
}

  
//https://github.com/eli-schwartz
function Eli() {
  window.location.replace('https://github.com/eli-schwartz')
}
//https://github.com/bartduisters
function Bart() {
  window.location.replace('https://github.com/bartduisters')
}
//https://github.com/WebDevSimplified
function Web() {
  window.location.replace('https://github.com/WebDevSimplified')
}
//https://github.com/ChawitO
function Cha() {
  window.location.replace('https://github.com/ChawitO')
}
//https://github.com/ihalseide
function Hal() {
  window.location.replace('https://github.com/ihalseide')
}
//https://github.com/kubowania
function Kubo() {
  window.location.replace('https://github.com/kubowania')
}
//https://github.com/mizanxali
function Mizan() {
  window.location.replace('https://github.com/mizanxali')
}
//https://github.com/nbarkhina
function Neil() {
  window.location.replace('https://github.com/nbarkhina')
}
//https://github.com/PaulCapron
function Paul() {
  window.location.replace('https://github.com/PaulCapron')
}
//https://github.com/mario1D240
function Sans() {
  window.location.replace('https://github.com/mario1D240')
}
  //https://github.com/hyzq
function hyz() {
  window.location.reaplce('https://github.com/hyzq')
}

  
  
  
  return (
    <>
      <h1>Alright, now the good stuff!</h1>
      <p1>Grimm.com was created by GrimmXIII (Keegen H) main email: <Link href="" onClick={redirect} style={{color:"orange"}}>diepiomaster3@gmail.com</Link></p1>
      <p1>Some aspects have been modified by JKD464 and Vaughan XV</p1>
      
      <br/><br/><br/><br/><br/>
      <table>
        <tr>
          <th>
            <div className="blogTop">
              <h1 className="blogTopTxt">Tetris.js</h1>
            </div>
            <div className="blogBot">
              <h1 className="blogBotTxt">
                This belongs to:
                <br/>
                Neil Barkhina <img onClick={Neil} className="blogImg" src="https://cdn.glitch.global/020e4c35-e18f-4e25-b020-427fd438bc72/25231%20(1).png?v=1661206367870"/><br/>
                Paul Capron <img onClick={Paul} className="blogImg" src="https://cdn.glitch.global/020e4c35-e18f-4e25-b020-427fd438bc72/25231%20(1).png?v=1661206367870"/>
              </h1>
            </div>
          </th>
          <th>
            <div className="blogTop">
              <h1 className="blogTopTxt">Wordle</h1>
            </div>
            <div className="blogBot">
              <h1 className="blogBotTxt">
                This belongs to:
                <br/>
                 WebDevSimplified <img onClick={Web} className="blogImg" src="https://cdn.glitch.global/020e4c35-e18f-4e25-b020-427fd438bc72/25231%20(1).png?v=1661206367870"/><br/>
                 Bart Duisters <img onClick={Bart} className="blogImg" src="https://cdn.glitch.global/020e4c35-e18f-4e25-b020-427fd438bc72/25231%20(1).png?v=1661206367870"/>
              </h1>
            </div>
          </th>
          <th>
            <div className="blogTop">
              <h1 className="blogTopTxt">Uno</h1>
            </div>
            <div className="blogBot">
              <h1 className="blogBotTxt">
                This belongs to:
                <br/>
                 Mizanxali <img onClick={Mizan} className="blogImg" src="https://cdn.glitch.global/020e4c35-e18f-4e25-b020-427fd438bc72/25231%20(1).png?v=1661206367870"/><br/>
              </h1>
            </div>
          </th>
        </tr>
        <tr>
          <th>
            <div className="blogTop">
              <h1 className="blogTopTxt">2048</h1>
            </div>
            <div className="blogBot">
              <h1 className="blogBotTxt">
                This belongs to:
                <br/>
                 Kubowania <img onClick={Kubo} className="blogImg" src="https://cdn.glitch.global/020e4c35-e18f-4e25-b020-427fd438bc72/25231%20(1).png?v=1661206367870"/><br/>
              </h1>
            </div>
          </th>
          <th>
            <div className="blogTop">
              <h1 className="blogTopTxt">Galaga</h1>
            </div>
            <div className="blogBot">
              <h1 className="blogBotTxt">
                This belongs to:
                <br/>
                 ihalseide <img onClick={Hal} className="blogImg" src="https://cdn.glitch.global/020e4c35-e18f-4e25-b020-427fd438bc72/25231%20(1).png?v=1661206367870"/><br/>
              </h1>
            </div>
          </th>
          <th>
            <div className="blogTop">
              <h1 className="blogTopTxt">Battleship</h1>
            </div>
            <div className="blogBot">
              <h1 className="blogBotTxt">
                This belongs to:
                <br/>
                 ChawitO <img onClick={Cha} className="blogImg" src="https://cdn.glitch.global/020e4c35-e18f-4e25-b020-427fd438bc72/25231%20(1).png?v=1661206367870"/><br/>
              </h1>
            </div>
          </th>
        </tr>
        <tr>
          <th>
            <div className="blogTop">
              <h1 className="blogTopTxt">Bad Time Sim</h1>
            </div>
            <div className="blogBot">
              <h1 className="blogBotTxt">
                This belongs to:
                <br/>
                 mario1D240 <img onClick={Sans} className="blogImg" src="https://cdn.glitch.global/020e4c35-e18f-4e25-b020-427fd438bc72/25231%20(1).png?v=1661206367870"/><br/>
                 hyzq <img onClick={hyz} className="blogImg" src="https://cdn.glitch.global/020e4c35-e18f-4e25-b020-427fd438bc72/25231%20(1).png?v=1661206367870"/><br/>
              </h1>
            </div>
          </th>
          <th>
            <div className="blogTop">
              <h1 className="blogTopTxt">Cookie Clicker</h1>
            </div>
            <div className="blogBot">
              <h1 className="blogBotTxt">
                This belongs to:
                <br/>
                 Eli Schwartz <img onClick={Eli} className="blogImg" src="https://cdn.glitch.global/020e4c35-e18f-4e25-b020-427fd438bc72/25231%20(1).png?v=1661206367870"/><br/>
              </h1>
            </div>
          </th>
        </tr>
      </table>
      <br/>
      <p1 style={{color:'orange'}}>
      I do not take any credit for anybodys work, I forked and cloned these so i have control over changing the domain if it ever tends to get blocked. If you want your stuff removed, feel free to email me and I will be more than happy to take it down. Have a nice day!
      </p1>

    </>
  );
}
