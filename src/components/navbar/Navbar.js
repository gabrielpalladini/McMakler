import React from "react";
import "./style.css";
import iconSupport from "../../assets/icons/support.png";
import iconMessage from "../../assets/icons/message.png";
import iconPower from "../../assets/icons/power.png";
import iconUser from "../../assets/icons/user.png";


const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="left-navbar">
                    <a href="#" className="toggle-button">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </a>   
                    <div className="brand-title"> 
                        McMakler
                    </div>
                </div>
                
                <div className="navbar-links">
                <ul>
                    <li className="icon-support">
                        <a href="#">
                            <img src={iconSupport} alt='Contact Support' />
                            Contact Support
                        </a>
                    </li>
                    <li className="icon-message">
                        <a href="#">
                            <img src={iconMessage} alt='Send message' />
                        </a>
                    </li>
                    <li className="icon-mult">
                        <a href="#">
                            <img src={iconUser} alt='Profile page' />
                        </a>
                    </li>
                    <li className="icon-mult">
                        <a href="#">
                            <img src={iconPower} alt='Power page' />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="sub-nav">
            <div>
                <h2> Applicants </h2>
            </div>
            <div className="dashboard">
                <div >
                    <h3> 25 </h3>
                    <h5> Total </h5>
                </div>
                <div>
                    <h3> 10 </h3>
                    <h5> New </h5>
                </div>
                <div>
                    <h3> 5 </h3>
                    <h5> Viewed </h5> 
                </div>
                <div>
                    <h3> 3 </h3>
                    <h5> Appointment</h5>
                </div>
                <div>
                    <h3> 6 </h3>
                    <h5> Others </h5>
                </div>
            </div>
    </div>
    </>
    )
}

export default Navbar;