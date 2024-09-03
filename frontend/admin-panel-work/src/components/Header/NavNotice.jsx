import React from 'react';

function NavNotice() {
  return (
    <li className='nav-item dropdown'>
      <button
        type="button"
        className='nav-link nav-icon'
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Notifications"
      >
        <i className='bi bi-bell'></i>
        <span className='badge bg-primary badge-number'>4</span>
      </button>
      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
        <li className='dropdown-header'>
          You have 4 new notifications
          <a href="notifications.html">
            <span className='badge rounded-pill bg-primary p-2 ms-2'>
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider'/>
        </li>
        <li className='notification-item'>
          <i className='bi bi-exclamation-circle text-warning'></i>
          <div>
            <h4>Lorem, ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>30 min. ago</p>
          </div>
        </li>
        <li>
          <hr className='dropdown-divider'/>
        </li>
        <li className='notification-item'>
          <i className='bi bi-check-circle text-success'></i>
          <div>
            <h4>Sit rerum fuga</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>2 hrs. ago</p>
          </div>
        </li>
        <li>
          <hr className='dropdown-divider'/>
        </li>
        <li className='notification-item'>
          <i className='bi bi-x-circle text-danger'></i>
          <div>
            <h4>Fit errerum efuga</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>1 hr. ago</p>
          </div>
        </li>
        <li>
          <hr className='dropdown-divider'/>
        </li>
        <li className='dropdown-footer'>
          <a href="notifications.html">Show all notifications</a>
        </li>
      </ul>
    </li>
  );
}

export default NavNotice;
