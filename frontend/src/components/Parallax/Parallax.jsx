import React from 'react';
import './Parallax.css';

const ParallaxSection = () => {
  return (
    <div className="parallax-section">
      <div className="parallax">
        <img decoding="async" src="https://myfarmconnect.in/wp-content/uploads/2024/03/top_shape.png" className="top-shape" alt="Top Shape" />
        <p>Discover the<br />
          goodness of nature with<br />
          Farm Root.</p>
        <img decoding="async" src="https://myfarmconnect.in/wp-content/uploads/2024/03/bottom_shape.png" className="bottom-shape" alt="Bottom Shape" />
      </div>
    </div>
  );
};

export default ParallaxSection;
