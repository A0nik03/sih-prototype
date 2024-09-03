import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets'; // Import assets
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {/* Dashboard */}
        <li className="nav-item">
          <a href="#dashboard" className="nav-link">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/* Add Items */}
        <li className="nav-item">
          <NavLink to="/add" className="nav-link">
            <span>Add Items</span>
          </NavLink>
        </li>

        {/* List Items */}
        <li className="nav-item">
          <NavLink to="/list" className="nav-link">
            <span>List Items</span>
          </NavLink>
        </li>

        {/* Orders */}
        <li className="nav-item">
          <NavLink to="/orders" className="nav-link">
            <span>Orders</span>
          </NavLink>
        </li>

        {/* User Management */}
        <li className="nav-item">
          <a
            href="#user-management"
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#user-management-nav"
            aria-expanded="false"
            aria-controls="user-management-nav"
          >
            <i className="bi bi-people"></i>
            <span>User Management</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="user-management-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#all-users">
                <i className="bi bi-person"></i>
                <span>All Users</span>
              </a>
            </li>
            <li>
              <a href="#add-user">
                <i className="bi bi-person-plus"></i>
                <span>Add User</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Reports */}
        <li className="nav-item">
          <a href="#reports" className="nav-link">
            <i className="bi bi-bar-chart"></i>
            <span>Reports</span>
          </a>
        </li>

        {/* Settings */}
        <li className="nav-item">
          <a
            href="#settings"
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#settings-nav"
            aria-expanded="false"
            aria-controls="settings-nav"
          >
            <i className="bi bi-gear"></i>
            <span>Settings</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="settings-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#security">
                <i className="bi bi-shield-lock"></i>
                <span>Security</span>
              </a>
            </li>
            <li>
              <a href="#preferences">
                <i className="bi bi-sliders"></i>
                <span>Preferences</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Help */}
        <li className="nav-item">
          <a href="#help" className="nav-link">
            <i className="bi bi-question-circle"></i>
            <span>Help & Support</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
