import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";
import database from "../../../database.json";

export default function Home() {
  useEffect(() => {
  check()
  }, []);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  
  
  function mail() {
    window.location.replace("mailto:khendrickson@sb.k12.wi.us")
  }
  
  const [nice, setNice] = useState()
  
  function check() {
    if (database[cookies.Name].domain == "true") {
    setNice(      
      <div style={{ backgroundColor:"#ff6700", borderRadius:"10px", padding:"10px", width:"800px" }}>
        <h1 style={{color:"black", fontSize:"40px"}}>Nice! You got one!</h1>
        <p1 style={{color:"black"}}>
          It appears that you own a Domain, if you want to work on coding it, the editor is right <Link href="/edit">Here!</Link>
        </p1>
      </div>
      )
    }
  }
  
  return (
    <>
      <br />
      <br />

      <div style={{ backgroundColor:"#ff6700", borderRadius:"10px", padding:"10px" }}>
        <h1 style={{ color:"black", fontSize:"50px" }}>
          Doogle Domains
        </h1>
        <p1>
          What is this? <br />
          You can request a domain for you to own (you can only own one) In other words, a little slide of <br />
          our website that you can mess around with, and let people take a look at.
        </p1>
        <table style={{ width:"800px", border:"10px solid black", borderRadius:"10px" }}>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            com
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            net
            </th>
            <th style={{ border:"1px solid black", color:"red" }}>
            Taken
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            org
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            edu
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            info
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            us
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            pw
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            npm
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            code
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            xyz
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            among
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            school
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            cast
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
          <tr>
            <th style={{ border:"1px solid black", width:"80%", textAlign:"left", padding:"5px"}}><p1 style={{color:"lightGrey"}}>grimm.pw/</p1>
            tv
            </th>
            <th style={{ border:"1px solid black", color:"lime" }}>
            Available
            </th>
          </tr>
        </table>
        <p1>
          Want to own one of these? Email me the domain name and your username&nbsp;
        </p1>
        <button onClick={mail} style={{ background:"#ff6700", borderRadius:"3px" }}>
          Email Me!
        </button>
      </div>
      <br/>
      {nice}
      <br/>
      <br/>
    </>
  );
}
