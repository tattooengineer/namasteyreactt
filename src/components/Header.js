import { HEADER_LOGO } from "../utilities/common"
import { useState } from "react"
import { Link } from "react-router-dom"
import useStatus from "../utilities/useStatus"
const Header = (props) => {


const [btnContent, setbtnContent] = useState("Login")
const userStatus = useStatus();
  const dyId= 20
    return (
      <div className="flex shadow-sm items-center justify-between " >
        <div className="header-logo-container">
        <Link to="/"> <img src={HEADER_LOGO} className="w-32" /></Link> 
        </div>
        <div >
          <ul className="flex mr-8">
            <li className="mx-6"><Link to="/">Home</Link></li>
            <li className="mx-6">{userStatus ? "yes" : "no"}</li>
            <li className="mx-6"><Link to="/About">About Us</Link></li>
            <li className="mx-6"><Link to={"/Contact" + dyId}>Contact Us</Link></li>
            <li className="mx-6">Cart</li>
            <button className="btn-head" onClick={() =>{
btnContent == "Login" ? setbtnContent("Logout") : setbtnContent("Login") 

            }}>{btnContent}</button>
          </ul>
        </div>
      </div>
  
    )
  }

  export default Header