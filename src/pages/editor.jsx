import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";
import account from "../../database.json";



export default function Home() {
    
  window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  };
  
  const [down, setDown] = useState()
  
  
  function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function() {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  };
}
  
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([down], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = ("DoogleDomainEditorFile");
    document.body.appendChild(element);
    element.click();
  };

  function update() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    setDown("HTML----\n" + html.value + "\nCSS----\n" + css.value + "\nJS----\n" + js.value)
  }

  return (
    <>
      <table className="items">
        <tr>
          <th><div className="spot1"></div></th>
          <th><div className="spot2"><br/>&nbsp;&nbsp;Help</div></th>
        </tr>
        <tr>
          <th><div className="main">
            <table style={{ padding:"10px" }}>
              <tr>
                <h1 style={{ color:'black', fontSize:'25px' }}>
                  HTML
                </h1>
                <p1>
                  HTML is somewhat simple, start with a {"<div>"} tag, and start typing stuff! there are things like {'<button> <iframe> <table>'}.
                </p1>
              </tr>
              <tr>
                <h1 style={{ color:'black', fontSize:'25px' }}>
                  CSS
                </h1>
                <p1>
                  CSS is the thing that styles items. Before you type {">"} for a tag, type class="whatever you wanna call it". then in CSS, type ".whateverItsCalled {}" and inside the curved parentasis, add things! like {"background-color:orange;"}
                </p1>
              </tr>              
              <tr>
                <h1 style={{ color:'black', fontSize:'25px' }}>
                  Java
                </h1>
                <p1>
                  Honestly, I dont think this works, but I put it here in case it does.
                </p1>
              </tr>
              <tr>
                Honestly, if you want to learn this stuff, I feel you should look it up. There are many things online to help you out better than what I can tell ya!
              </tr>
            </table>
            </div>
          </th>
          <th><div className="corner"></div></th>
        </tr>
      </table>
      <br/>
      <br/>
      <table>
        <tr>
          <th>
            <button className="editButton" onClick={compile}>Begin Coding</button>
          </th>
          <th>
            <button className="editButton" onClick={update}>Update (press before download)</button>
          </th>
          <th>
            <button className="editButton" onClick={downloadTxtFile}>Download</button>
          </th>
        </tr>
      </table>
      <table>
        <tr>
          <th>
            <iframe id="code" style={{height:"300px", width:"400px"}}></iframe>
          </th>
          <th>
            <textarea id="html" placeholder="HTML" style={{height:"300px", width:"400px", resize:"none", backgroundColor:"160f19", border:"10px solid black"}}>{"<button>I am a button</button>"}</textarea>
          </th>
        </tr>
        <tr>
          <th>
            <textarea id="css" placeholder="CSS" style={{height:"300px", width:"400px", resize:"none", backgroundColor:"160f19", border:"10px solid black"}}>{"button {\ncolor:orange;\nbackground-color:red;\n}\n\nbutton:active {\ncolor:lime;\nbackground-color:purple;\n}\n\nbutton:hover {\ncolor:purple;\nbackground-color:yellow\n}\n"}</textarea>
          </th>
          <th>
            <textarea id="js" placeholder="JavaScript" style={{height:"300px", width:"400px", resize:"none", backgroundColor:"160f19", border:"10px solid black"}}></textarea>
          </th>
        </tr>
      
      </table>
    </>
  );
}
