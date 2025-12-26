import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import './header.css';  // ← CAMBIA ESTO

export default function MyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className="headerStyle">
        <h1 style={{ margin: "0" }}>Mi App</h1>
        <button 
          className="hamburger"
          id="hamburger" 
          aria-label="Toggle menu" 
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <nav className={`menu ${isMenuOpen ? 'open' : ''}`} id="menu">
          <button 
            className="close"
            id="close-button" 
            aria-label="Close menu" 
            onClick={closeMenu}
          >
            X
          </button>
          <Link to="/home" onClick={closeMenu}>Home</Link>
          <Link to="/menu" onClick={closeMenu}>Mis datos</Link>
          <Link to="/myreports" onClick={closeMenu}>Mis mascotas reportadas</Link>
          <Link to="/messages" onClick={closeMenu}>Mis Mensajes</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
