import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
    return (
        <div className='header'>
            <video autoPlay muted loop className='header-video'>
                <source src={assets.head_video_1} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='header-contents'>
                <h2>Order Farm Fresh To Home</h2>
                <p>Get the freshest goods delivered directly from farmers to your doorstep or business. Whether you're a customer or a retailer, enjoy top-quality fruits, vegetables, grains, and more at unbeatable prices, straight from the farm to you.</p>
            </div>
        </div>
    );
}

export default Header;

