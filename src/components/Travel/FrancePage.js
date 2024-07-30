


// import React from 'react';
// import './francepage.css';
// import logo from '../../assets/logo.png';
// import { Link } from "react-router-dom"; 
// import France1 from './Travelimages/france_1.jpg';
// import France2 from './Travelimages/france_2.jpg';
//  import France3 from './Travelimages/france_3.jpg';
//  import France4 from './Travelimages/france_4.JPG';
//  import France5 from './Travelimages/france_5.jpg';
//  import France6 from './Travelimages/france_6.jpg';
//  import France7 from './Travelimages/france_7.jpg';
//  import France8 from './Travelimages/france_8.jpg';
//  import France10 from './Travelimages/france_10.jpg';
//  import France11 from './Travelimages/france_11.jpg';
//  import France12 from './Travelimages/france_12.jpg';
//  import France13 from './Travelimages/france_13.jpg';


// function FrancePage() {
//   return (
//     <div className="francecontainer">
    
//       <header className="franceheader">
//         <img className="francelogo" src={logo} alt="logo"/>
//         <nav className="francedesktop-menu">
//           <Link to='/Home' className="francenavigation">Home</Link>
//           <Link to='/travel' className="francenavigation">Travel</Link>
      
//           <Link to='/photography' className="francenavigation">Photography</Link>
//           <Link to='/contact' className="francenavigation">Contact Me</Link>
         
//         </nav>
//       </header>
   
//       <div className="image-gallery">
//         <img src={France1} alt="France 1" />
//         <img src={France2} alt="France 2" />
//         <img src={France3} alt="France 3" />
//         <img src={France4} alt="France 4" />
//         <img src={France5} alt="France 5" />
//         <img src={France6} alt="France 6" />
//         <img src={France7} alt="France 7" />
//         <img src={France8} alt="France 8" />
//          <img src={France10} alt="France 10" />
//          <img src={France11} alt="France 11" />
//           <img src={France12} alt="France 12" />
//          <img src={France13} alt="France 13" />
      
//       </div>
   
//     </div>
//   );
// }

// export default FrancePage;




// import React, { useState } from 'react';
// import './francepage.css';
// import logo from '../../assets/logo.png';
// import { Link } from "react-router-dom"; 
// import France1 from './Travelimages/france_1.jpg';
// import France2 from './Travelimages/france_2.jpg';
// import France3 from './Travelimages/france_3.jpg';
// import France4 from './Travelimages/france_4.JPG';
// import France5 from './Travelimages/france_5.jpg';
// import France6 from './Travelimages/france_6.jpg';
// import France7 from './Travelimages/france_7.jpg';
// import France8 from './Travelimages/france_8.jpg';
// import France10 from './Travelimages/france_10.jpg';
// import France11 from './Travelimages/france_11.jpg';
// import France12 from './Travelimages/france_12.jpg';
// import France13 from './Travelimages/france_13.jpg';

// function FrancePage() {


//   return (
//     <div className="francecontainer">
   
//       <header className="franceheader">
//         <img className="francelogo" src={logo} alt="logo"/>
//         <nav className="francedesktop-menu">
//           <Link to='/Home' className="francenavigation">Home</Link>
//           <Link to='/travel' className="francenavigation">Travel</Link>
//           <Link to='/art' className="francenavigation">Art</Link>
//           <div
//             className="francenavigation"
       
//           >
//             Photography
        
//           </div>
         
//           <Link to='/contact' className="francenavigation">Contact Me</Link>
//         </nav>
//       </header>

//       <div className="image-gallery">
//       <img src={France1} alt="France 1" />
//         <img src={France2} alt="France 2" />
//         <img src={France3} alt="France 3" />
//          <img src={France4} alt="France 4" />
//          <img src={France5} alt="France 5" />
//          <img src={France6} alt="France 6" />
//          <img src={France7} alt="France 7" />
//          <img src={France8} alt="France 8" />
//           <img src={France10} alt="France 10" />
//           <img src={France11} alt="France 11" />
//            <img src={France12} alt="France 12" />
//          <img src={France13} alt="France 13" />
//       </div>
   
//     </div>
//   );
// }

// export default FrancePage;

import React, { useState } from 'react';
import './francepage.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import closeBtn from "../../assets/close.png";
import { Link } from "react-router-dom"; 
import France1 from './Travelimages/france_1.jpg';
import France2 from './Travelimages/france_2.jpg';
import France3 from './Travelimages/france_3.jpg';
import France4 from './Travelimages/france_4.JPG';
import France5 from './Travelimages/france_5.jpg';
import France6 from './Travelimages/france_6.jpg';
import France7 from './Travelimages/france_7.jpg';
import France8 from './Travelimages/france_8.jpg';
import France10 from './Travelimages/france_10.jpg';
import France11 from './Travelimages/france_11.jpg';
import France12 from './Travelimages/france_12.jpg';
import France13 from './Travelimages/france_13.jpg';

function FrancePage() {
  const [showFrancePhotographyDropdown, setShowFrancePhotographyDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="francecontainer">
      <header className="franceheader">
        <img className="francelogo" src={logo} alt="logo" style={{ display: showMenu ? 'none' : 'block' }}/>
        <nav className="francedesktop-menu">
          <Link to='/Home' className="francenavigation">Home</Link>
          <Link to='/travel' className="francenavigation">Travel</Link>
          <Link to='/art' className="francenavigation">Art</Link>
          <div
            className="francenavigation"
            onMouseEnter={() => setShowFrancePhotographyDropdown(true)}
            onMouseLeave={() => setShowFrancePhotographyDropdown(false)}
          >
            Photography
            {showFrancePhotographyDropdown && (
              <div className="france-dropdownContent">
                <Link to='/nature' className="france-dropdownItem">Nature</Link>
                <Link to='/city' className="france-dropdownItem">City</Link>
                <Link to='/flying' className="france-dropdownItem">Flying</Link>
                <Link to='/food' className="france-dropdownItem">Food</Link>
                <Link to='/culture' className="france-dropdownItem">Culture</Link>
                <Link to='/landscape' className="france-dropdownItem">Landscape</Link>
                <Link to='/Other' className="france-dropdownItem">Other</Link>
                {/* Add more links as needed */}
              </div>
            )}
          </div>
          <Link to='/contact' className="francenavigation">Contact Me</Link>
        </nav>
        {showMenu ? (
          <img src={closeBtn} alt="Close" className="france-close-btn" onClick={toggleMenu} />
        ) : (
          <img src={menu} alt="Menu" className="mobMenu11" onClick={toggleMenu} />
        )}
        <div className="navMenu11" style={{ display: showMenu ? 'block' : 'none' }}>

        {/* <img src={closeBtn} alt="Close" className="france-close-btn" onClick={toggleMenu} /> */}
          <Link to='/Home' className="france-toggle-navigation">Home</Link>
          <Link to='/Art' className="france-toggle-navigation">Art</Link>
          <div
            className="france-toggle-navigation"
            onMouseEnter={() => setShowFrancePhotographyDropdown(true)}
            onMouseLeave={() => setShowFrancePhotographyDropdown(false)}
          >
            Photography
            {showFrancePhotographyDropdown && (
              <div className="france-dropdownContent">
                <Link to='/nature' className="france-dropdownItem">Nature</Link>
                <Link to='/city' className="france-dropdownItem">City</Link>
                <Link to='/flying' className="france-dropdownItem">Flying</Link>
                <Link to='/food' className="france-dropdownItem">Food</Link>
                <Link to='/culture' className="france-dropdownItem">Culture</Link>
                <Link to='/landscape' className="france-dropdownItem">Landscape</Link>
                <Link to='/Other' className="france-dropdownItem">Other</Link>
                {/* Add more links as needed */}
              </div>
            )}
          </div>
          <Link to='/travel' className="france-toggle-navigation">Travel</Link>
          <Link to='/contact' className="france-toggle-navigation">Contact Me</Link>
         
        </div>
      </header>

      <div className="image-gallery">
        <img src={France1} alt="France 1" />
        <img src={France2} alt="France 2" />
        <img src={France3} alt="France 3" />
        <img src={France4} alt="France 4" />
        <img src={France5} alt="France 5" />
        <img src={France6} alt="France 6" />
        <img src={France7} alt="France 7" />
        <img src={France8} alt="France 8" />
        <img src={France10} alt="France 10" />
        <img src={France11} alt="France 11" />
        <img src={France12} alt="France 12" />
        <img src={France13} alt="France 13" />
      </div>
    </div>
  );
}

export default FrancePage;
