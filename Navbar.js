import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchButtonColor, setSearchButtonColor] = useState('black');

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (searchTerm) => {
    // Perform search logic here
    console.log('Search term:', searchTerm);
  };

  const handleSearchButtonClick = () => {
    setSearchButtonColor('orangered');
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          {/* Your logo here */}
          Logo
        </div>
        <div className="navbar-toggle" onClick={handleToggleSidebar}>
          <button className="toggle-button">&#9776;</button>
        </div>
        <div className={`navbar-items ${isSidebarOpen ? 'open' : ''}`}>
          {/* Navbar items here */}
          <div className="search-bar">
            <input
              id="searchbar"
              type="text"
              placeholder="Product Search"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button
              id="search"
              style={{ outline:`2px solid ${searchButtonColor}` }}
              onClick={handleSearchButtonClick}
            >
              Search
            </button>
          </div>
          <button className="navbar-button">Notification</button>
          <button className="navbar-button">Language</button>
          <button className="navbar-button">Admin Details</button>
          <button className="navbar-button">Logout</button>
        </div>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-items">
          {/* Sidebar items here */}
          <li>User</li>
          <li>Sub Admin</li>
          <li>Orders</li>
          <li>Catalog</li>
          <li>Content</li>
          <li>Discount</li>
          <li>Shipping</li>
          <li>Delivery Agent</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
