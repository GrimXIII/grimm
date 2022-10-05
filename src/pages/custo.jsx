import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
//import "../styles/test.css";
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";
import account from "../../database.json";



export default function Home() {
  useEffect(() => {

  },[])
  const [cookies, setCookie, removeCookie] = useCookies(["user"])
  const [colorH, setColorH] = useState()
  const [colorHText, setColorHText] = useState()
  
  function colors() {
    if (cookies.colorH) {
      setColorH('' + cookies.colorH + '')
    }
  }
  
  function setCookieH() {
    setCookie('colorH', colorHText, { path: '/'})
    window.location.replace('/')

  }

  
  
  
  return (
    <>
      <table>
        <tr>
          <th>
            <input id='amongus' onChange={(e) => setColorHText(e.target.value)}/>
            <button onClick={setCookieH}>This is a button</button>
            {colorHText}
          </th>
          <th>
            <h1 style={{color:colorH}}>This is a title</h1>

            
            <div className="blogTop">adf</div>
            <div className="blogBot">adf</div>
          
          </th>
        </tr>
      </table>
    </>
  );
}
