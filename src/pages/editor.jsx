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
      <br/>
      <br/>
      <button onClick={compile}>Begin Coding</button>
      <button onClick={update}>update</button>
      <button onClick={downloadTxtFile}>update</button>
      {down}
      <table>
        <tr>
          <th>
            <iframe id="code" style={{height:"300px", width:"400px"}}></iframe>
          </th>
          <th>
            <textarea id="html" placeholder="HTML" style={{height:"300px", width:"400px", resize:"none", backgroundColor:"160f19", border:"10px solid black"}}></textarea>
          </th>
        </tr>
        <tr>
          <th>
            <textarea id="css" placeholder="CSS" style={{height:"300px", width:"400px", resize:"none", backgroundColor:"160f19", border:"10px solid black"}}></textarea>
          </th>
          <th>
            <textarea id="js" placeholder="JavaScript" style={{height:"300px", width:"400px", resize:"none", backgroundColor:"160f19", border:"10px solid black"}}></textarea>
          </th>
        </tr>
      
      </table>
    </>
  );
}
