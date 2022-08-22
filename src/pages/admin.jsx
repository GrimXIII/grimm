import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";
import account from "../../database.json";


export default function Home() {
  useEffect(() => {
    check()
  }, []);
  
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [content, setContent] = useState()
  const [one, setOne] = useState()
  const [two, setTwo] = useState()
  
  function oneF() {
    setCookie("Name", one, { path: "/" })
    window.location.replace("/admin")
  }
  
  function twoF() {
    setCookie("Status", two, { path: "/" })
    window.location.replace("/admin")
  }
  
  function check() {
    if (!cookies.Name) {
      window.location.replace("/")
    }
    else if (account[cookies.Name].status === "Regular") {
      window.location.replace("/")
    }
    else {
      setContent(
        <>
          <div style={{width:"1000px", height:"500px", backgroundColor:"orange", borderRadius:"5px", padding:"10px"}}>
            Hey, your an admin!
            <br/>
            <br/>
            <p1 style={{color:"black", fontSize:"25px"}}>
              Cookie Changer (Warning!, this could crash your grimm client)&nbsp;
            </p1>
            <br/>
            <p1>
              Make sure to also press the update button before pressing "Change Cookie"
            </p1>
            <br/>
            <p1>Name&nbsp;</p1><input onChange={(e) => setOne(e.target.value)}></input>&nbsp;<button onClick={oneF}>Change Cookie</button><p1>&nbsp;Your Value: {cookies.Name} - New Value: {one}</p1><br/>
            <p1>Status&nbsp;</p1><input onChange={(e) => setTwo(e.target.value)}></input>&nbsp;<button onClick={twoF}>Change Cookie</button><p1>&nbsp;Your Value: {cookies.Status} - New Value: {two}</p1><br/>
            <br/>
            <p1 style={{color:"black", fontSize:"25px"}}>
              DoogleTube Websites for Thumbnails
            </p1>
            <br/>
            <a href="https://youtube-thumbnail-grabber.com/" target="_blank"><button>Thumbnail Grabber</button></a><br/>
            <a href="https://ezgif.com/image-to-datauri" target="_blank"><button>Thumbnail to URI</button></a><br/>
            <table>
              <tr>
                <th>
                  <button><a target="blank" href="https://www.youtube.com/c/grimmxiii"><img style={{width:"80px"}} src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/channels4_profile%20(1).jpg?v=1655783184862"/><br/>Grimm XIII</a></button>
                </th>
                <th>
                  <button><a target="blank" href="https://www.youtube.com/channel/UCeJyTDqq8C2CkJq5mVoOEHA"><img style={{width:"80px"}} src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/channels4_profile.jpg?v=1655783184861"/><br/>Vaughn XV</a></button>
                </th>
                <th>
                  <button><a target="blank" href="https://www.youtube.com/channel/UCUXy31DtzBbpudx-C9M6alA"><img style={{width:"80px"}} src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/channels4_profile.jpg?v=1656300232081"/><br/>DamenIThink ?</a></button>
                </th>
                <th>
                  <button><a target="blank" href="https://www.youtube.com/channel/UCfs3ylYaj58eWfAZCjaHn1g"><img style={{width:"80px"}} src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/channels4_profile.jpg?v=1656481051840"/><br/>Coal XIV</a></button>
                </th>
              </tr>
            </table>
            <br/>
            <p1 style={{color:"black", fontSize:"25px"}}>
              Direct Database Access
            </p1>
            <br/>
            <a target="blank" href="https://glitch.com/edit/#!/grimmxiii?path=database.json%3A1%3A0"><button style={{ padding:"5px", backgroundColor:"orange", height:"30px", borderRadius:"5px", border:"1px solid black"}}>Open in new tab</button></a>
          </div>
        </>
      )
    }
    
  }
  
  
  return (
    <> 
      <button onClick={check} style={{ padding:"5px", backgroundColor:"orange", height:"30px", borderRadius:"5px", border:"1px solid black" }}>Update</button>
      <br/>
      {content}
    </>
  );
}
