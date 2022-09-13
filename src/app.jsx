import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";
import { useCookies } from "react-cookie";
import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import Seo from './components/seo.jsx';
import ReactDOM from 'react-dom';
import database from "../database.json"

  class Clock extends React.Component {constructor(props) {super(props);this.state = {time: new Date()}}componentDidMount() {setInterval(this.update, 1000)}render() {const h = this.state.time.getHours();const m = this.state.time.getMinutes();const s = this.state.time.getSeconds();return (<p1>{h % 12}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)} {h < 12 ? 'AM' : 'PM'}</p1>);ReactDOM.render(<Clock />, document.getElementById('mount'))}}


export default function Home() {
  useEffect(() => {
    begin()
    begin2()
  }, []);
  
  const [anim, setAnim] = useState("popUp .0000000001s forwards")
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [ass, setAss] = useState("dude")
  const [title, setTitle] = useState(" ")
  const [text, setText] = useState(" ")
  const [custoBut, setCustoBut] = useState(
  <div className="dropdown1">
    <img onClick={custo} style={{ width:"48px" }} className="imgHov" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/custo.png?v=1655324568790"/>
  </div>
  )



  function profile() {
    setAnim("popDown 1s forwards")
    setAss("dudeStop")
    setTitle(cookies.Name)
    setText(
      <>
        {database[cookies.Name].uno} Wins in Uno <br/>
        {database[cookies.Name].unoFlip} Wins in Uno Flip <br/>
        {database[cookies.Name].uno50} Wins in Uno 50 <br/>
        {database[cookies.Name].unoDare} Wins in Uno Dare <br/>
        {database[cookies.Name].unoAllWild} Wins in Uno All Wild<br/>
        {database[cookies.Name].dos} Wins in Dos <br/>
        {database[cookies.Name].unoOnline} Wins in Uno Online <br/>
        {database[cookies.Name].tetris} in Tetris
      </>        
     )
  }

  function custo() {
    if ((database[cookies.Name].level - "") < 10) {
      setAnim("popDown 1s forwards")
      setAss("dudeStop")
      setTitle("Level too low!")
      setText(
        <>You are going to need to level up<br/>
        to level 10 to unlock this feature!<br/>**THIS FEATURE IS NOT RELEASED YET**<br/> You are currently at level {database[cookies.Name].level} 
        </>)
      
    }
    else if ((database[cookies.Name].level - "") >= 10) {
      setAnim("popDown 1s forwards")
      setAss("dudeStop")
      setTitle("Almost There!")
      setText(
        <>
        Congrats! you have hit level 10!<br/>Saddly though, this feature has not been released yet.<br/>But when it is, you will have access! 
        </>)
    }
  }
  
  function achive() {
    setAnim("popDown 1s forwards")
    setAss("dudeStop")
    setTitle("Whups!")
    setText(
      <>
      Achivements are still being worked on...<br/>Hang tight while I get them out!
      </>)
  }
  
  function hide() {
    setAnim("popUp 1s forwards")
    setAss("dude")
  }

  
const [stuff, setStuff] = useState()

  function logout() {
    removeCookie("Name")
    window.location.replace("/")
  }

const [admin, setAdmin] = useState(
      <>
        <Link href="/admin">
          <img className="imgHov" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/admin.png?v=1656484386951" style={{ width:"48px" }}/>
        </Link>
      </>
)

const [code, setCode] = useState(
      <>
        <Link href="/edit">
          <img className="imgHov" src="https://cdn.glitch.global/eac1cd41-b4dd-4d36-92fc-23d0ffb87309/code.png?v=1662087646732" style={{ width:"48px" }}/>
        </Link>
      </>
)
  


function begin2() {
  if (!cookies.Name) {
    setAdmin()
    setCode()
  }
  else if (database[cookies.Name].status === "Regular") {
    setAdmin()
  }
  else if (database[cookies.Name].domain === "false") {
    setCode(<></>)
  }
  else if (database[cookies.Name].level >= 10) {
    setCustoBut(
      <div className="dropdown1">
        <Link href="/games"><img style={{ width:"48px" }} className="imgHov" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/custo.png?v=1655324568790"/></Link>
      </div>
    )
    
  }
}
  
  
  
function begin() {    
  if (cookies.Name) {
      setStuff(
      <>
        <br />
        <br />
        <div style={{ width:"600px" }}>          
          {/* Profile */}
          <div className="dropdown1">
              <img style={{ width:"48px" }} className="imgHov" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/account.png?v=1655317139708"/>
            <div
              style={{ width: "500px", height: "500px", padding: "10px" }}
              className="dropdown1-content dropdown-contentLeft">
              <table
                className="table1"
                style={{ border: "transparent", width: "500px", left: "20px" }}>
                <tr>
                  <th style={{ float: "left" }}>{cookies.Name}</th>
                </tr>
                <tr>
                  <th style={{ float: "left" }}>{cookies.Status}</th>
                </tr>
                {}
                <tr className="trb">
                  <a
                    style={{ float: "left", color: cookies.ColorT, width: "475px", }} onClick={profile} className="btn--remix pulse"> 
                    Profile
                  </a>
                </tr>
                <tr className="trb">
                  <Link
                    style={{ float: "left", color: cookies.ColorT, width: "475px", }} className="btn--remix pulse" href="/deep"> 
                    Deep User Settings
                  </Link>
                </tr>
              </table>
            </div>
          </div>
          
          {/* Menu */}
          <div className="dropdown1">
              <img style={{ width:"48px" }} className="imgHov" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/menu.png?v=1655318018371"/>
            <div
              style={{ width: "500px", height: "500px", padding: "10px" }}
              className="dropdown1-content dropdown-contentLeft">
              <table
                className="table1"
                style={{ border: "transparent", width: "500px", left: "20px" }}>
                <tr className="trb">
                  <Link
                    style={{
                      float: "left",
                      color: cookies.ColorT,
                      width: "475px",
                    }}
                    href="/"
                    className="btn--remix pulse">
                    Home
                  </Link>
                </tr>
                <tr className="trb">
                  <Link
                    style={{
                      float: "left",
                      color: cookies.ColorT,
                      width: "475px",
                    }}
                    href="/games"
                    className="btn--remix pulse">
                    Games
                  </Link>
                </tr>
              </table>
            </div>
          </div>
          
          {/* Doogle */}
          <div className="dropdown1">
            <img style={{ width:"48px" }} className="imgHov" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/D.png?v=1655443049129"/>
            <div
              style={{ width: "500px", height: "500px", padding: "10px" }}
              className="dropdown1-content dropdown-contentLeft">
              <table className="table1" style={{ border: "transparent", width: "500px", left: "20px" }}>
                <tr className="trb">
                  <Link
                    style={{ float: "left", color: cookies.ColorT, width: "475px", }} className="btn--remix pulse" href="/doogle"> 
                    Doogle Search
                  </Link>
                </tr>
                <tr className="trb">
                  <Link
                    style={{ float: "left", color: cookies.ColorT, width: "475px", }} className="btn--remix pulse" href="/doogleForms"> 
                    Doogle Forms
                  </Link>
                </tr>
                <tr className="trb">
                  <Link
                    style={{ float: "left", color: cookies.ColorT, width: "475px", }} className="btn--remix pulse" href="/doogleDocs"> 
                    Doogle Docs
                  </Link>
                </tr>
                <tr className="trb">
                  <Link
                    style={{ float: "left", color: cookies.ColorT, width: "475px", }} className="btn--remix pulse" href="/doogleContacts"> 
                    Doogle Contacts
                  </Link>
                </tr>
                <tr className="trb">
                  <Link
                    style={{ float: "left", color: cookies.ColorT, width: "475px", }} className="btn--remix pulse" href="/doogleTube"> 
                    DooTube
                  </Link>
                </tr>
                <tr>
                  <Link
                    style={{ float: "left", color: cookies.ColorT, width: "475px", }} className="btn--remix pulse" href="/doogleDomain"> 
                    Doogle Domains
                  </Link>
                </tr>
                <tr>
                  <Link
                    style={{ float: "left", color: cookies.ColorT, width: "475px", }} className="btn--remix pulse" href="/doogleApps"> 
                    Doogle Apps
                  </Link>
                </tr>
                <tr>
                  <Link
                    style={{ float: "left", color: cookies.ColorT, width: "475px", }} className="btn--remix pulse" href="/doogleNews"> 
                    Doogle News
                  </Link>
                </tr>
              </table>
            </div>
          </div>
          
          {/* Leaderboard */}
          <div className="dropdown1">
            <Link href="/leader"><img onClick={custo} style={{ width:"48px" }} className="imgHov" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/leader.png?v=1655798436916"/></Link>
          </div>
          
          {/* Custo */}
          {custoBut}
          
          {/* Achivements */}
          <div className="dropdown1">
            <img onClick={achive} style={{ width:"48px" }} className="imgHov" src="https://cdn.glitch.global/eac1cd41-b4dd-4d36-92fc-23d0ffb87309/medal.png?v=1662003057200"/>
          </div>
          
          {/* Info */}
          <div className="dropdown1">
            <Link href="/info"><img style={{ width:"48px" }} className="imgHov" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/i.png?v=1655833777099"/></Link>
          </div>
          
          {admin}
          
          {code}
          
          {/* Logout */}
          <div className="dropdown1">
            <img onClick={logout} style={{ width:"48px" }} className="imgHov" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/logout.png?v=1655324808740"/>
          </div>
          
          {/* Mail */}
          <div className="dropdown1">
              <img style={{ width:"48px" }} className="imgHov" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/mail.png?v=1655325077952"/>
            <div
              style={{ width: "1220px", height: "450px" }}
              left="-200px"
              className="dropdown1-content dropdown-contentLeft">
              <a style={{ color: cookies.ColorA, fontsize: "10px" }}>
                From GrimmXIII
                <br />
                <br />
                Yaaaay, school is back (sarchasm). I hope yall are ready for 2022/23s updates!
                <br />
                right now, my main goal is to add a chatting system, lets hope it works.
                <br />
                also, NEW DOMAIN! type "grimm.pw" and BOOM!
              </a>
              <a style={{ color: cookies.ColorA, fontsize: "10px" }}>
                From GrimmXIII
                <br />
                <br />
                This will be the last big update. School is almost over, but
                <br />
                there will still be updates during the summer. But as of right
                <br />
                now, no more updates. Have an awesome summer everybody!
              </a>
              <a style={{ color: cookies.ColorA, fontsize: "10px" }}>
                From GrimmXIII
                <br />
                <br />
                Profile pictures are also a thing, email me a photo that you want
                <br />
                to set as your pfp
              </a>
            </div>
          </div>
        </div>
      </>
      );
  } else if (!cookies.Name) {
    setStuff(
      <div className="btn--login">
          <div className="dropdown1">{}</div>

          <br />
          <br />

          <div className="dropdown1">
              <img style={{ width:"48px" }} className="imgHov" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/menu.png?v=1655318018371"/>
            <div
              style={{ width: "500px", height: "500px", padding: "10px" }}
              className="dropdown1-content dropdown-contentLeft">
              <table
                className="table1"
                style={{ border: "transparent", width: "500px", left: "20px" }}>
                <tr className="trb">
                  <Link
                    style={{
                      float: "left",
                      color: cookies.ColorT,
                      width: "475px",
                    }}
                    href="/"
                    className="btn--remix pulse">
                    Home
                  </Link>
                </tr>
                <tr className="trb">
                  <Link
                    style={{
                      float: "left",
                      color: cookies.ColorT,
                      width: "475px",
                    }}
                    href="/games"
                    className="btn--remix pulse">
                    Games
                  </Link>
                </tr>
                <tr className="trb">
                  <Link
                    style={{
                      float: "left",
                      color: cookies.ColorT,
                      width: "475px",
                    }}
                    href="/leader"
                    className="btn--remix pulse">
                    Leaderboard
                  </Link>
                </tr>
                <tr className="trb">
                  <Link
                    style={{
                      float: "left",
                      color: cookies.ColorT,
                      width: "475px",
                    }}
                    href="/blog"
                    className="btn--remix pulse">
                    Posts
                  </Link>
                </tr>
                <tr className="trb">
                  <Link
                    style={{
                      float: "left",
                      color: cookies.ColorT,
                      width: "119px",
                      borderRadius: "10px 0px 0px 10px",
                      fontSize: "13px",
                    }}
                    href="/doogle"
                    className="btn--remix pulse">
                    Doogle
                  </Link>
                  <Link
                    style={{
                      float: "left",
                      color: cookies.ColorT,
                      width: "119px",
                      borderRadius: "0px 0px 0px 0px",
                      fontSize: "13px"
                    }}
                    href="/doogle-docs"
                    className="btn--remix pulse">
                    Doogle Docs
                  </Link>
                  <Link
                    style={{
                      float: "left",
                      color: cookies.ColorT,
                      width: "119px",
                      borderRadius: "0px 0px 0px 0px",
                      fontSize: "13px",
                    }}
                    href="/doogle-forms"
                    className="btn--remix pulse">
                    Doogle Forms
                  </Link>
                  <Link
                    style={{
                      float: "left",
                      color: cookies.ColorT,
                      width: "119px",
                      borderRadius: "0px 10px 10px 0px",
                      fontSize: "13px",
                    }}
                    href="/doogle-contacts"
                    className="btn--remix pulse">
                    Doogle Contacts
                  </Link>
                </tr>
                <tr className="trb">
                  <Link
                    style={{
                      float: "left",
                      color: cookies.ColorT,
                      width: "475px",
                    }}
                    href="/links"
                    className="btn--remix pulse">
                    Links
                  </Link>
                </tr>
              </table>
            </div>
        </div>
          <div className="dropdown1">
            <Link href="/login"><img href="/login" style={{ width:"48px", transform:"rotate(90deg)" }} className="imgHovLogin" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/logout.png?v=1655324808740"/></Link>
          </div>

          <div className="dropdown1">
              <img style={{ width:"48px" }} className="imgHov" src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/mail.png?v=1655325077952"/>
            <div
              style={{ width: "1220px", height: "450px" }}
              left="-200px"
              className="dropdown1-content dropdown-contentLeft">
              <a style={{ color: cookies.ColorA, fontsize: "10px" }}>
                From GrimmXIII
                <br />
                <br />
                Yaaaay, school is back (sarchasm). I hope yall are ready for 2022/23s updates!
                <br />
                right now, my main goal is to add a chatting system, lets hope it works.
                <br />
                also, NEW DOMAIN! type "grimm.pw" and BOOM!
              </a>
              <a style={{ color: cookies.ColorA, fontsize: "10px" }}>
                From GrimmXIII
                <br />
                <br />
                This will be the last big update. School is almost over, but
                <br />
                there will still be updates during the summer. But as of right
                <br />
                now, no more updates. Have an awesome summer everybody!
              </a>
              <a style={{ color: cookies.ColorA, fontsize: "10px" }}>
                From GrimmXIII
                <br />
                <br />
                Profile pictures are also a thing, email me a photo that you want
                <br />
                to set as your pfp
              </a>
              <a style={{ color: cookies.ColorA, fontsize: "10px" }}>
                From GrimmXIII
                <br />
                <br />
                Doogle contacts is now a thing! if you want to add any addition
                info <br />
                (by that I only mean your email) then let me know
              </a>
            </div>
          </div>
        </div>
    )
    if (cookies.Name) {
      setStuff2(<>Level:{database[cookies.Name].level} | {database[cookies.Name].xp}/100 XP</>)
      setStuff2(
         <a style={{fontSize:"25px"}}>Level:{database[cookies.Name].level} | {database[cookies.Name].xp}/100 XP</a>
      )
    } else if (!cookies.Name) {
      setStuff2()
      setStuff2(
      )
    }
    
  }
}

const [stuff2, setStuff2] = useState()
  

  
  return (
    <Router>
      <Seo />
      <div className={`topShit ${ass}`}>
        <div className="dudeGoUpGodDamn" style={{ float:"right" }} >
          <table style={{ width:"1450px", transform:"translateY(-2px)" }}>
            <tr style={{ height:"10px" }}>
              <th>{stuff2}</th>
              <th style={{ textAlign:"left", fontSize:"50px", width:"1100px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cookies.Name}&nbsp;
                <a style={{fontSize:"25px"}}>{stuff2}</a>
                <a style={{fontSize:"25px"}}></a>
              </th>
              <th>{stuff}</th>
            </tr>
          </table>
          <p1 className="diss" style={{ transform:"translateY(0px)" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hover up here to show Menu</p1>
        </div>
        <br/>
      <div className="pops" style={{ backgroundColor:"#ff6700", animation:anim, border:"10px solid black" }}>
          <img onClick={hide} style={{ width:"50px", transform:"translateY(-125px) translateX(875px)"}} src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/cross.png?v=1655441920112"/>
          <div>
            <h1 style={{ color:"black", fontSize:"50px", transform:"translateY(-125px) translateX(10px)"}}>{title}</h1>
            <h1 style={{ color:"black", fontSize:"15px", transform:"translateY(-75px) translateX(10px)"}}>{text}</h1>
          </div>
       </div>
      </div>
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div> 
      </main>
      
      

    </Router>
  );
}



 /*
       <footer className="footer">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/about">About</Link>
        </div>
      </footer>
 */
