


import React, { useState, useEffect } from 'react';
import './natural'; 
import close from '../../assets/close.png'; 
import city_img_1 from '../../assets/city_img_1.jpg';
import city_img_2 from '../../assets/city_img_2.jpg';
import city_img_3 from '../../assets/city_img_3.jpg';



function Country() {
 
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);

  const images = [city_img_1, city_img_2, city_img_3];

  useEffect(() => {
    if (selectedImageIndex !== null) {
      setShowLeftBtn(true);
      setShowRightBtn(true);
      if (selectedImageIndex === 0) {
        setShowLeftBtn(false);
      }
      if (selectedImageIndex === images.length - 1) {
        setShowRightBtn(false);
      }
    
      document.body.style.overflowY = 'hidden';
    } else {
      
      document.body.style.overflowY = 'auto';
    }
  }, [selectedImageIndex, images.length]);

  
  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };


  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

 
  const handleClose = () => {
    setSelectedImageIndex(null); 
  };

  return (
    <div className="natural-container">
      <div className="main-posts">
     
        {images.map((image, index) => (
          <div className="post-box" key={index} onClick={() => setSelectedImageIndex(index)}>
            <img src={image} alt={`city_img_${index}`} />
          </div>
        ))}
      </div>
    
      {selectedImageIndex !== null && (
        <div className="overlay">
    
          {showLeftBtn && <button className="nav-btn left-btn" onClick={handlePrev}>{'<'}</button>}
          <img src={images[selectedImageIndex]} alt={`selected_image_${selectedImageIndex}`} className="selected-image" />
          {showRightBtn && <button className="nav-btn right-btn" onClick={handleNext}>{'>'}</button>}
         
          <img src={close} alt="close" className="close1-btn" onClick={handleClose} />
        </div>
      )}
    </div>
  );
}

export default Country;





