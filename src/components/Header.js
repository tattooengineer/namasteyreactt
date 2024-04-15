import { HEADER_LOGO } from "../utilities/common"
import { useState } from "react"
const Header = (props) => {

const [btnContent, setbtnContent] = useState("Login")
  
    return (
      <div className="header">
        <div className="header-logo-container">
          <img src={HEADER_LOGO} className="header-logo" />
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart {props.counter}</li>
            <button className="btn-head" onClick={() =>{
btnContent == "Login" ? setbtnContent("Logout") : setbtnContent("Login") 

            }}>{btnContent}</button>
          </ul>
        </div>
      </div>
  
    )
  }

  export default Header