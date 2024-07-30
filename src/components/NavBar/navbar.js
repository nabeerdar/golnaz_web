

import React, { useState } from "react";
import './navbar.css';
import closeBtn from "../../assets/close.png";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showPhotographyDropdown, setShowPhotographyDropdown] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo1" />

            <div className="desktop-menu1">

                <Link activeClass='active' to='/home' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <div className="desktopMenuListItem" onMouseEnter={() => setShowPhotographyDropdown(true)} onMouseLeave={() => setShowPhotographyDropdown(false)}>
                    Photography
                    {showPhotographyDropdown &&
                        <div className="dropdownContent">
                            <Link activeClass='active' to='/nature' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>Nature</Link>
                            <Link activeClass='active' to='/city' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>City</Link>
                            <Link activeClass='active' to='/flying' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>Flying</Link>
                            <Link activeClass='active' to='/food' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>Food</Link>
                            <Link activeClass='active' to='/culture' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>Culture</Link>
                            <Link activeClass='active' to='/landscape' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>Landscape</Link>
                            <Link activeClass='active' to='/other' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>Other</Link>
                        </div>
                    }
                </div>
                <Link activeClass='active' to='/art' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Art</Link>
                <Link activeClass='active' to='/travel' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Travel</Link>
                <Link activeClass='active' to='/contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact Me</Link>
            </div>

            {!showMenu && (
                <img src={menu} alt="Menu1" className="mobMenu1" onClick={() => setShowMenu(true)} />
            )}



            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <div className="top-gap" >
                    <Link activeClass='active' to='/home' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                    <div className="listItem" onMouseEnter={() => setShowPhotographyDropdown(true)} onMouseLeave={() => setShowPhotographyDropdown(false)}>
                        Photography
                        {showPhotographyDropdown &&
                            <div className="dropdownContent">
                                <Link activeClass='active' to='/nature' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>Nature</Link>
                                <Link activeClass='active' to='/city' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>City</Link>
                                <Link activeClass='active' to='/flying' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>Flying</Link>
                                <Link activeClass='active' to='/food' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>Food</Link>
                                <Link activeClass='active' to='/culture' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>Culture</Link>
                                <Link activeClass='active' to='/landscape' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>Landscape</Link>
                                <Link activeClass='active' to='/other' spy={true} smooth={true} offset={-100} duration={500} className="dropdownItem" onClick={() => setShowMenu(false)}>Other</Link>
                            </div>
                        }
                    </div>
                    <Link activeClass='active' to='/art' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Art</Link>
                    <Link activeClass='active' to='/travel' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Travel</Link>
                    <Link activeClass='active' to='/contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact Me</Link>
                </div>
                {showMenu && (
                    <img src={closeBtn} alt="Close" className="close-btn1" onClick={() => setShowMenu(false)} />
                )}

            </div>
        </nav>
    );
}

export default Navbar;
