import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header-about d-f jc-sb align-center">
                <div><img src="images/logo.png" alt="logo" /></div>
                <div className="header-info d-f">
                    <div className="header-info-bl d-f align-center">
                        <div><img src="images/time.png" alt="time" /></div>
                        <div className="info-bl-title">Mon - Sat 9.00 - 18.00 Sunday Closed</div>
                    </div>
                    <div className="header-info-bl d-f align-center">
                        <div><img src="images/email.png" alt="email" /></div>
                        <div className="info-bl-title">Email contact@logistics.com</div>
                    </div>
                    <div className="header-info-bl d-f align-center">
                        <div><img src="images/phone.png" alt="phone" /></div>
                        <div className="info-bl-title">Call Us <br /> (00) 112 365 489</div>
                    </div>
                </div>
            </div>
            <div className="header-bar d-f jc-sb align-center">
                <nav>
                    <ul className="header-nav-list d-f align-center">
                        <li className="nav-list-item"><Link to="/">Home</Link></li>
                        <li className="nav-list-item"><Link to="about">About</Link></li>
                        <li className="nav-list-item dropdown-item d-f">
                            <a href="">Pages</a>
                            <button className='dropdown-link-btn'><img src="images/arrow-down1.png" alt="arrow-down" /></button>
                        </li>
                        <li className="nav-list-item"><Link to="services">Services</Link></li>
                        <li className="nav-list-item"><Link to="projects">Projects</Link></li>
                        <li className="nav-list-item"><a href="">Contact</a></li>
                    </ul>
                </nav>
                <div className="header-bar-actions d-f align-center">
                    <div className="header-social d-f">
                        <div><img src="images/header-social1.png" alt="header-social1" /></div>
                        <div><img src="images/header-social2.png" alt="header-social2" /></div>
                        <div><img src="images/header-social3.png" alt="header-social3" /></div>
                        <div><img src="images/header-social4.png" alt="header-social4" /></div>
                    </div>
                    <button className="header-actions-request">Request Quote</button>
                </div>
            </div>
        </header>
    )
}

export default Header