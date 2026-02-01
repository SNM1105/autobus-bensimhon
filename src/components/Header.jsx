import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon">
              <img src="/autobus-bensimhon-logo.png" alt="Autobus Bensimhon" />
            </div>
            <div className="logo-text">
              <span className="logo-name">AUTOBUS</span>
              <span className="logo-name">BENSIMHON</span>
            </div>
          </Link>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <NavLink to="/" className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/services" className="nav-link" onClick={closeMenu}>
              Services
            </NavLink>
            <NavLink to="/contact" className="nav-link nav-link-cta" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
