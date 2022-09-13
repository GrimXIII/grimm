import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
//import "../styles/test.css";
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";
import account from "../../database.json";


export default function Home() {
  
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [name, setName] = useState(" ")
  const [pass, setPass] = useState(" ")
  const [anim, setAnim] = useState("gone 1s infinite")
  const [anim2, setAnim2] = useState("")
  const [anim3, setAnim3] = useState("")
  const [anim4, setAnim4] = useState("")
  const [anim5, setAnim5] = useState("")
  const [anim6, setAnim6] = useState("")
  const [anim7, setAnim7] = useState("")
  const [anim8, setAnim8] = useState("")
  const [wrong, setWrong] = useState("")
  const [place, setPlace] = useState("")

  
  //add usernames to this place thing omg stfu
  var usernames = ["Keegen", "Steven", "Cyrus", "Vaughn", "Damen", "Jennifer", "Bricen", "Larissa", "IGA", "TYRONE"];

  
function login() {
  //Help from StackOverFlow - https://stackoverflow.com/a/15818116/15437058
  for(var i = 0; i < usernames.length; i++) {
    if(usernames[i] == name) { 
      setPlace(name)
      animationsCool()
    }
    else if (!usernames[i] == name) {
      setAnim5("wrong 1s forwards")
    }
  }
}

function password() {
  if (pass === account[name].password) {
    setCookie("Name", name, { path:"/" });
    setCookie("Pass", password, { path: "/" });
    setAnim("fadeOut 1s forwards")
    setAnim2("nameText 1s forwards")
    setAnim6("right 3s forwards")
    setAnim7("left 3s forwards")
    setAnim8("ready 4s forwards")
  }
}
  
  
function animationsCool() {
    setAnim("fadeIn 1s forwards")
    setAnim2("passText 1s forwards")
    setAnim3("nameText 1s forwards")
    setAnim4("fadeOut 1s forwards")
}
  
function leave() {
  window.location.replace("/")
}
  
  
function guest() {
    setCookie("Name", 'Guest', { path:"/" });
    setCookie("Pass", 'guest_login', { path: "/" });
    window.location.replace("/")

}
  
function usernameForgor() {
  
  
}
  
function passwordForgor() {

    
}
  
  
  return (
    <>
      <br/><br/><br/><br/><br/>      
      <table>
        <tr>
          <th>
        <div className="loginBox" style={{ animation:anim6 }}>
        <div style={{ animation:anim3, textAlign:"center"}}><hed>Login</hed></div>    
        <div style={{ width:"200px", height:"50px" }}></div>
        <div style={{ animation:anim4, height:"40px"}}>
          Username
        </div>
        <div>
          <input 
            style={{ animation:anim4, borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px", padding:"2px" }}
            onChange={(e) => setName(e.target.value)}
            /><br/>
        </div>
        <div style={{ height:"40px"}}>
        <button onClick={login} style={{ animation:anim4, borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px" }}>Continue</button>
        </div>
        <div>
        <p1 style={{animation:anim4}}>
          -----------------------------
          </p1>
        </div>
        
        <div>
          <button onClick={usernameForgor} style={{ animation:anim4, borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px" }}>Forgot Username?</button><br/>
          <button onClick={guest} style={{ animation:anim4, borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px" }}>Sign In as Guest</button>
        </div>
      </div>
          
          </th>
          
          
          
          
          
          
          <th>
          <div style={{ transform:"translateY(-500px)" ,  width:"150px", height:"50px", backgroundColor:"white", borderRadius:"10px", animation:anim8}}>
            <p1>Ready?</p1><br/>
            <button style={{ backgroundColor:"white", borderRadius:"5px" }}  onClick={leave}>Yes!</button>
            </div>
          
          </th>
          
          
          
          
          
          
          <th>
      <div className="loginBox" style={{ animation:anim7 }}>
        <div style={{ animation:anim2, textAlign:"center", transform:"scale(2) translateY(100px)" }}><hed>Password</hed></div>    
        <div style={{ width:"200px", height:"50px" }}></div>
        <div style={{ animation:anim, height:"40px"}}>
          Password
        </div>
        <div>
          <input style={{ animation:anim, borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px", padding:"2px" }}
                onChange={(e) => setPass(e.target.value)}/><br/>
        </div>
        <div style={{ height:"40px"}}>
        <button onClick={password} style={{ animation:anim, borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px" }}>Login</button>
        </div>
        <div>
        <p1 style={{ animation:anim }}>
          -----------------------------
          </p1>
        </div>
        
        <div>
          <button onClick={passwordForgor} style={{ animation:anim, opacity:"0", borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px" }}>Forgot Password?</button><br/>
          <button onClick={guest} style={{ animation:anim, opacity:"0", borderRadius:"10px", backgroundColor:"white", border:"3px solid black", width:"300px" }}>Sign In as Guest</button>
        </div>
      </div>
          
          
          </th>
        </tr>
        
      </table>
      <RemoveScrollBar/>
    </>
  );
}
