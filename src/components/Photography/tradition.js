
import React, { useState, useEffect } from 'react';
import './natural.css';
import close from '../../assets/close.png';
import culture_img_1 from '../../assets/culture_img_1.jpeg';
import culture_img_2 from '../../assets/culture_img_2.jpeg';
import culture_img_3 from '../../assets/culture_img_3.jpeg';
import culture_img_4 from '../../assets/culture_img_4.jpeg';
import culture_img_5 from '../../assets/culture_img_5.jpeg';


function Tradition() {
 
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);

 
  const images = [culture_img_1, culture_img_2, culture_img_3, culture_img_4, culture_img_5];

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
            <img src={image} alt={`culture_img_${index + 1}`} />
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

export default Tradition;
