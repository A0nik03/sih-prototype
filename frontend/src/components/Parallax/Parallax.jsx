import React from 'react';
import './Parallax.css';
import { assets } from '../../assets/assets';

const ParallaxSection = () => {
  return (
    <div className="parallax-section">
      <div className="parallax">
        <img decoding="async" src="https://myfarmconnect.in/wp-content/uploads/2024/03/top_shape.png" className="top-shape" alt="Top Shape" />
        <h2>How Its work</h2>
        <div className="containers">
          <div className="con">
            <img src={assets.h1_img} alt="" />
            <h3>Customer</h3>
            <div className="hover-box">
              <p>LOGIN</p>
              <p>ADD LOCATION</p>
              <p>SELECT ITEM</p>
              <p>NEGOTIATIE OPTION</p>
              <p>FILL SHIPPING DEATILS</p>
              <p>PAY FOR ITEMS</p>
            </div>
          </div>
          <div className="con">
            <img src={assets.h2_img} alt="" />
            <h3>Retailer</h3>
            <div className="hover-box">
              <p>LOGIN</p>
              <p>SELECT ITEM</p>
              <p>NEGOTIATIE OPTION</p>
              <p>FILL SHIPPING DEATILS</p>
              <p>PAY FOR ITEMS</p>
            </div>
          </div>
          <div className="con">
            <img src={assets.h3_img} alt="" />
            <h3>Farmer</h3>
            <div className="hover-box">
              <p>LOGIN</p>
              <p>FILL FULL DETAILS</p>
              <p>ADD ADDRESS</p>
              <p>ACCESS OF ADMIN PANNEL</p>
              <p>ADD PRODUCTS</p>
              <p>SET PRODUCT PRICE</p>
            </div>
          </div>

        </div>
        <img decoding="async" src="https://myfarmconnect.in/wp-content/uploads/2024/03/bottom_shape.png" className="bottom-shape" alt="Bottom Shape" />
      </div>

    </div>
  );
};

export default ParallaxSection;
