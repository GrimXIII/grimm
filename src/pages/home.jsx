import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from 'wouter';


export default function About() {
    useEffect(() => {
    randomLanguage()
  }, []);   

const [damen] = useState(<img style={{ width:"300px" }} src="https://cdn.glitch.global/ec718c4b-581f-4afc-848d-2eba19a4d0c0/Dameboy.jpg?v=1653056771492"/>);
const [doogle] = useState(<img style={{ width:"300px", animation:"rotate 5s infinite"}} src="https://cdn.glitch.global/3943dd29-ab7d-4dbc-888d-3bca1672b628/Untitled%20drawing%20(1).png?v=1642215398952"/>);
  const name = ["Grimm's Lair", "Keegen Andrew Hendrickson Stans Club","Vaughn's Basement","Damen's Dungeon","Bricen's Bacontorium","Issac and his Mother's house","Larissa's Garden","Doogle's Sweatshop","Zane's Fanfiction", damen, doogle];
  //const name = ["Welcome back to school bitch!"];
  
  
  
  
const [hello, setHello] = React.useState(randomLanguage());
  function randomLanguage() {
  return name[Math.floor(Math.random() * name.length)];
        setHello(randomLanguage());
}
  
  
  
  const [cookies, setCookie] = useCookies(["user"]);
  return (
    <>
      <br/>
    <div style={{ width:"1400px"}}>
      <h1 className="textCenter" style={{ color: cookies.ColorH }}>{hello}</h1>
      <h1 className="textCenter" style={{ color: cookies.ColorH, fontSize:"20px"}}>Grimm's Lair</h1>
      <h1 className="textCenter" style={{ color: cookies.ColorT, fontSize:"20px"}}>The website thats there just because it can be.</h1>
    

      
      
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 style={{color:'red'}}>Hey You! Yeah, You!</h1><br/>
      <p1>
        This website is still a massive work in progess, 
        <p1 style={{color:'red'}}>
          EXPECT SOME THINGS TO BE BROKEN OR NOT ORGANIZED!
        </p1>
        Just know that as of typing this message (Sep 27 2022) I am still workin on this.<br/>
        If you find any issues on here, let me know at <Link style={{ color:'#ff6700' }} href="mailto:diepiomaster3@gmail.com">diepiomaster3@gmail.com</Link>
      </p1>
      
      
      <div>    
        {/*<table style={{ width:"1400px" }}>
          
          <tr>
            <th style={{ width:"50%"}}>
              <h1>Games Galore</h1>
              <p1>
                ------------------------------------------------------------------------------------------<br/>
                Well, we dont have that much, But we do have some time killers for you to try out when you<br/>
                get bored! We have Uno, Tetris, 2048, Galaga, Battleship, and Wordle.<br/>
                (Yeah, im going to be adding more soon!)
              </p1>
            </th>
            
            <th style={{ width:"50%"}}>
              <img style={{ width:"400px", postition:"fixed", left:"300px", borderRadius:"30px", border:"5px solid #ff9800"}} 
                src="
                     https://cdn.glitch.global/ec718c4b-581f-4afc-848d-2eba19a4d0c0/Finish1.png?v=1654316237481
                     "/>
            </th>
          </tr>   
          
          
          
          <tr>
            <th style={{ width:"50%"}}>
              <img style={{ width:"400px", postition:"fixed", left:"300px", borderRadius:"30px", border:"5px solid #ff9800"}} 
                src="https://cdn.glitch.global/ec718c4b-581f-4afc-848d-2eba19a4d0c0/Finish2.png?v=1654324341267                     "/>
            </th>
          
            <th style={{ width:"50%"}}>
              <h1>Gain XP from getting achivements</h1>
              <p1>
                -----------------------------------------------------------------------------------------<br/>
                Every game that we have has a 4 tier achivement that you can collect. As you collect<br/>
                achivements, you gain XP, as you gain XP, you unlock more items!
              </p1>
            </th>
          </tr>   
          
          
          
           <tr>
            <th style={{ width:"50%"}}>
              <h1>Level up and gain more unlockables!</h1>
              <p1>
                ------------------------------------------------------------------------------------------<br/>
                Leveling up allows you to unlock more items such as "Website Customization", "Account Tags",<br/>
                "Profile Picture", "Badges", and more!
              </p1>
            </th>
            
            <th style={{ width:"50%"}}>
              <img style={{ width:"400px", postition:"fixed", left:"300px", borderRadius:"30px", border:"5px solid #ff9800"}} 
                src="https://cdn.glitch.global/ec718c4b-581f-4afc-848d-2eba19a4d0c0/Finish3.png?v=1654324341267                     "/>
             </th>
          </tr>   
          
          
          
          <tr>
            <th style={{ width:"50%"}}>
              <img style={{ width:"400px", postition:"fixed", left:"300px", borderRadius:"30px", border:"5px solid #ff9800"}} 
                src="https://cdn.glitch.global/ec718c4b-581f-4afc-848d-2eba19a4d0c0/Finish4.png?v=1654324341454                     "/>
            </th>
          
            <th style={{ width:"50%"}}>
              <h1>Grow on the leaderboard!</h1>
              <p1>
                ------------------------------------------------------------------------------------------<br/>
                Get high scores, and crawl your way up the leaderboard! Maintaining high scores can give you<br/>
                more XP.
              </p1>
            </th>
          </tr>   
        </table>*/}
        <br/><br/><br/><br/><br/>
          <h1 style={{ textAlign:"center" }}>Wanna join the fun? Create an account!</h1>
          <p1 style={{ textAlign:"center", color:cookies.colorT }}>Email me at khendrickson@sb.k12.wi.us with a Username and Password, and you will be notified when your account has been created!</p1>
      </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    </>
  );
}
