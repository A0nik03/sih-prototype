import React from 'react';
function NavMessage() {
  return (
    <li className='nav-item dropdown'>
      <button
        type="button"
        className='nav-link nav-icon'
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Messages"
      >
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-success badge-number'>3</span>
      </button>

      {/* Dropdown Menu */}
      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        {/* Dropdown Header */}
        <li className='dropdown-header'>
          <a href="#view-all" className='btn btn-primary'>
            <span className='badge rounded-pill bg-primary p-2 ms-2'>View all</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider'/>
        </li>

        {/* Message Item 1 */}
        <li className='message-item'>
          <a href="#message-1" className='d-flex align-items-center'>
            <img
              src="assets/img/messages-1.jpg"
              alt="Message from Rakesh Kumar"
              className='rounded-circle'
            />
            <div className='ms-3'>
              <h4>Rakesh Kumar</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
              <p className='small text-muted'>4 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider'/>
        </li>

        {/* Message Item 2 */}
        <li className='message-item'>
          <a href="#message-2" className='d-flex align-items-center'>
            <img
              src="assets/img/messages-2.jpg"
              alt="Message from Hemant Chaudhary"
              className='rounded-circle'
            />
            <div className='ms-3'>
              <h4>Hemant Chaudhary</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
              <p className='small text-muted'>6 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider'/>
        </li>

        {/* Dropdown Footer */}
        <li className='dropdown-footer'>
          <a href="#show-all-notifications">Show all notifications</a>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage;
