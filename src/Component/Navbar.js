import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import start from '../asset/start.svg';
import hamburger from '../asset/hamburger.svg'; // The hamburger image
import './navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menuOpen state
    };

    return (
        <nav className="navbar">
            
                <div className="navbar-header">
                        <div className="logo-container">
                            <img src={start} alt="Startup Logo" className="logo" id="start" />
                        </div>
                        <div className="hamburger-container" onClick={toggleMenu}>
                            <img src={hamburger} alt="hamburger" className="menu-icon" id="menu" />
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
