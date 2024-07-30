
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './sidebar.css';
import logo from '../../assets/logo.png';
import homeicon from '../../assets/homeicon.png';
import articon from '../../assets/articon.png';
import photographyicon from '../../assets/photographyicon.png';
import travelicon from '../../assets/travelicon.png';
import contacticon from '../../assets/contacticon.png';
import natureicon from '../../assets/natureicon.png';
import cityicon from '../../assets/cityicon.png';
import foodicon from '../../assets/foodicon.png';
import cultureicon from '../../assets/cultureicon.png';
import landscapeicon from '../../assets/landscapeicon.png';
import othericon from '../../assets/othericon.png';
import Dropdownicon from '../../assets/dropdownicon.png'; 
import flyingicon from '../../assets/flyingicon.png';

function Sidebar() {
  const [showPhotographyDropdown, setShowPhotographyDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowPhotographyDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowPhotographyDropdown(false);
  };

  const handleTouchStart = () => {
    setShowPhotographyDropdown(!showPhotographyDropdown);
  };

 
  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sidebar">

      <div className="logo-wrappers">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/home" className="nav-link">
            <span className="icon">
              <img src={homeicon} alt="homeicon" height="24" width="24" />
            </span>
            <p className='sidebar-text'>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/art" className="nav-link">
            <span className="icon">
              <img src={articon} alt="articon" height="24" width="24" />
            </span>
            <p className='sidebar-text'>Art</p>
          </Link>
        </li>

 

        <li>
          <Link to="/travel" className="nav-link">
            <span className="icon">
              <img src={travelicon} alt="travelicon" height="24" width="24" />
            </span>
            <p className='sidebar-text'>Travel</p>
          </Link>
        </li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={preventDefault}
          onTouchEnd={preventDefault}
        >
          <a href="#" className="nav-link">
            <span className="icon">
              <div className='photo-drop-flex'>
                <img src={photographyicon} alt="photographyicon" height="24" width="24" />
               
              </div>
            </span>
            <div className="photography-display8">
              <p className='sidebar-text'>Photography</p>
              <div className="dropdow-wrapper">
                <img src={Dropdownicon} alt="dropdownicon" height="12" width="12" className="photodropdown-icon" />
              </div>
            </div>
            
           
          </a>
          {showPhotographyDropdown && (
            <ul className="dropdown-menu1">
              <div className='downdownflex'>
                <li><Link to="/nature"><img className='dropdownicons' src={natureicon} alt="natureicon" height="24" width="24" /> <p className='dropdown-text'>  Nature</p> </Link></li>
              </div>
              <div className='downdownflex'>
                <li><Link to="/city"><img className='dropdownicons' src={cityicon} alt="cityicon" height="24" width="24" /> <p className='dropdown-text'> City</p>  </Link></li>
              </div>
              <div className='downdownflex'>
                <li><Link to="/flying"><img className='dropdownicons' src={flyingicon} alt="flyingicon" height="24" width="24" /> <p className='dropdown-text'> Flying</p>  </Link></li>
              </div>
              <div className='downdownflex'>
                <li><Link to="/food"><img className='dropdownicons' src={foodicon} alt="foodicon" height="24" width="24" /> <p className='dropdown-text'> Food</p>  </Link></li>
              </div>
              <div className='downdownflex'>
                <li><Link to="/culture"><img className='dropdownicons' src={cultureicon} alt="cultureicon" height="24" width="24" /> <p className='dropdown-text'>  Culture</p> </Link></li>
              </div>
              <div className='downdownflex'>
                <li><Link to="/landscape"><img className='dropdownicons' src={landscapeicon} alt="landscapeicon" height="24" width="24" /> <p className='dropdown-text'>  Landscape</p> </Link></li>
              </div>
              <div className='downdownflex'>
                <li><Link to="/other"><img className='dropdownicons' src={othericon} alt="othericon" height="24" width="24" /> <p className='dropdown-text'>  Other</p> </Link></li>
              </div>
            </ul>
          )}
        </li>
      </ul>
      <ul className="sidebar-menu bottom">
        <li>
          <Link to="/contact" className="nav-link">
            <span className="icon">
              <img src={contacticon} alt="contacticon" height="24" width="24" />
            </span>
            <p className='sidebar-text'>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;






