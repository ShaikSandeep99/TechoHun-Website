import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Our Gallery</h1>
      <div className="gallery-grid">
        <img src="/assets/images/gallery1.jpg" alt="Gallery Image 1" />
        <img src="/assets/images/gallery2.jpg" alt="Gallery Image 2" />
        <img src="/assets/images/gallery3.jpg" alt="Gallery Image 3" />
        <img src="/assets/images/gallery4.jpg" alt="Gallery Image 4" />
      </div>
    </div>
  );
};

export default Gallery;
