import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
//import "../styles/test.css";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";
import account from "../../database.json";


export default function Home() {
  
  return (
    <> 
      <table>
        <tr>
          <th>
            <div className="deep" style={{ backgroundColor:"orange", height:"250px", width:"250px", borderRadius:"20px" }}>
              <br/><h1 style={{ fontSize:"20px" }}>
                Request Account Deletion <br/>
              <img style={{ width:"200px"}} src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/delete.png?v=1655696813553" />
              </h1>
            </div>
          </th>
          <th>
            <div className="deep" style={{ backgroundColor:"orange", height:"250px", width:"250px", borderRadius:"20px" }}>
              <br/><h1 style={{ fontSize:"20px" }}>
                Report Bug <br/>
              <img style={{ width:"200px"}} src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/delete.png?v=1655696813553" />
              </h1>
            </div>
          </th>
          <th>
            <div className="deep" style={{ backgroundColor:"orange", height:"250px", width:"250px", borderRadius:"20px" }}>
              <br/><h1 style={{ fontSize:"20px" }}>
                Report Account <br/>
              <img style={{ width:"200px"}} src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/delete.png?v=1655696813553" />
              </h1>
            </div>
          </th>
          <th>
            <div className="deep" style={{ backgroundColor:"orange", height:"250px", width:"250px", borderRadius:"20px" }}>
              <br/><h1 style={{ fontSize:"20px" }}>
                Request Feature <br/>
              <img style={{ width:"200px"}} src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/delete.png?v=1655696813553" />
              </h1>
            </div>
          </th>
        </tr>
      </table>
    </>
  );
}
