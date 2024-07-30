

// // Travelcomponent.js

// import React, { useState } from 'react';
// import './travelcomponent.css';
// import Greater from './Travelimages/greater.png';
// import Germany from './Travelimages/germany.png';
// import Italy from './Travelimages/italy.png';
// import ItalyModal from './ItalyModal';

// import Denmark from './Travelimages/denmark.png';
// import Munich from './Travelimages/munich.png';
// import Netherlands from './Travelimages/netherlands.png';
// import Sweden from './Travelimages/sweden.png';
// import France from './Travelimages/france_9.jpg';
// import Smaller from './Travelimages/smaller.png';
// import Bg from './Travelimages/bgmap.JPG';

// function Travelcomponent() {
//   const [showItalyModal, setShowItalyModal] = useState(false);

//   const toggleItalyModal = () => {
//     setShowItalyModal(!showItalyModal);
//   };

//   return (
//     <div className="travelcomponent-container">

//       <img className='mapbg' src={Bg} alt="bg"/>

    
//       <div className="travelcomponent-images">
//         <div className='folderimages'>
//           <img src={Germany} alt="Germany"/>
//           <div className="gallery-text">Germany</div>
//         </div>

//         <div className='folderimages' onClick={toggleItalyModal}>
//           <img src={Italy} alt="italy"/>
//           <div className="gallery-text">Italy</div>
//         </div>

//         <div className='folderimages'>
//           <img src={Denmark} alt="Denmark"/>
//           <div className="gallery-text">Denmark</div>
//         </div>

//         <div className='folderimages'>
//           <img src={Munich} alt="munich"/>
//           <div className="gallery-text">Munich</div>
//         </div>

//         <div className='folderimages'>
//           <img src={Netherlands} alt="netherlands"/>
//           <div className="gallery-text">Netherlands</div>
//         </div>

//         <div className='folderimages'>
//           <img src={France} alt="france"/>
//           <div className="gallery-text">France</div>
//         </div>

//         <div className='folderimages'>
//           <img src={Sweden} alt="sweden"/>
//           <div className="gallery-text">Sweden</div>
//         </div>
//       </div>
//       {showItalyModal && <ItalyModal onClose={toggleItalyModal} />}
//     </div>
//   );
// }

// export default Travelcomponent;







// import React, { useState, useEffect } from 'react';
// import './travelcomponent.css';
// import Greater from './Travelimages/greater.png';
// import Germany from './Travelimages/germany.png';
// import Italy from './Travelimages/italy.png';
// import ItalyModal from './ItalyModal';
// import FranceModal from './FranceModal';

// import Denmark from './Travelimages/denmark.png';
// import Munich from './Travelimages/munich.png';
// import Netherlands from './Travelimages/netherlands.png';
// import Sweden from './Travelimages/sweden.png';
// import France9 from './Travelimages/france_9.jpg';
// import Smaller from './Travelimages/smaller.png';
// import Bg from './Travelimages/bgmap.JPG';

// function Travelcomponent() {
//   const [showItalyModal, setShowItalyModal] = useState(false);
//   const [showFranceModal, setShowFranceModal] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const screenWidth = window.innerWidth;
//       setIsMobile(screenWidth < 1030);
      
     
//       if (screenWidth < 1030) {
//         setScrollPosition(0);
//       }
//     };

//     handleResize(); 
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const toggleItalyModal = () => {
//     setShowItalyModal(!showItalyModal);
//   };

//   const toggleFranceModal = () => {
//     setShowFranceModal(!showFranceModal);
//   };

//   const handleScroll = (direction) => {
//     if (direction === 'left') {
//       setScrollPosition((prevPosition) => prevPosition - 100);
//     } else if (direction === 'right') {
//       setScrollPosition((prevPosition) => prevPosition + 100);
//     }
//   };

//   return (
//     <div className="travelcomponent-container">
//       <img className='mapbg' src={Bg} alt="bg"/>

//       <img 
//         src={Smaller} 
//         className={`slider-control smaller ${isMobile ? 'disabled' : ''}`} 
//         onClick={!isMobile ? () => handleScroll('left') : null} 
//         alt="Smaller" 
//       />
//       <img 
//         src={Greater} 
//         className={`slider-control greater ${isMobile ? 'disabled' : ''}`} 
//         onClick={!isMobile ? () => handleScroll('right') : null} 
//         alt="Greater" 
//       />

//       <div className="travelcomponent-images" style={{ transform: `translateX(${scrollPosition}px)` }}>
//         <div className='folderimages'>
//           <img src={Germany} alt="Germany"/>
//           <div className="gallery-text">Germany</div>
//         </div>
//         <div className='folderimages'>
//           <img src={Italy} alt="Italy" onClick={isMobile ? () => window.open('/italy', '_blank') : toggleItalyModal} />
//           <div className="gallery-text">Italy</div>
//         </div>
//         <div className='folderimages'>
//           <img src={Denmark} alt="Denmark"/>
//           <div className="gallery-text">Denmark</div>
//         </div>
//         <div className='folderimages'>
//           <img src={Munich} alt="Munich"/>
//           <div className="gallery-text">Munich</div>
//         </div>
//         <div className='folderimages'>
//           <img src={Netherlands} alt="Netherlands"/>
//           <div className="gallery-text">Netherlands</div>
//         </div>
//         <div className='folderimages'>
//           <img src={France9} alt="France9" onClick={isMobile ? () => window.open('/france', '_blank') : toggleFranceModal} />
//           <div className="gallery-text">France</div>
         
//         </div>
        
//         <div className='folderimages'>
//           <img src={Sweden} alt="Sweden"/>
//           <div className="gallery-text">Sweden</div>
//         </div>
//       </div>
//       {showItalyModal && !isMobile && <ItalyModal onClose={toggleItalyModal} />}
//       {showFranceModal && !isMobile && <FranceModal onClose={toggleFranceModal} />}
//     </div>
//   );
// }

// export default Travelcomponent;



// import React, { useState, useEffect } from 'react';
// import './travelcomponent.css';

// import Germany from './Travelimages/germany.png';
// import Italy from './Travelimages/italy.png';
// import ItalyModal from './ItalyModal';
// import FranceModal from './FranceModal';

// import Denmark from './Travelimages/denmark.png';
// import Munich from './Travelimages/munich.png';
// import Netherlands from './Travelimages/netherlands.png';

// import France9 from './Travelimages/france_9.jpg';

// import Bg from './Travelimages/bgmap.JPG';

// function Travelcomponent() {
//   const [showItalyModal, setShowItalyModal] = useState(false);
//   const [showFranceModal, setShowFranceModal] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const screenWidth = window.innerWidth;
//       setIsMobile(screenWidth < 1030);
      
     
//       if (screenWidth < 1030) {
//         setScrollPosition(0);
//       }
//     };

//     handleResize(); 
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

 
//   const toggleItalyModal = () => {
//     setShowItalyModal(!showItalyModal);
//   };

//   const toggleFranceModal = () => {
//     setShowFranceModal(!showFranceModal);
//   };

//   return (
//     <div className="travelcomponent-container">
//       <img className='mapbg' src={Bg} alt="bg"/>

   
//       <div className="travelcomponent-images" style={{ transform: `translateX(${scrollPosition}px)` }}>
//         <div className='folderimages'>
//           <img src={Germany} alt="Germany"/>
//           <div className="gallery-text">Germany</div>
//         </div>
//         <div className='folderimages'>
//           <img src={Italy} alt="Italy" onClick={isMobile ? () => window.open('/italy', '_blank') : toggleItalyModal} />
//           <div className="gallery-text">Italy</div>
//         </div>
//         <div className='folderimages'>
//           <img src={Denmark} alt="Denmark"/>
//           <div className="gallery-text">Denmark</div>
//         </div>
//         <div className='folderimages'>
//           <img src={Munich} alt="Munich"/>
//           <div className="gallery-text">Munich</div>
//         </div>
//         <div className='folderimages'>
//           <img src={Netherlands} alt="Netherlands"/>
//           <div className="gallery-text">Netherlands</div>
//         </div>
//         <div className='folderimages'>
//           <img src={France9} alt="France9" onClick={isMobile ? () => window.open('/france', '_blank') : toggleFranceModal} />
//           <div className="gallery-text">France</div>
         
//         </div>
        
     
//       </div>
//       {showItalyModal && !isMobile && <ItalyModal onClose={toggleItalyModal} />}
//       {showFranceModal && !isMobile && <FranceModal onClose={toggleFranceModal} />}
//     </div>
//   );
// }

// export default Travelcomponent;


import React, { useState, useEffect } from 'react';
import './travelcomponent.css';

import Germany from './Travelimages/germany.png';
import Italy from './Travelimages/italy.png';
import ItalyModal from './ItalyModal';
import FranceModal from './FranceModal';

import Denmark from './Travelimages/denmark.png';
import Munich from './Travelimages/munich.png';
import Netherlands from './Travelimages/netherlands.png';

import France9 from './Travelimages/france_9.jpg';

import Bg from './Travelimages/bgmap.JPG';

function Travelcomponent() {
  const [showItalyModal, setShowItalyModal] = useState(false);
  const [showFranceModal, setShowFranceModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 1030);

      if (screenWidth < 1030) {
        setScrollPosition(0);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleItalyModal = () => {
    setShowItalyModal(!showItalyModal);
    setShowFranceModal(false); // Close France modal if Italy is clicked
  };

  const toggleFranceModal = () => {
    setShowFranceModal(!showFranceModal);
    setShowItalyModal(false); // Close Italy modal if France is clicked
  };

  return (
    <div className="travelcomponent-container">
      <img className='mapbg' src={Bg} alt="bg"/>

      <div className="travelcomponent-images" style={{ transform: `translateX(${scrollPosition}px)` }}>
        <div className='folderimages'>
          <img src={Germany} alt="Germany"/>
          <div className="gallery-text">Germany</div>
        </div>
        <div className='folderimages'>
          <img src={Italy} alt="Italy" onClick={isMobile ? () => window.open('/italy', '_blank') : toggleItalyModal} />
          <div className="gallery-text">Italy</div>
        </div>
        <div className='folderimages'>
          <img src={Denmark} alt="Denmark"/>
          <div className="gallery-text">Denmark</div>
        </div>
        <div className='folderimages'>
          <img src={Munich} alt="Munich"/>
          <div className="gallery-text">Munich</div>
        </div>
        <div className='folderimages'>
          <img src={Netherlands} alt="Netherlands"/>
          <div className="gallery-text">Netherlands</div>
        </div>
        <div className='folderimages'>
          <img src={France9} alt="France9" onClick={isMobile ? () => window.open('/france', '_blank') : toggleFranceModal} />
          <div className="gallery-text">France</div>
        </div>
      </div>
      {showItalyModal && !isMobile && <ItalyModal onClose={toggleItalyModal} />}
      {showFranceModal && !isMobile && <FranceModal onClose={toggleFranceModal} />}
    </div>
  );
}

export default Travelcomponent;
