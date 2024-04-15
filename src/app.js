import React,{ useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import { useState } from "react"



const AppLayout = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div className="layout">
      <Header counter={counter} counterfn={setCounter}/>
      <Body counter={counter} counterfn={setCounter}/>
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


