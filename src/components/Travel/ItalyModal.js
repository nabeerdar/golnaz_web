

// import React from 'react';
// import './italymodal.css';
// import Italy1 from './Travelimages/italy_1.jpeg';
// import Italy2 from './Travelimages/italy_2.jpeg';
// import Italy3 from './Travelimages/italy_3.jpeg';
// import Italy4 from './Travelimages/italy_4.jpeg';
// import Italy5 from './Travelimages/italy_5.jpeg';
// import Italy6 from './Travelimages/italy_6.jpeg';

// function ItalyModal({ onClose }) {
//   return (
//     <div className="italy-modal">

//       <button className="close-btn" onClick={onClose}>Close</button>

//       <div className="italy-images">
//         <img src={Italy1} alt="Italy 1" />
//         <img src={Italy2} alt="Italy 2" />
//         <img src={Italy3} alt="Italy 3" />
//         <img src={Italy4} alt="Italy 4" />
//         <img src={Italy5} alt="Italy 5" />
//         <img src={Italy6} alt="Italy 6" />
//       </div>
//     </div>
//   );
// }

// export default ItalyModal;
// ItalyModal.js

import React from 'react';
import './italymodal.css';
import Italy1 from './Travelimages/italy_1.jpeg';
import Italy2 from './Travelimages/italy_2.jpeg';
import Italy3 from './Travelimages/italy_3.jpeg';
import Italy4 from './Travelimages/italy_4.jpeg';
import Italy5 from './Travelimages/italy_5.jpeg';
import Italy6 from './Travelimages/italy_6.jpeg';

function ItalyModal({ onClose }) {
  const handleImageClick = () => {
    onClose(); 
  };

  return (
    <div className="italy-modal">
     
      <div className="italy-images">
        <img src={Italy1} alt="Italy 1" onClick={handleImageClick} />
        <img src={Italy2} alt="Italy 2" onClick={handleImageClick} />
        <img src={Italy3} alt="Italy 3" onClick={handleImageClick} />
        <img src={Italy4} alt="Italy 4" onClick={handleImageClick} />
        <img src={Italy5} alt="Italy 5" onClick={handleImageClick} />
        <img src={Italy6} alt="Italy 6" onClick={handleImageClick} />
      </div>
    </div>
  );
}

export default ItalyModal;


