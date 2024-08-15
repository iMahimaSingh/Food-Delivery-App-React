import { LOGO_URL,OFFER_ICON,HELP_ICON ,LOGIN_ICON,CART_ICON} from "../utils/constant";
import {useState} from "react";


const Header = () =>{
    const  [btnNameReact,setBtnNameReact]=useState("Login");
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
                <img 
                className="nav-icon"
                alt="nav-icon"
                src={OFFER_ICON}/>
                 <p className="icon-text">Offers</p>
            </div>
            <div className="nav-items">
                <img 
                className="nav-icon"
                alt="nav-icon"
                src={HELP_ICON}/>
                 <p className="icon-text">Help</p>
            </div>
              
            <div className="nav-items">
                <img 
                className="nav-icon"
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