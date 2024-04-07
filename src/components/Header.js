import { HEADER_LOGO } from "../utilities/common"
const Header = () => {


  
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
            <li>Cart{}</li>
          </ul>
        </div>
      </div>
  
    )
  }

  export default Header