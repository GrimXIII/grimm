import React, { useState, useEffect } from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";
import account from "../../../database.json";
import thumbs from "./thumbs.json"

export default function Home() {
  
  //dude, I did this without the prettier button, ha, im pretty enough
  
  return (
    <> 
      <br />
      <br />
      <br />
      <div style={{ backgroundColor:"orange", height:"200px", width:"1100px", padding:"10px" }}>
        <img style={{ width:"50px", borderRadius:"5px" }} src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/channels4_profile%20(1).jpg?v=1655783184862" />
        &nbsp;Grimm XIII
        <div className="line"></div>
        <div style={{ height:"100px", width:"1100px" }}>
          <table>
            <tr>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.grimmIIIII} />
              </th>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.grimmIIII} />
              </th>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.grimmIII} />
              </th>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.grimmII} />
              </th>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.grimmI} />
              </th>
            </tr>
          </table>
        </div>
      </div>
      
      <div style={{ backgroundColor:"orange", height:"200px", width:"1100px", padding:"10px" }}>
        <img style={{ width:"50px", borderRadius:"5px" }} src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/channels4_profile.jpg?v=1655783184861" />
        &nbsp;Vaughan XV
        <div className="line"></div>
        <div style={{ height:"100px", width:"1100px" }}>
          <table>
            <tr>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.vaughnIIIII} />
              </th>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.vaughnIIII} />
              </th>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.vaughnIII} />
              </th>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.vaughnII} />
              </th>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.vaughnI} />
              </th>
            </tr>
          </table>
        </div>
      </div>
      
      <div style={{ backgroundColor:"orange", height:"200px", width:"1100px", padding:"10px" }}>
        <img style={{ width:"50px", borderRadius:"5px" }} src="https://cdn.glitch.global/5608dbda-63e0-48b7-aeef-17abab77528d/channels4_profile.jpg?v=1656481051840" />
        &nbsp;Coal XIV
        <div className="line"></div>
        <div style={{ height:"100px", width:"1100px" }}>
          <table>
            <tr>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.rileyIIIII} alt="bruh" />
              </th>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.rileyIIII} />
              </th>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.rileyIII} />
              </th>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.rileyII} />
              </th>
              <th style={{ padding:"5px" }}>
                <img className="thumbHov" style={{ width:"200px", height:"120px"}} src={thumbs.thumbnails.rileyI} />
              </th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
