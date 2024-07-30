import React from 'react';
import './francemodal.css';
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


function FranceModal({ onClose }) {
  const handleImageClick = () => {
    onClose();
  };
  return (
    <div className="france-modal">
   
      <div className="france-images">
        <img src={France1} alt="france-1" onClick={handleImageClick} />
        <img src={France2} alt="france-2" onClick={handleImageClick} />
        <img src={France13} alt="france-13" onClick={handleImageClick} />
        <img src={France3} alt="france-3" onClick={handleImageClick} />
        <img src={France4} alt="france-4" onClick={handleImageClick} />
        <img src={France5} alt="france-5" onClick={handleImageClick} />
        <img src={France6} alt="france-6" onClick={handleImageClick} />
        <img src={France7} alt="france-7" onClick={handleImageClick} />
        <img src={France8} alt="france-8" onClick={handleImageClick} />
        <img src={France10} alt="france-10" onClick={handleImageClick} />
        <img src={France11} alt="france-11" onClick={handleImageClick} />
        <img src={France12} alt="france-12" onClick={handleImageClick} />
      
      </div>
    </div>
  );
}





export default FranceModal;
