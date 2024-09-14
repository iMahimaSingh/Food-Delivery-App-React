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
        <div className="header-container">
            <div className="logo">
                <img alt="logo-image" 
                    className="logo-Image"
                    src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <p className="icon-text">Online Status:{onlineStatus?"✅":"🔴"}</p>
            </div>
            
            <div className="nav-items">
                <img 
                className="nav-icon"
                alt="nav-icon"
                src={HOME_ICON}/>
                 <p className="icon-text"><Link to="/">Home</Link></p>
            </div>
            <div className="nav-items">
                <img 
                className="nav-icon-about-us"
                alt="nav-icon"
                src={ABOUT_ICON}/>
                 <p className="icon-text"><Link to="/about">About Us</Link></p>
            </div>
            <div className="nav-items">
                <img 
                className="nav-icon"
                alt="nav-icon"
                src={HELP_ICON}/>
                 <p className="icon-text"><Link to="/help">Help</Link></p>
            </div>
              
            <div className="nav-items">
                <img 
                className="nav-icon-login"
                alt="nav-icon"
                src={LOGIN_ICON}/>
               <button
                    className="login button"
                    onClick={handleLoginClick} 
                >
                    {btnNameReact} 
                </button>
        </div>
        <div className="nav-items">
                <img 
                className="nav-icon"
                alt="nav-icon"
                src={CART_ICON}/>
                <p className="icon-text">Cart</p>
               </div> 
        </div>
    );
};

export default Header;