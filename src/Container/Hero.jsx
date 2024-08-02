import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const images = [
  '/src/assets/image1.jpg',
  '/src/assets/image2.jpg',
  '/src/assets/image3.jpg',
  '/src/assets/image5.jpg',
  '/src/assets/image4.jpg',
  '/src/assets/image4.jpg',
];
function Hero() {

  return (
    <>
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 300: 1, 500: 2, 500: 3}}
    >
      <Masonry gutter="10px">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            style={{ width: '100%', display: 'block', padding: '10px',}}
            alt={`Gallery Image ${index + 1}`}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
    </>
  );
}

export default Hero
