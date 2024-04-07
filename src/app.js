import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap')
</style>


const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
      <Body />
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


