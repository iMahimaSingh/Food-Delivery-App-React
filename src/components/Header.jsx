import { LOGO_URL,HOME_ICON,HELP_ICON ,LOGIN_ICON,CART_ICON,ABOUT_ICON} from "../utils/constant";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () =>{
    const  [btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const handleLoginClick = () => {
        setBtnNameReact(prevState => (prevState === "Login" ? "Logout" : "Login"));
    };
    return(
        <div className="flex justify-between items-center p-4 bg-gray-100 shadow-lg">
  <div className="logo">
    <img alt="logo-image" className="w-40" src={LOGO_URL} />
  </div>
  <div className="flex space-x-3 items-center">
    <p className="text-sm">Online Status: {onlineStatus ? "✅" : "🔴"}</p>

    <div className="flex items-center space-x-2">
      <img className="w-5 h-5" alt="nav-icon" src={HOME_ICON} />
      <Link to="/" className="text-sm">Home</Link>
    </div>

    <div className="flex items-center space-x-2">
      <img className="w-5 h-5" alt="nav-icon" src={ABOUT_ICON} />
      <Link to="/about" className="text-sm">About Us</Link>
    </div>

    <div className="flex items-center space-x-2">
      <img className="w-5 h-5" alt="nav-icon" src={HELP_ICON} />
      <Link to="/help" className="text-sm">Help</Link>
    </div>

    <div className="flex items-center space-x-2">
      <img className="w-5 h-5" alt="nav-icon" src={LOGIN_ICON} />
      <button onClick={handleLoginClick} className="text-sm">{btnNameReact}</button>
    </div>

    <div className="flex items-center space-x-2">
      <img className="w-5 h-5" alt="nav-icon" src={CART_ICON} />
      <p className="text-sm">Cart</p>
    </div>
  </div>
</div>

    
    );
};

export default Header;