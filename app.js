import React from "react";
import ReactDOM from "react-dom/client";
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap')
</style>

const AppLayout = () =>{
return (
  <div className="layout">
<Header/>
<Body/>
  </div>
)

}

const Header = () =>{
return(
<div className="header">
  <div className="header-logo-container">
    <img src="https://images-platform.99static.com//Ba6VdSQsbU4OpiyQEzLi7yHy9KQ=/440x521:1494x1575/fit-in/500x500/99designs-contests-attachments/127/127439/attachment_127439993" className="header-logo"/>
  </div>
  <div className="navbar">
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
    </ul>
  </div>
</div>

)
}
const Body = () =>{
  return (
    <div className="body">
      <div className="searchbar-box">
<input className="inputbox" placeholder="Enter your choice of food" />
<button className="btn">Search</button>

      </div>
      <div className="card-container">
<Cards resName="Burger King" deliverytime="23-25 min." amount="200 for two" />
<Cards resName="KFC" deliverytime="25-30 min." amount="500 for two" />



      </div>
       </div>
  )
}
const Cards = (props) =>{
  return (

<div className="card">
<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" className="img-card"/>
<h2 className="r-name">{props.resName}</h2>
<p className="delivery-time">{props.deliverytime}</p>
<p className="min-am">{props.amount}</p>

</div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Hello/>)
root.render(<AppLayout/>)


