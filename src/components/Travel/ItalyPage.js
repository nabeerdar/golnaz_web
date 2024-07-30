
import React, { useState } from 'react';
 import './ItalyPage.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import closeBtn from "../../assets/close.png";
import { Link } from "react-router-dom"; 
 import Italy1 from './Travelimages/italy_1.jpeg';
 import Italy2 from './Travelimages/italy_2.jpeg';
import Italy3 from './Travelimages/italy_3.jpeg';
 import Italy4 from './Travelimages/italy_4.jpeg';
 import Italy5 from './Travelimages/italy_5.jpeg';
 import Italy6 from './Travelimages/italy_6.jpeg';

function ItalyPage() {
  const [showItalyPhotographyDropdown, setShowItalyPhotographyDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="italycontainer">
      <header className="italyheader">
        <img className="italylogo" src={logo} alt="logo" style={{ display: showMenu ? 'none' : 'block' }}/>
        <nav className="italydesktop-menu">
          <Link to='/Home' className="italynavigation">Home</Link>
          <Link to='/travel' className="italynavigation">Travel</Link>
          <Link to='/art' className="italynavigation">Art</Link>
          <div
            className="italynavigation"
            onMouseEnter={() => setShowItalyPhotographyDropdown(true)}
            onMouseLeave={() => setShowItalyPhotographyDropdown(false)}
          >
            Photography
            {showItalyPhotographyDropdown && (
              <div className="italy-dropdownContent">
                <Link to='/nature' className="italy-dropdownItem">Nature</Link>
                <Link to='/city' className="italy-dropdownItem">City</Link>
                <Link to='/flying' className="italy-dropdownItem">Flying</Link>
                <Link to='/food' className="italy-dropdownItem">Food</Link>
                <Link to='/culture' className="italy-dropdownItem">Culture</Link>
                <Link to='/landscape' className="italy-dropdownItem">Landscape</Link>
                <Link to='/Other' className="italy-dropdownItem">Other</Link>
             
              </div>
            )}
          </div>
          <Link to='/contact' className="italynavigation">Contact Me</Link>
        </nav>
        {showMenu ? (
          <img src={closeBtn} alt="Close" className="italy-close-btn" onClick={toggleMenu} />
        ) : (
          <img src={menu} alt="Menu" className="mobMenu11" onClick={toggleMenu} />
        )}
        <div className="navMenu11" style={{ display: showMenu ? 'block' : 'none' }}>

      
          <Link to='/Home' className="italy-toggle-navigation">Home</Link>
          <Link to='/Art' className="italy-toggle-navigation">Art</Link>
          <div
            className="italy-toggle-navigation"
            onMouseEnter={() => setShowItalyPhotographyDropdown(true)}
            onMouseLeave={() => setShowItalyPhotographyDropdown(false)}
          >
            Photography
            {showItalyPhotographyDropdown && (
              <div className="italy-dropdownContent">
                <Link to='/nature' className="italy-dropdownItem">Nature</Link>
                <Link to='/city' className="italy-dropdownItem">City</Link>
                <Link to='/flying' className="italy-dropdownItem">Flying</Link>
                <Link to='/food' className="italy-dropdownItem">Food</Link>
                <Link to='/culture' className="italy-dropdownItem">Culture</Link>
                <Link to='/landscape' className="italy-dropdownItem">Landscape</Link>
                <Link to='/Other' className="italy-dropdownItem">Other</Link>
               
              </div>
            )}
          </div>
          <Link to='/travel' className="italy-toggle-navigation">Travel</Link>
          <Link to='/contact' className="italy-toggle-navigation">Contact Me</Link>
         
        </div>
      </header>


      <div className="container">
      <img src={Italy1} alt="Italy 1" />
      <img src={Italy2} alt="Italy 2" />
      <img src={Italy3} alt="Italy 3" />
      <img src={Italy4} alt="Italy 4" />
       <img src={Italy5} alt="Italy 5" />
       <img src={Italy6} alt="Italy 6" />
     </div>
    </div>
  );
}

export default ItalyPage;





