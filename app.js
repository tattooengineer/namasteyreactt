import React from "react";
import ReactDOM from "react-dom/client";
import mohit from "./mohit";


function Hello() {
    return(
    <div className="navbar">
        <a href="#" className="anchor">Home</a>
        <a href="#" className="anchor">Contact Us</a>
        <a href="#" className="anchor">About us</a>
        <a href="#" className="anchor">Random2</a>
        <mohit/>
    </div>
    
    ) 
  }



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />)


  