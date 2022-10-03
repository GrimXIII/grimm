import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
//import "../styles/test.css";
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";
import account from "../../database.json";


export default function Home() {  

  
  
  
  const [name, setName] = useState()
  const [pass, setPass] = useState()
  
  function name2() {
    if (cookies.Name) {
      return(cookies.Name)
    } else {
      return('Unknown')
    }
  }

  const [cookies, setCookie, removeCookie] = useCookies(["user"])
  
  
  return (
    
    <>
      <div style={{ border:"10px solid black", width:"1400px", height:"600px" }}>
        <p1 style={{ color:"#ff6700", padding:'20px', fontSize:'40px', fontFamily:"KH Men" }}>
          {name2()}
        </p1>
        <table>
          <tr>
            <th style={{ height:"500px", width:"200px" }}>
              <div className='accountBox'>
                Edit Name
              </div>
              <div className='accountBox'>
                Edit Password
              </div>
              <div className='accountBox'>
                Report Account
              </div>
              <div className='accountBox'>
                Report Bug
              </div>
              <div className='accountBox'>
                Request Feature
              </div>
              <div className='accountBox'>
                Delete Account
              </div>
            </th>
            <th>
              <div style={{ backgroundColor:"#ff6700", width:"10px", height:"500px" }}/>
            </th>
            <th>
              <div style={{ color:"#ff6700", width:"1100px", height:"10px", backgroundColor:'#ff6700' }}/>   
              <div style={{ height:"300px" }}>
                <div style={{ height:"100px" }}/>
                <table>
                  <tr>
                    <th style={{ padding:'25px' }}>
                      <p1>
                        Name:
                      </p1>
                      <br/>
                      <input onChange={(e) => setName(e.target.value)} />
                    </th>
                    <th style={{ padding:'25px' }}>
                      <p1>
                        Pass:
                      </p1>
                      <br/>
                      <input />
                    
                    </th>
                  </tr>
                </table>
              </div>
            </th>
          </tr>
        </table>
      </div>
    </>
  );
}
