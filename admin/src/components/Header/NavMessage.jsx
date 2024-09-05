import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { assets } from '../../../../frontend/src/assets/assets';

function NavMessage() {
  const [messages, setMessages] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:4000/api/negotiation/messages')
      .then(response => {
        setMessages(response.data);
        setUnreadCount(response.data.filter(msg => !msg.read).length);
      })
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

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
        {unreadCount > 0 && <span className='badge bg-success badge-number'>{unreadCount}</span>}
      </button>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li>
          <hr className='dropdown-divider'/>
        </li>

        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <React.Fragment key={msg._id}>
              <li className='message-item'>
                <a href={`#message-${msg._id}`} className='d-flex align-items-center'>
                  <img
                    src={msg.image || assets.profile_icon}
                    alt={`Message from ${msg.senderName}`}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <h4>{msg.senderName}</h4>
                    <p>{msg.message}</p>
                    <p className='small text-muted'>{new Date(msg.timestamp).toLocaleTimeString()}</p>
                  </div>
                </a>
              </li>
              {index < messages.length - 1 && <li><hr className='dropdown-divider'/></li>}
            </React.Fragment>
          ))
        ) : (
          <li className='message-item'>
            <p className='text-center'>No messages yet.</p>
          </li>
        )}


        <li className='dropdown-footer'>
          <a href="#show-all-notifications">Show all notifications</a>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage;
