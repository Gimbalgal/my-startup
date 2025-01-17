import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/logo.png';
import hamburger from '../asset/hamburger.svg'; // The hamburger image
import './navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menuOpen state
    };

    return (
        <nav className="navbar">
            
                <div className="nav-header">
                    <div className="logo-container">
                        <img src={logo} alt="Startup Logo" className="logo" />
                        <span className="start">Start</span>
                    </div>
                

                {/* Hamburger Image that toggles the menu */}
                <div className="hamburger-container" onClick={toggleMenu}>
                    <img src={hamburger} alt="hamburger" className="menu-icon" />
                </div>
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                <li className="nav">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li className="nav">
                    <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
                </li>
                <li className="nav">
                    <Link to="/services" onClick={toggleMenu}>Our Services</Link>
                </li>
                <li className="nav">
                    <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
                </li>
            </ul>
        
        </nav>
    );
}

export default Navbar;
