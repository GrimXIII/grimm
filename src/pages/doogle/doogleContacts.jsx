import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useCookies } from "react-cookie";
import { Router, Link } from "wouter";

export default function About() {
  useEffect(() => {
      
  }, []);


  return (
    <div>
    <table style={{ width:"1000px", height:"100px", border:"10px solid #ff6700" }}>
      
      <tr>
      <th style={{ fontSize:"30px"}}>Name</th>
      <th style={{ fontSize:"30px"}}>Account Status</th>
      </tr>
      <tr>
        <th style={{ color:"yellow"}}>Keegen</th>
        <th style={{ color:"yellow"}}>Owner</th>
        <th><Link href="mailto:khendrickson@sb.k12.wi.us"><img width="30" src="https://cdn.glitch.global/ec718c4b-581f-4afc-848d-2eba19a4d0c0/email.png?v=1653109338480"/></Link></th>
      </tr>
            <tr>
        <th style={{ color:"#f200ff"}}>Damen</th>
        <th style={{ color:"#f200ff"}}>Admin</th>
      </tr>
            <tr>
        <th style={{ color:"#f200ff"}}>Vaughn</th>
        <th style={{ color:"#f200ff"}}>Admin</th>
      </tr>
      
      
      
    <tr>
      <th style={{ color:"teal"}}>Cyrus</th>
      <th style={{ color:"teal"}}>User</th>
    </tr>
    <tr>
      <th style={{ color:"teal"}}>Zane</th>
      <th style={{ color:"teal"}}>User</th>
    </tr>
    <tr>
      <th style={{ color:"teal"}}>Bricen</th>
      <th style={{ color:"teal"}}>User</th>
    </tr>
    <tr>
      <th style={{ color:"teal"}}>Larissa</th>
      <th style={{ color:"teal"}}>User</th>
    </tr>
    <tr>
      <th style={{ color:"teal"}}>Steven</th>
      <th style={{ color:"teal"}}>User</th>
    </tr>
    <tr>
      <th style={{ color:"teal"}}>Cheyenne</th>
      <th style={{ color:"teal"}}>User</th>
    </tr>
    <tr>
      <th style={{ color:"teal"}}>Jennifer</th>
      <th style={{ color:"teal"}}>User</th>
    </tr>
    
    <tr>
      <th style={{ color:"white"}}>Guest</th>
      <th style={{ color:"white"}}>Guest</th>
    </tr>
      
      
      
      </table>
       
    </div>
  );
}

/*  

mailto:khendrickson@sb.k12.wi.us?
subject=Account Email
&body=By typing yes, you agree to allow your email to be shown on a public%0A
website on your account. I wont be responsible for any spam or harrassment.%0A
you can take your email down anytime by emailing me again%0A
Type "Yes" to agree:%0A

<Link href='mailto:khendrickson@sb.k12.wi.us?subject=Account%20Email&body=By%20typing%20yes,%20you%20agree%20to%20allow%20your%20email%20to%20be%20shown%20on%20a%20public%0Awebsite%20on%20your%20account.%20I%20wont%20be%20responsible%20for%20any%20spam%20or%20harrassment.%0Ayou%20can%20take%20your%20email%20down%20anytime%20by%20emailing%20me%20again%0AType%20"Yes"%20to%20agree:%0A'>khendrickson@sb.k12.wi.us</Link>

*/