import React from "react";
import ReactDOM from "react-dom/client";
const code = React.createElement("div", {id : "parent"}, [
    React.createElement("div", {id : "child"}, 
    React.createElement("h1", {id : "heading-1"}, "this is heading")),
     React.createElement("div", {id : "child"},
      React.createElement("h1", {id : "heading-1"}, "this is heading")) ]);



    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(code);


  