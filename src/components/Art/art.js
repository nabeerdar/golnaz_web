import React, { useState } from "react";
import './art.css';
import menu from '../../assets/menu.png';
import closeBtn from "../../assets/close.png";
import { Link } from "react-router-dom";
import x1 from "../../assets/x1.png";
import x2 from '../../assets/x2.png';
import x3 from '../../assets/x3.png';
import x4 from '../../assets/x4.png';
import x5 from '../../assets/x5.png';
import x8 from '../../assets/x8.png';
import logo from '../../assets/logo.png';

function Art() {

  const [showMenu, setShowMenu] = useState(false);
  const [showPhotographyDropdown, setShowPhotographyDropdown] = useState(false);

  return (
    <div className="margins">
      {/* Heading Start */}
      <section className="nav">
        <input type="checkbox" id="check" />
        <header className="header" >


          <img className="logo" src={logo} alt="logo" />




          <div className="desktop-menu">
            <Link activeClass='active' to='/home' spy={true} smooth={true} offset={-100} duration={500} className="navigation">Home</Link>

            <Link activeClass='active' to='/travel' spy={true} smooth={true} offset={-100} duration={500} className="navigation">Travel</Link>
            <div className="navigation" onMouseEnter={() => setShowPhotographyDropdown(true)} onMouseLeave={() => setShowPhotographyDropdown(false)}>
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


            <Link activeClass='active' to='/contact' spy={true} smooth={true} offset={-100} duration={500} className="navigation">Contact Me</Link>
          </div>



          <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
          <div className="navMenu1" style={{ display: showMenu ? '' : 'none' }}>
            <Link activeClass='active' to='/home' spy={true} smooth={true} offset={-100} duration={500} className="toggle-navigation" onClick={() => setShowMenu(false)}>Home</Link>

            <Link activeClass='active' to='/art' spy={true} smooth={true} offset={-100} duration={500} className="toggle-navigation" onClick={() => setShowMenu(false)}>Art</Link>
            <div className="toggle-navigation" onMouseEnter={() => setShowPhotographyDropdown(true)} onMouseLeave={() => setShowPhotographyDropdown(false)}>
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

            <Link activeClass='active' to='/travel' spy={true} smooth={true} offset={-100} duration={500} className="toggle-navigation" onClick={() => setShowMenu(false)}>Travel</Link>
            <Link activeClass='active' to='/contact' spy={true} smooth={true} offset={-100} duration={500} className="toggle-navigation" onClick={() => setShowMenu(false)}>Contact Me</Link>

            <img src={closeBtn} alt="Close" className="close-btn" onClick={() => setShowMenu(false)} />
          </div>
        </header>
      </section>

      <div id="wrapper-div">
        {/* Contact Us */}
        <section id="large-img-1">
          <img style={{ width: "100%" }} src={x1} alt="x1" />
        </section>

        <section>
          <div className="lo">
            <div className="art-wall-paper">
              <div className="boxes-section">
                <div className="box-1">
                  <img className="x2" src={x2} alt="x2" />
                </div>
                <div className="box-2">
                  <img className="x3" src={x3} alt="x3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="second-div-wrapper">
          <div className="heading-regular second-div">
            Life is the art of drawing without an eraser.
          </div>
          <p className="second-div">
            -John J. Gardner
          </p>
        </section>

        <section>
          <div className="lo">
            <div className="art-wall-paper">
              <div className="boxes-section">
                <div className="box-3">
                  <img className="x2" src={x4} alt="x4" />
                </div>
                <div className="box-4">
                  <img className="x3" src={x5} alt="x5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="large-img">
          <img style={{ width: "100%" }} src={x8} alt="x8" />
        </section>

        {/* Footer */}
        <section id="footer">
          {/* Third Line */}
          <div className="footer-third-line">
            Copyright © 2023- Golnaz. All rights reserved.
          </div>
          {/* Forth Line */}
          <div className="footer-forth-line">
            <img className="footer-logo-forth-line" src={logo} alt="logo" />
          </div>
        </section>
      </div>

    </div>



  );
}

export default Art;
