import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken, userRole } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  const handleAdminClick = () => {
    if (userRole === 'admin') {
      window.location.href = 'http://localhost:5174/';
    } else {
      alert('You are not authorized to access this page.');
    }
  };

  return (
    <div className='navbar'>
  <Link to='/'><img className='logo' src = "./logo.png" alt="Logo" /></Link>
  <ul className="navbar-menu">
    <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
    <a href='#farmer-menu' onClick={() => setMenu("farmer-menu")} className={`${menu === "farmer-menu" ? "active" : ""}`}>Farmers Nearby</a>
    <a href='#howitsworks' onClick={() => setMenu("howitsworks")} className={`${menu === "howitsworks" ? "active" : ""}`}>How It Works</a>
    <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact Us</a>
  </ul>
  <div className="navbar-right">
    {userRole === 'admin' && (
      <button className='navbar-admin-button' onClick={handleAdminClick}>Admin</button>
    )}

      <div className="navbar-icon search-icon">
        <img src={assets.search_icon} alt="Search Icon" />
      </div>
      <div className="navbar-icon basket-icon">
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
      </div>
      <div className="navbar-icon profile-icon">
        {!token ? (
          <Link to='/login'>
            <img src="./locked_profile.png" alt="" />
          </Link>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile Icon" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="Bag Icon" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout Icon" />
                <p>Logout</p>
              </li> 
            </ul>
          </div>
        )}
      </div>
  </div>
</div>

  );
};

export default Navbar;
