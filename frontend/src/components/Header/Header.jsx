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
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            </div>
        </div>
    );
}

export default Header;

