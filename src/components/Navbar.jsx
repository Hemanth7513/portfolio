import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Menu, X, Terminal } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Timeline' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar glass-card">
      <div className="navbar-container container">
        <NavLink to="/" className="navbar-logo">
          <Shield className="logo-icon" />
          <span className="logo-text">
            Hemanth<span className="gradient-text">.dev</span>
          </span>
        </NavLink>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-menu glass-card">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
