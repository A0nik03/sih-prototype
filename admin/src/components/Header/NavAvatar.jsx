import React from 'react';
import userImage from '../../images/user.jpg';

const NavAvatar = () => {
  return (
    <li className='nav-item dropdown pe-3'>
      <button
        type="button"
        className='nav-link nav-profile d-flex align-items-center pe-0'
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="User profile"
      >
        <img src={userImage} alt="Profile" className='rounded-circle' />
        <span className='d-none d-md-block dropdown-toggle ps-2'>Raghunath Singh</span>
      </button>
      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header'>
          <h6>CodeX</h6>
          <span>Web Developer</span>
        </li>
        <li><hr className='dropdown-divider'/></li>
        <li>
          <a href="users-profile.html" className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-person'></i>
            <span>My Profile</span>
          </a>
        </li>
        <li><hr className='dropdown-divider'/></li>
        <li>
          <a href="account-settings.html" className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-gear'></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li><hr className='dropdown-divider'/></li>
        <li>
          <a href="pages-faq.html" className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-question-circle'></i>
            <span>Need Help?</span>
          </a>
        </li>
        <li><hr className='dropdown-divider'/></li>
        <li>
          <button
            type="button"
            className='dropdown-item d-flex align-items-center'
            aria-label="Sign Out"
          >
            <i className='bi bi-box-arrow-right'></i>
            <span>Sign Out</span>
          </button>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
