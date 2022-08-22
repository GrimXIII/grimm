import React, { useState, useEffect } from "react";

export default function App() {
  const [doc, setDoc] = useState(null)
  const [tit, setTit] = useState(null)
  
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([doc], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = (tit + " - DoogleDocs");
    document.body.appendChild(element);
    element.click();
  };
  
  const [items, setItems] = useState([]);
  
  const [title1, setTitle1] = useState(localStorage.getItem('title1'))
  const [text1, setText1] = useState(localStorage.getItem('text1'))
  const [title2, setTitle2] = useState(localStorage.getItem('title2'))
  const [text2, setText2] = useState(localStorage.getItem('text2'))
  const [title3, setTitle3] = useState(localStorage.getItem('title3'))
  const [text3, setText3] = useState(localStorage.getItem('text3'))
  
  const [mess1, setMess1] = useState()
  const [mess2, setMess2] = useState()
  const [mess3, setMess3] = useState()
  
  function save1() {
    localStorage.setItem('title1', tit)
    localStorage.setItem('text1', doc)
    setMess1("Saved!")
    setTitle1(tit)
  }
  
  function load1() {
    setTit(title1)
    setDoc(localStorage.getItem('text1'))
    setMess1("Loaded!")
  }
  
  function del1() {
    localStorage.removeItem('title1')
    localStorage.removeItem('text1')
    setMess1("Deleted!")
    setTitle1()
  } 
  
  function save2() {
    localStorage.setItem('title2', tit)
    localStorage.setItem('text2', doc)
    setMess2("Saved!")
    setTitle2(tit)
  }
  
  function load2() {
    setTit(localStorage.getItem('title2'))
    setDoc(localStorage.getItem('text2'))
    setMess2("Loaded!")
  }
  
  function del2() {
    localStorage.removeItem('title2')
    localStorage.removeItem('text2')
    setMess2("Deleted!")
    setTitle2()
  } 
  
  function save3() {
    localStorage.setItem('title3', tit)
    localStorage.setItem('text3', doc)
    setMess3("Saved!")
    setTitle3(tit)
  }
  
  function load3() {
    setTit(localStorage.getItem('title3'))
    setDoc(localStorage.getItem('text3'))
    setMess3("Loaded!")
  }
  
  function del3() {
    localStorage.removeItem('title3')
    localStorage.removeItem('text3')
    setMess3("Deleted!")
    setTitle3()
  } 

  return (
    <>
    <br/>
    <br/>
      <table>
          <tr>
            <th>
              <div>
                <div>
                  <img src="https://cdn.glitch.global/ec718c4b-581f-4afc-848d-2eba19a4d0c0/Untitled%20drawing%20(3).png?v=1652841484886" 
                    style={{ height:"50px"}}/>
                </div>   
                <div>
                  <input style={{float:"left", width:"800px", height:"100px", fontSize:"75px"}} maxlength={15} value={tit} onChange={(e) => setTit(e.target.value)}/>
                </div>
                  <textarea
                      id="subject" 
                      name="subject" 
                      placeholder="Type something Doogleriffic!" 
                      style={{height:"500px", width:"1000px", resize:"none"}}
                      value={doc}
                      onChange={(e) => setDoc(e.target.value)}
                     />
                  <br/>
                  <br/>
                  <br/>
                  <br/>
              </div>
            </th>
            <th>
              <div style={{ padding:"10px", width:"350px", height:"150px", color:"black", borderRadius:"10px", border:"black 5px solid", backgroundColor:"white"}}>
                <p1 style={{ color:"black", fontSize:"25px", overflow:"hidden" }}>{title1}</p1><br/>
                <p1 style={{ color:"lime", fontSize:"15px" }}>{mess1}</p1><br/><br/><br/>
                <button style={{ color:"black", borderRadius:"5px", width:"50px", height:"25px", backgroundColor:"white" }} onClick={save1}>Save</button>
                <button style={{ color:"black", borderRadius:"5px", width:"50px", height:"25px", backgroundColor:"white" }} onClick={load1}>Load</button>
                <button style={{ color:"black", borderRadius:"5px", width:"50px", height:"25px", backgroundColor:"white" }} onClick={del1}>Delete</button>
              </div>
              <div style={{ padding:"10px", width:"350px", height:"150px", color:"black", borderRadius:"10px", border:"black 5px solid", backgroundColor:"white"}}>
                <p1 style={{ color:"black", fontSize:"25px", overflow:"hidden" }}>{title2}</p1><br/>
                <p1 style={{ color:"lime", fontSize:"15px" }}>{mess2}</p1><br/><br/><br/>
                <button style={{ color:"black", borderRadius:"5px", width:"50px", height:"25px", backgroundColor:"white" }} onClick={save2}>Save</button>
                <button style={{ color:"black", borderRadius:"5px", width:"50px", height:"25px", backgroundColor:"white" }} onClick={load2}>Load</button>
                <button style={{ color:"black", borderRadius:"5px", width:"50px", height:"25px", backgroundColor:"white" }} onClick={del2}>Delete</button>
              </div>
              <div style={{ padding:"10px", width:"350px", height:"150px", color:"black", borderRadius:"10px", border:"black 5px solid", backgroundColor:"white"}}>
                <p1 style={{ color:"black", fontSize:"25px", overflow:"hidden" }}>{title3}</p1><br/>
                <p1 style={{ color:"lime", fontSize:"15px" }}>{mess3}</p1><br/><br/><br/>
                <button style={{ color:"black", borderRadius:"5px", width:"50px", height:"25px", backgroundColor:"white" }} onClick={save3}>Save</button>
                <button style={{ color:"black", borderRadius:"5px", width:"50px", height:"25px", backgroundColor:"white" }} onClick={load3}>Load</button>
                <button style={{ color:"black", borderRadius:"5px", width:"50px", height:"25px", backgroundColor:"white" }} onClick={del3}>Delete</button>
              </div>
              <br/>
              <div>
                <button style={{ color:"black", borderRadius:"5px", height:"25px", backgroundColor:"white", padding:"5px" }} onClick={downloadTxtFile}>Download txt file</button>
              </div>
            </th>
          </tr>
        </table>
      </>
  );
}